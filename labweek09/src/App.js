import logo from './logo.svg';
import './App.css';
import React from "react";
import Welcome from "./components/Welcome/Welcome";
import Name from "./components/Name";
import Student from "./components/Student/Student"
import College from "./components/College"
import About from "./components/About/About"
function App() {
  return (
    <React.Fragment>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome intro="Welcome to Fullstack Development - I"/>
        <About info="React JS Programming Week09 Lab Exercise"/>
        <Student stuId="101358649"/>
        <Name fnm="Nhan" lnm="Nguyen"/>
        <College college="George Brown College, Toronto"/>
  
      </header>
    </React.Fragment>
    
  );
}

export default App;
