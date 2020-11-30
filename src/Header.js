import React from 'react';

const Header = () => {
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

      <form>
        <label>Enter your name: </label>
        <input
          type='text'
          size='25'
          placeholder='GM Joe Bloggs'
          required
        ></input>
        <button> + </button>
        <br></br>

        <label>Enter team name: </label>
        <input
          type='text'
          size='25'
          placeholder='The Monstars'
          required
        ></input>
        <button> + </button>
      </form>
      <br></br>
      <p id='GM-intro'>
        GM Joe Bloggs, you are now in charge of the The Monstars. You have
        $150,000,000 to spend on building out a roster for the upcoming season.
        <br />
        <br />
        Good luck, we have faith in you.
        <br />
        Yours sincerely, <br />
        <br />
        Team Owner
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
            Your team must contain Guards, Forwards and Centres
          </li>
        </ul>
      </div>
      <br></br>
    </header>
  );
};

export default Header;
