import React, { Component } from 'react';
import Header from './components/ Header';
import Main from './components/ Main';
import Footer from './components/ Footer';

import data from "./data/data.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  render() {
    console.log(data)
    return (
      <div>
        {/* let header= new Header() */}
        <Header/>
        <Main/>
    
        <Footer/>
      </div>
    )
  }
}

export default App;