import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Table from '../components/Table'

import '../App.css';

function Home() {
  return (
    <div>
        <Navbar />
        <Sidebar />
        <Table />
        <Footer />
        
    </div>
    
  )
}

export default Home
