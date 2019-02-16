import React from 'react';
import Homepage from './Homepage';
import DarkHomepage from './DarkHomepage'
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/dark' component={DarkHomepage} />
      </Switch>
    </div>
  );
}

export default App;
