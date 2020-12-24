import React, { Component } from 'react';

class Header extends Component {
  state = {
    gmName: '',
    teamName: '',
  };

  handleNameChange = ({ target }) => {
    this.setState({ gmName: target.value });
  };
  handleTeamChange = ({ target }) => {
    this.setState({ teamName: target.value });
  };

  render() {
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
          <label>Your name: </label>
          <input
            type='text'
            size='25'
            placeholder='Phil Jackson'
            onChange={this.handleNameChange}
            value={this.state.gmName}
            required
          ></input>
          <br></br>
          <label>Team name: </label>
          <input
            type='text'
            size='25'
            placeholder='Los Angeles Lakers'
            value={this.state.teamName}
            onChange={this.handleTeamChange}
            required
          ></input>
          <br></br>
        </form>
        <br></br>
        <p id='GM-intro'>
          {this.state.gmName || 'Phil Jackson'}, you are now in charge of the{' '}
          {` `}
          {this.state.teamName || ' Los Angeles Lakers'}. You have $150,000,000
          to spend on building out a roster for the upcoming season.
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
  }
}

export default Header;
