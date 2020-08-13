import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom';
import Home from './components/screens/Home';
import Navbar from './components/NavBar';

const Routing = () =>{
  return(
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routing />
    </BrowserRouter>
  );
};

export default App;
