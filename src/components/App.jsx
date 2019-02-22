import React from 'react';
import Homepage from './Homepage';
import Header from './Header';
import StarList from './StarList';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <StarList/>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
