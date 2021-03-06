import React from 'react';

const Scouting = (props) => {
  const handlePositionFilter = () => {};
  return (
    <form id='scouting-form'>
      <h4>Scouting Report</h4>

      <input type='text' placeholder='Search by name' />
      <button>Search</button>
      <br></br>
      {/* <input type='range' id='salary-range' min='0' max='34000000' />
      <label htmlFor='salary-range'>Salary</label>
      <br></br>
      <input type='range' id='rating-range' />
      <label htmlFor='rating-range'>Rating</label> */}
      <br></br>

      <label htmlFor='positions'>Position: </label>
      <select
        id='positions'
        name='positions'
        onChange={this.handlePositionFilter}
      >
        <option value='point-guard'>All positions</option>
        <option value='point-guard'>Point Guard</option>
        <option value='shooting-guard'>Shooting Guard</option>
        <option value='small-forward'>Small Forward</option>
        <option value='power-forward'>Power Forward</option>
        <option value='Centre'>Centre</option>
      </select>
    </form>
  );
};

export default Scouting;
