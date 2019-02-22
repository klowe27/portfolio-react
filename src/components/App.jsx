import React from 'react';
import Homepage from './Homepage';
import Header from './Header';
import Stars from './Stars';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Stars/>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
