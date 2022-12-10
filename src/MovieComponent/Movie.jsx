import React from 'react';
import Favorite from './Favorite';
import Home from './Home';
import PageNotFound from './PageNotFound';
import { Redirect, Route,Switch } from 'react-router-dom';
function Movie() {

  
  return (
    <div>
      <Switch>
        <Route  path="/home" component={Home} />
        <Route  path="/Favorite" component={Favorite} />
        <Redirect  from='/' to='/home'></Redirect>
        <Route component={PageNotFound}  />
      </Switch>
    </div>
  );
}


export default Movie;