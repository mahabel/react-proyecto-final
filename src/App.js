import React, { Component } from "react";
import "./App.css";
import moment from 'moment';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import PortfolioContainer from "./components/portfolioContainer";
import NavigationContainer from "./components/navigation/navigation-container";
import Home from "./components/pages/home";
import About from "./components/pages/about";
export default class App extends Component {
render() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavigationContainer />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/about-me" element={<About/>} />
          </Routes>
        </div>
      </Router>

     <h1>Mahalia belmont Portfolio </h1>
     <div>
      {moment().format('MMMM Do YYYY, h:mm:ss a')}
     </div>
     <PortfolioContainer/>
    </div>
  );
}
}

