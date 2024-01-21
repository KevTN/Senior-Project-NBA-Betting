import React from 'react';
import './Poll.css';


const Poll = () => {
  const handleButtonClick = () => {
    // Do nothing when the button is clicked
    
  };
// CHANGE TEAMNAMES FOR EACH SIDE
// NO FUNCTION YET JUST BUTTON
  return (
    <div className="poll-container">
      <button className="yes-button" onClick={handleButtonClick}>AWAY TEAMNAME</button>
      <button className="no-button" onClick={handleButtonClick}>HOME TEAMNAME</button>
      
    </div>
  );
};

export default Poll;