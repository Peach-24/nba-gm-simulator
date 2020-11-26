import React from 'react';

const Header = () => {
  return (
    <header id="welcome">
      <h1>NBA GM Simulator</h1>
      <p id="ball-emoji">🏀</p>
      {/* <img
        src="https://lh3.googleusercontent.com/proxy/TJLEr9yEe53LMecNfUobT4zuZfD0N4cyBvzmzxcSIwGsoMTua8q-YdaDnufvE__2VDL_HZ8gmm6TGJOHTnjJKp91RDoCWSc6LrkApRb0_6nUAc7x"
        alt="cat playing basketball"
        height="250"
        width="250"
      /> */}
      <iframe
        title="lebron"
        width="110"
        height="200"
        src="https://www.myinstants.com/instant/lebron-james-kid/embed/"
        frameborder="0"
        scrolling="no"
      ></iframe>
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
          <li class="rules-list">
            You cannot go over your budget of $150,000,000
          </li>
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
