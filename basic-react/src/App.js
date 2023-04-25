// import logo from './logo.svg';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

function App() {
  return (
    <div>
   <Home />
   <About />
   <Contact />

    </div>
  );
}
ReactDOM.render(
  <BrowserRouter>
    <Route path="http://localhost:3001/">
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
<Route path="/contact">
      <Contact />
    </Route>

  </BrowserRouter>
)

export default App;
