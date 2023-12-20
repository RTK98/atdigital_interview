import React from "react";
import './App.css';
import TopNavigation from './components/topNavigation/topNavigation';
import Content from "./components/content/content";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <TopNavigation/>
      <Content/>
      <Footer/>

    </div>
  );
}

export default App;
