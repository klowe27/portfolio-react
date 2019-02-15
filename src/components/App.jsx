import React from 'react';
import Homepage from './Homepage';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
    <style global jsx>{`
      body {
        background-image: url('./assets/images/background.jpg');
        background-repeat: repeat;
        font-family: 'Roboto', sans-serif;
        color: #434343;
      }

      h1 {
        font-weight: 100;
        color: #434343;
        text-align: center;
        font-size: 65px;
      }

      h2 {
        color: #7cb7de;
        font-weight: 100;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 30px;
        font-size: 30px;
        margin-top: 20px;
      }

      h3 {
        color: #7cb7de;
        font-weight: 300;
        margin-bottom: 20px;
        font-size: 24px;
      }

      h4 {
        margin-top: 30px;
        margin-bottom: 6px;
        font-size: 18px;
      }

      a {
        color: #337ab7;
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
