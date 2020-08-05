import React from 'react';
import './App.css';
import Header from './components/header/header';
import HeaderLinks from './components/header/headerLinks'
import Welcome from './components/welcome/welcome';

export default function App() {
  return (
    <div className="App">
      <Header
        color="transparent"
        brand="Perfect"
        rightLinks={<HeaderLinks/>}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: "white"
        }}
      />
      <Welcome/>
      
    </div>
  );
}