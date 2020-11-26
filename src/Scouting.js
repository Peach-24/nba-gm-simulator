import React from 'react';

const Scouting = (props) => {
  return (
    <form id="scouting-form">
      <label>Search/Filter</label>
      <br></br>
      <input type="text" placeholder="Search by name" />
      <button>Search</button>
      <br></br>
      <input type="range" id="salary-range" min="0" max="34000000" />
      <label for="salary-range">Salary</label>
      <br></br>
      <input type="range" id="rating-range" />
      <label for="rating-range">Rating</label>
      <br></br>

      <label for="positions">Position</label>
      <select id="positions" name="positions">
        <option value="point-guard">Point Guard</option>
        <option value="shooting-guard">Shooting Guard</option>
        <option value="small-forward">Small Forward</option>
        <option value="power-forward">Power Forward</option>
        <option value="Centre">Centre</option>
      </select>
    </form>
  );
};

export default Scouting;
