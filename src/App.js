import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import TvShow from "./components/TV_Show/TvShow";
import HomeBanner from "./components/HomeBanner";
import Login from "./components/Login";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeBanner />} />
        <Route path="/login" element={<Login page={true}/>} />
        <Route path="/register" element={<Login page={false}/>} />
        <Route path="/home" element={<><Header/><Home/></>} />
        <Route path="/tvShows" element={<><Header/><TvShow /></>} />
        <Route path="/login" element={<Login/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
