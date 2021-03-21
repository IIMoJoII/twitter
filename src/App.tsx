import React from 'react';
import { Route } from 'react-router-dom'

import HomePage from "./pages/Home";
import SignIn from "./pages/Signing";
import Layout from "./pages/Layout";

import './App.css'


function App() {
  return (
      <div className="App">
        <div className="signing">
          <Route exact path="/signing" component={SignIn} />
          <Layout>
            <Route exact path="/home" component={HomePage} />
          </Layout>
        </div>
      </div>
  );
}

export default App;
