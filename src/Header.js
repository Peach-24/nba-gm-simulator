import React from 'react';

const Header = () => {
  return (
    <header id="welcome">
      <h1>Welcome to GM Game</h1>
      {/* <img
        id="ball"
        src="https://www.how-to-draw-funny-cartoons.com/image-files/cartoon-basketball-3.gif"
        height="100"
        width="100"
        alt="bouncing basketball"
      ></img> */}
      <p id="ball-emoji">🏀</p>
      <form>
        <label>Enter your name: </label>
        <input
          type="text"
          size="25"
          placeholder="GM Joe Bloggs"
          required
        ></input>
        <button> + </button>
        <br></br>

        <label>Enter team name: </label>
        <input
          type="text"
          size="25"
          placeholder="The Monstars"
          required
        ></input>
        <button> + </button>
      </form>
      <br></br>

      <p>
        GM Joe Bloggs, you are now in charge of the The Monstars. You have
        $150,000,000 to spend on building out a roster for the upcoming season.
        <br />
        Good luck, we have faith in you.
        <br />
        Yours sincerely, <br />
        Team Owner
      </p>
      <br></br>
      <h2>Rules</h2>
      <div id="rules">
        <ul>
          <li class="rules-list">You must have at least 8 players</li>
          <li class="rules-list">You cannot go over your budget of AMOUNT</li>
          <li class="rules-list">
            Your team must contain Guards, Forwards and Centres
          </li>
        </ul>
      </div>
      <br></br>
    </header>
  );
};

export default Header;
