import React from "react";
// import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Main from './pages/Main/Main';
import AboutMe from "./pages/AboutMe/AboutMe";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
  return (    
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/main" component={Main} ></Route>
        <Route exact path="/about" component={AboutMe} ></Route>
        <Route exact path="/projects" component={Projects} ></Route>        
        <Route exact path="/contact" component={Contact} ></Route>
        <Main />
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
