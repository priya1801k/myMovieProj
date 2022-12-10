
import React from "react";
import "./MovieList.css";
import { FcCheckmark, FcPlus } from "react-icons/fc";

function MovieList(props) {
  // https://api.themoviedb.org/3/trending/movie/week?api_key=87331ed314eef6f9cf715c3a5637e9f6
  const [Movies, setMovies] = React.useState([]);
  const [value, setValue] = React.useState("");
  const setText = (e) => {
    let newValue = e.target.value;
    setValue(newValue);
  };

  React.useEffect(() => {
    async function fetchData() {
      //fetching data from api
      let response = await fetch(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=87331ed314eef6f9cf715c3a5637e9f6&page="+props.globalPageNumber
      );
      //response you will get in buffer => convert it into json form
      let data = await response.json();
      // console.log("data",data);
      let movies = data.results;
      // console.log("movies",movies);
      setMovies(movies);
      // console.log("getMovies",Movies);
    }
    fetchData();
  }, [props.globalPageNumber]);

  //favorite part

   const [favMovies,setFavMovies] = React.useState([]);

  function presentInFav(uniqueMovieId){
     for(let i = 0 ; i < favMovies.length; i++ ){
      if(favMovies[i].id === uniqueMovieId){
         return true;
      }
     }
     return false;
  }

  function addToFav(uniqueMovieId){
    console.log(uniqueMovieId);
    for(let i = 0 ; i < Movies.length; i++ ){
      if(Movies[i].id === uniqueMovieId){
         setFavMovies([...favMovies,Movies[i]]);
         console.log([...favMovies,Movies[i]]);

         //add to local storage
         let prevStArray = localStorage.getItem("favourites") || "[]";
         let prevArray = JSON.parse(prevStArray);
         prevArray.push(Movies[i]);
         prevArray= JSON.stringify(prevArray);
        localStorage.setItem("favourites",prevArray);
         break;
      }
     }
     
     
  }

  function removeFromFav(uniqueMovieId){
    console.log(uniqueMovieId);
    let result = favMovies.filter(
      (movieObj)=>{
        return movieObj.id !== uniqueMovieId;
      }
    );
    setFavMovies(result);
    // for(let i = 0 ; i < favMovies.length; i++ ){
    //   if(favMovies[i].id === uniqueMovieId){
    //      let delMovie = favMovies;
    //      let result = delMovie.splice(i,i+1);
    //      setFavMovies(result);
    //   }
    //  }
    let prevStArray = localStorage.getItem("favourites")||"[]";
    let prevArray = JSON.parse(prevStArray);
    prevArray = prevArray.filter((movieObj)=>{
      return movieObj.id !== uniqueMovieId;
    })
    prevArray = JSON.stringify(prevArray);
    localStorage.setItem("favourites",prevArray);
     
    let store = localStorage.getItem("favourites");
    store = store.parse(store);
     console.log(store);
  }

  function FilterLogic(searchText, movieArray) {
    let filteredMovieArray = [];
    for (let i = 0; i < movieArray.length; i++) {
      let upperSearchText = searchText.toUpperCase(); //searchText ko uppercase
      let movieName = movieArray[i].original_title; //movie name get kr lo movieArray se and again usko bhi upperCase kar do.
      let upperText = movieName.toUpperCase();
      let ans = upperText.includes(upperSearchText); //Ab check kro ki  movieList wale name mein jo hmne search kra hai wo hai ya nahi it will give true or false
      if (ans === true) {
        //if true then that movie from movie lisst add kr do to existinglist category
        filteredMovieArray.push(movieArray[i]);
      }
    }
    return filteredMovieArray;
  }

  let searchedMovies = FilterLogic(value, Movies);

  return (
    <>
      <h2>Trending Movies</h2>
      <input onChange={setText} style={{ marginLeft: "23px" }} />
      {Movies === "" ? (
        <h2>Movies are yet to come</h2>
      ) : (
        <div className="trending-box">
          {searchedMovies.map((movieObj, index) => {
            return (
              <div key={index} className="list-box">
                <h2>{movieObj.title}</h2>
                <img
                  className="list-img"
                  key={index}
                  alt="thisIsFromMOvieList"
                  src={
                    "https://image.tmdb.org/t/p/w500/" + movieObj.poster_path
                  }
                ></img>
                {presentInFav(movieObj.id)?
                <FcCheckmark onClick={function(){removeFromFav(movieObj.id)}} ></FcCheckmark>:
                <FcPlus  onClick={function(){addToFav(movieObj.id)}}  ></FcPlus>}         
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default MovieList;
