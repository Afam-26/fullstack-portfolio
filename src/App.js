import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Main from './pages/Main/Main';

function App() {
  return (
    <>
    <BrowserRouter>
    <Container>
      
    <NavBar />   
    <Main/>  
    </Container>
    </BrowserRouter>
    </>
  );
}

export default App;
