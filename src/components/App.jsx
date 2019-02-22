import React from 'react';
import Homepage from './Homepage';
import Header from './Header';
import StarList from './StarList';
import Error404 from './Error404';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <StarList/>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route component={Error404} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
