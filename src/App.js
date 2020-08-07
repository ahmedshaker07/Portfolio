import React from 'react';
import './App.css';
import Header from './components/header/header';
import HeaderLinks from './components/header/headerLinks'
import Welcome from './components/welcome';
import About from './components/about';
import Service from './components/service';
import Contact from './components/contact';
import Footer from './components/footer';

export default function App() {
  return (
    <div className="App">
      <Header
        color="transparent"
        rightLinks={<HeaderLinks/>}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: "white"
        }}
      />
      <Welcome/>
      <About/>
      <Service/>
      <Contact/>
      <Footer/>
    </div>
  );
}