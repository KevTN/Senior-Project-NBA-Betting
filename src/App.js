import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/footer'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//import React from 'react';
function App() {
  return <div className="App">
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" exact component={Home} />
      </Routes>
    </Router>

    <Footer />
  </div>
}
  
  
  

export default App;
