import './App.scss';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from './components/Header/Header';
import TvShow from './components/TV_Show/TvShow';

function App() {
  return (
   <Router>
   <Header/>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/tvShows" element={<TvShow />} />
   </Routes>
   </Router>
  );
}

export default App;
