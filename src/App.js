import React from 'react';
import './App.css';
import NavbarTop from './components/NavbarTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Switch, Redirect } from "react-router-dom";
// import logo from './logo.svg';
// import React from 'react';
// import Plot from 'react-plotly.js';

// import Chart from './components/Chart';
import Home from './Home';
import Equipment from './components/Equipment/Equipment';
// import PositionerParameters from './components/Equipment/Parameters';
import Tests from './components/Tests/Tests';
import PowerBI from './components/Data/PowerBI';
import DUT from './components/DUT/DUT';
import Parent from './Parent';
import Map from './Map';
import DUT_GEN2 from './components/DUT/DUT_GEN2';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <hr />
        <NavbarTop />

        <Link to="/Home"></Link> 

        <Link to="/DUT"></Link> 

        <Link to="/Positioner"></Link> 

        <Switch>
          <Redirect exact from="/" to="/Home" />
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/DUT/DUT">
            <DUT />
          </Route>
          <Route path="/DUT/DUT_GEN2">
            <DUT_GEN2 />
          </Route>
          <Route path="/Equipment">
            <Equipment />
          </Route>
          <Route path="/Tests">
            <Tests />
          </Route>
          <Route path="/Data/PowerBI">
            <PowerBI />
          </Route>
          <Route path="/Parent">
            <Parent />
          </Route>
          <Route path="/Map">
            <Map />
          </Route>
        </Switch>
      </div>
    );
  }
}


export default App;
