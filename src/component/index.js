import React, { Component } from 'react';
import './css/App.css';
import Ticket from './ticket';
import Categories from './categories';
import Event from './event';
import Partners from './partners';
import Footer from './footer';
import Slider from './slider';
import Header from './header';
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Slider/>
        <Ticket/>
        <Categories/>
        <Event/>
        <Partners/>
        <Footer/>
        <Header/>
      </div>
    );
  }
}

export default App;
