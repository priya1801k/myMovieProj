import React from 'react';
// import { Switch } from 'react-router-dom';
import './GenreBox.css';

const GenreBox= (props)=>{
    return (<div>
        <h4>GenreBox</h4>
        <div className='genreTitle'>
        {props.genres.map((genre,index)=>{
            return (<h4 key={index}>{genre}</h4>)
        })}
        </div>
        <div>
            <input type="text" placeholder="search" onChange={props.setText} value={props.value}/>
            <input value={props.num} type="number" placeholder="5" onChange={props.setVal} ></input>
        </div>
    </div>)
}

export default GenreBox;




// import React from 'react'

// function AllGenreBox() {
//   return (
//     <div>
//         <div className='genreTitle'>
//         {props.genres.map((genre,index)=>{
//             <Switch>
//                 return (<Route to="/home/allgenres" from="/home"><h4 key={index}>{genre}</h4></Route>)
//             </Switch>
//         })}
//         </div>
//     </div>
//   )
// }

// export default AllGenreBox;



// // import React from 'react';
// import Favorite from './Favorite';
// import Home from './Home';
// import PageNotFound from './PageNotFound';
// import { Redirect, Route,Switch } from 'react-router-dom';
// function Movie() {

  
//   return (
//     <div>
//       <Switch>
//         <Route exact path="/home" component={Home} />
//         <Route exact path="/Favorite" component={Favorite} />
//         <Redirect exact from='/' to='/home'></Redirect>
//         <Route component={PageNotFound}  />
//       </Switch>
//     </div>
//   );
// }


// export default Movie;