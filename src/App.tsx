import React from 'react';
import { Route } from 'react-router-dom'

import HomePage from "./pages/Home";
import SignIn from "./pages/Signing";

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
