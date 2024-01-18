import React from 'react'
import './GoldenStateWarriors.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';

import TeamStatsTable from '../../components/TeamStatsTable'

function GoldenStateWarriors() {
  return (
    <div>
       <Navbar />
        <Sidebar />


      </header>
      <TeamStatsTable />

    </div>
  );
}


