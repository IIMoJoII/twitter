import React from 'react';
import { Route } from 'react-router-dom'

import HomePage from "./pages/HomePage";
import SignIn from "./pages/signin";

import './App.css'


function App() {
  return (
    <div className="App">
        <div className="signing">
            <Route exact path="/" component={SignIn} />
            <Route exact path="/home" component={HomePage} />
        </div>
    </div>
  );
}

export default App;
