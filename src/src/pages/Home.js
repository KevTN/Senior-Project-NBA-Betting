import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/Navbar'
import TodayTable from '../components/TodayTable'
import Table from '../components/Table'
import '../App.css';

function Home() {
  return (
    <div>
        <Navbar />
        <TodayTable class="body"/>
        <Table />
        <Footer />
    </div>
  )
}

export default Home
