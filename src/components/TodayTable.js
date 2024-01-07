import './TodayTable.css';
import React from 'react';
function TodayTable() {
    return (
    <div className="container">
      <h2>NBA Games Today</h2>
      <table>
        <thead>
          <tr>
            <th>Home Team</th>
            <th>Away Team</th>
            <th>Time(can be changed to poll as well)</th>
          </tr>
        </thead>
        <tbody>
          {/* Table rows will be added dynamically */}
        </tbody>
      </table>
    </div>

    );
  }
  
  export default TodayTable;