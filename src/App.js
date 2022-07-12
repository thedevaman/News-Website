
import './App.css';

import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';

export default class App extends Component {
//  c  = "Aman";
  render() {
    return (
      <div>
        {/* My first class Component {this.c} */}
        <Navbar/>
        <News/>

      </div>
    )
  }
}

