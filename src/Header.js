import React from 'react';

const Header = () => {
  return (
    <header id="welcome">
      <h1>Welcome to GM Game</h1>
      <img
        id="ball"
        src="https://www.how-to-draw-funny-cartoons.com/image-files/cartoon-basketball-3.gif"
        height="100"
        width="100"
      ></img>
      <form>
        <label>Enter your name: </label>
        <input type="text" size="25"></input>
        <button> + </button>
      </form>
      <br></br>
      <h2>How to play</h2>
      <p>
        You are now in charge of the TEAM NAME. You have AMOUNT to spend on
        building out a roster for the upcoming season.
      </p>
      <br></br>
      <h2>Rules</h2>
      <ul>
        <li class="rules-list">You must have at least 8 players</li>
        <li class="rules-list">You cannot go over your budget of AMOUNT</li>
        <li class="rules-list">
          Your team must contain Guards, Forwards and Centres
        </li>
      </ul>
      <br></br>
    </header>
  );
};

export default Header;
