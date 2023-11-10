import './App.css';
import React, { useEffect } from 'react';
//import React from 'react';
function App() {
  useEffect(() => {
    document.title = 'BestBallersBets';
  }, []);
  
  return (
  
    <body>
      
        <header>
            <h1>Best Ballers Bets</h1>
        </header>


      <p>
        GROUP 6
      </p>
       

        <footer>
            <p>Best Ballers Bets(about section and whatever goes here)</p>
        </footer>


    </body>
  );
}

export default App;
