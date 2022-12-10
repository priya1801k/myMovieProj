import React from 'react';
import './Banner.css';


function Banner() {

     // https://api.themoviedb.org/3/trending/movie/week?api_key=87331ed314eef6f9cf715c3a5637e9f6
    const [firstMovie,setFirstMovie] = React.useState("");

     React.useEffect(
        ()=>{
        async function fetchData(){
          //fetching data from api
          let response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=87331ed314eef6f9cf715c3a5637e9f6");
           //response you will get in buffer => convert it into json form
           let data = await response.json();
           console.log("data",data);
           let movies = data.results;
           console.log("movies",movies);
           setFirstMovie(movies[0]);
     }
    fetchData();
} ,[]);
 
  return(
     <> 
        {firstMovie === "" ? <h2>Movies are yet to come</h2> :
        <>
            <h2>{firstMovie.original_title}</h2>
            <img className='poster-img' src={"https://image.tmdb.org/t/p/w500/"+ firstMovie.backdrop_path} alt="thisIsTitle"></img>
        </>}
     </>

  )
}

export default Banner