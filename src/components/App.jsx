import React from 'react';
import Homepage from './Homepage';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
    <style global jsx>{`
      body {
        margin: 0;
        font-family: 'Helvetica Neue';
      }
    `} </style>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
