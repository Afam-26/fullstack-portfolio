import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Container>
      
    <NavBar />     
    </Container>
    </BrowserRouter>
    </>
  );
}

export default App;
