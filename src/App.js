/* Sets up main structure of react application*/

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './components/TodayTable';
import React from 'react';
import TodayTable from './components/TodayTable';
function App() {
  return <div className="App">
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" exact component={Home} />
      </Routes>
    </Router>
    <TodayTable />
    <Footer />
  </div>
}
  
export default App;

