import React from "react";
import Home from "./components/Home";
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Recipeid from "./components/Recipeid";
import SearchElement from "./components/SearchElement";

import Categgorry from "./components/Categorry";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:idMeal" element={<Recipeid/>}/>
        <Route path="/category/:name" element={<Categgorry/>}/>
        <Route path="/search/:searchTerm" element={<SearchElement/>}/>


      </Routes>
    </Router>  
    </>
  );
}

export default App;
