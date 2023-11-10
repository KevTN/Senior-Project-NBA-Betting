import './App.css';
import React, { useEffect } from 'react';
import './components/Navbar'
import Navbar from './components/Navbar';
//import React from 'react';
function App() {
  useEffect(() => {
    document.title = 'BestBallersBets';
  }, []);
  
  return (
  
    <body>
      
        <header>
            <h1>Best Ballers Bets</h1>
            <Navbar />
        </header>

        <footer>
            <p>Best Ballers Bets(about section and whatever goes here)</p>
        </footer>


    </body>
  );
}

export default App;
