import React from 'react';

const Header = (props) => {
  let { handleNameChange, handleTeamChange, gmName, teamName } = props;

  return (
    <header id='welcome'>
      <h1>NBA GM Simulator</h1>
      <div id='header-logos'>
        <img
          src='https://www.pngkey.com/png/full/968-9682817_nba-logo.png'
          alt='NBA logo'
          height='110px'
          width='50px'
        />
        <p id='ball-emoji'>🏀</p>
      </div>
      <label>Your name: </label>
      <input
        type='text'
        size='25'
        placeholder='Phil Jackson'
        value={gmName}
        onChange={(e) => {
          gmName = e.target.value;
        }}
        required
      ></input>
      <br></br>
      <label>Team name: </label>
      <input
        type='text'
        size='25'
        placeholder='Los Angeles Lakers'
        value={teamName}
        onChange={(e) => {
          teamName = e.target.value;
        }}
        required
      ></input>
      <br></br>
      <button
        onClick={() => {
          handleNameChange(gmName);
          handleTeamChange(teamName);
        }}
      >
        Submit
      </button>
      <br></br>
      <p id='GM-intro'>
        {gmName || 'Phil Jackson'}, you are now in charge of the {` `}
        {teamName || ' Los Angeles Lakers'}. You have $150,000,000 to spend on
        building out a roster for the upcoming season.
        <br />
        <br />
        Good luck, we have faith in you.
        <br />
        Yours sincerely, <br />
        <br />
        Team Owner.
      </p>
      <br></br>
      <h3>Rules</h3>
      <div id='rules'>
        <ul>
          <li className='rules-list'>You must have at least 8 players</li>
          <li className='rules-list'>
            You cannot go over your budget of $150,000,000
          </li>
          <li className='rules-list'>
            Your team must contain at least 2 guards, 2 forwards and 1 centre
          </li>
        </ul>
      </div>
      <br></br>
    </header>
  );
};

export default Header;
