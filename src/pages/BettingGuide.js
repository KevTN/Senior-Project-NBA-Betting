import React from 'react'
import './BettingGuide.css'
import Footer from '../components/footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import logo from '../images/hoop-logo.png'
import BettingDefinitions from '../components/bettingDefinitions'

import '../App.css';

function BettingGuide() {
  return (
    <div>
        <Navbar />
        <header className="bettingGuide-header">
        <h1 className="header-title">Betting Guide</h1>
        <img src={logo} alt="Hoop Logo" className="hoop-logo" />
      </header>
      <BettingDefinitions />
        <Sidebar />
        <Footer />
        
    </div>
    
  )
}

export default BettingGuide