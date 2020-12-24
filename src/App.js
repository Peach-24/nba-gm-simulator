import React from 'react';
import './index.css';
import Header from './Header';
import CurrentRoster from './CurrentRoster';
import AvailablePlayers from './AvailablePlayers';
import players from './playerData';

class App extends React.Component {
  state = {
    availablePlayers: players,
    currentRoster: [],
    remainingBudget: 150000000,
    guardCount: 0,
    forwardCount: 0,
    centreCount: 0,
    posFilter: 'all',
    gmName: null,
    teamName: null,
  };

  handleClick = (event) => {
    localStorage.setItem('state', JSON.stringify(this.state));
  };

  handleRestart = (event) => {
    localStorage.clear();

    this.setState((currState) => {
      const newState = {
        currentRoster: [],
        remainingBudget: 150000000,
        availablePlayers: players,
        guardCount: 0,
        forwardCount: 0,
        centreCount: 0,
        gmName: null,
        teamName: null,
      };
      return newState;
    });
  };

  componentDidMount() {
    const savedState = JSON.parse(localStorage.getItem('state'));
    this.setState(savedState);
  }

  render() {
    const {
      currentRoster,
      remainingBudget,
      availablePlayers,
      guardCount,
      forwardCount,
      centreCount,
      posFilter,
    } = this.state;
    return (
      <main>
        <Header
          handleNameChange={this.handleNameChange}
          handleTeamChange={this.handleTeamChange}
          gmName={this.state.gmName}
          teamName={this.state.teamName}
        />
        <div id='main-buttons'>
          <button id='save-progress' onClick={this.handleClick}>
            SAVE PROGRESS
          </button>
          <button
            id='submitTeam'
            onClick={() => {
              if (currentRoster.length < 8) {
                alert(
                  `Your roster only includes ${currentRoster.length} players!`
                );
              } else if (
                currentRoster.length >= 8 &&
                (guardCount < 2 || forwardCount < 2 || centreCount < 1)
              ) {
                alert(
                  `Your roster doesn't have enough players at each position.`
                );
              } else if (
                currentRoster.length >= 8 &&
                guardCount >= 2 &&
                forwardCount >= 2 &&
                centreCount >= 1
              ) {
                this.evaluateTeamScore(currentRoster);
              }
            }}
          >
            SUBMIT ROSTER FOR APPROVAL
          </button>
          <button id='start-over' onClick={this.handleRestart}>
            RESTART GAME
          </button>
        </div>

        <form id='scouting-form'>
          <h3 id='scouting-title'>Scouting Report</h3>
          <label htmlFor='positions'>Position: </label>
          <select
            id='positions'
            name='positions'
            onChange={this.handlePositionFilter}
          >
            <option value='all'>All positions</option>
            <option value='PG'>Point Guard</option>
            <option value='SG'>Shooting Guard</option>
            <option value='SF'>Small Forward</option>
            <option value='PF'>Power Forward</option>
            <option value='C'>Centre</option>
          </select>
        </form>

        <div className='rosters-container'>
          <CurrentRoster
            roster={currentRoster}
            selectPlayer={this.selectPlayer}
            selectRosterPlayer={this.selectRosterPlayer}
            updateCurrentSpend={this.updateCurrentSpend}
            remainingBudget={this.state.remainingBudget}
            addToAvailables={this.addToAvailables}
            guardCount={this.state.guardCount}
            forwardCount={this.state.forwardCount}
            centreCount={centreCount}
          />
          <AvailablePlayers
            players={availablePlayers}
            posFilter={posFilter}
            selectPlayer={this.selectPlayer}
            addToRoster={this.addToRoster}
            remainingBudget={remainingBudget}
          />
        </div>
      </main>
    );
  }

  handlePositionFilter = async (e) => {
    const pos = e.target.value.toString();
    await this.setState({
      posFilter: pos,
    });
  };

  selectPlayer = async (selectedPlayer) => {
    await this.setState((currState) => {
      const primaryPosition = selectedPlayer.position[0];
      let guardInc = 0;
      let forwardInc = 0;
      let centreInc = 0;
      if (primaryPosition === 'PG' || primaryPosition === 'SG') {
        guardInc += 1;
      } else if (primaryPosition === 'SF' || primaryPosition === 'PF') {
        forwardInc += 1;
      } else if (primaryPosition === 'C') {
        centreInc += 1;
      }
      const newState = {
        availablePlayers: currState.availablePlayers.filter(
          (player) => player.name !== selectedPlayer.name
        ),
        guardCount: currState.guardCount + guardInc,
        forwardCount: currState.forwardCount + forwardInc,
        centreCount: currState.centreCount + centreInc,
      };
      return newState;
    });
  };

  selectRosterPlayer = async (selectedPlayer) => {
    await this.setState((currState) => {
      const primaryPosition = selectedPlayer.position[0];
      let numOfGuards = 0;
      let numOfForwards = 0;
      let numOfCentres = 0;
      if (primaryPosition === 'PG' || primaryPosition === 'SG') {
        numOfGuards -= 1;
      } else if (primaryPosition === 'SF' || primaryPosition === 'PF') {
        numOfForwards -= 1;
      } else if (primaryPosition === 'C') {
        numOfCentres -= 1;
      }

      const newState = {
        currentRoster: currState.currentRoster.filter(
          (player) => player.name !== selectedPlayer.name
        ),
        guardCount: currState.guardCount + numOfGuards,
        forwardCount: currState.forwardCount + numOfForwards,
        centreCount: currState.centreCount + numOfCentres,
      };
      return newState;
    });
  };

  addToRoster = (player) => {
    this.setState((currState) => {
      const newState = {
        currentRoster: [player, ...currState.currentRoster],
        remainingBudget: currState.remainingBudget - player.salary,
      };
      return newState;
    });
  };

  addToAvailables = (player) => {
    this.setState((currState) => {
      const newState = {
        availablePlayers: [player, ...currState.availablePlayers],
        remainingBudget: currState.remainingBudget + player.salary,
      };
      return newState;
    });
  };

  evaluateTeamScore = (roster) => {
    let totalScore = 0;
    for (const player of roster) {
      totalScore += player.rating;
    }
    let average = (totalScore / roster.length).toFixed(1);

    alert(
      `\nAfter General Manager ${
        this.state.gmName || 'Phil Jackson'
      } has formed his roster, the ${
        this.state.teamName || ' Los Angeles Lakers'
      } embark on a new gruelling NBA season...\n\nThere are highs and lows, but the team soon start to click and get into a rhythm in time for the playoffs.\n\n\nYOUR SCORE: ${average} - Not bad!`
    );
    return average;
  };

  handleNameChange = (name) => {
    this.setState({ gmName: name });
  };

  handleTeamChange = (name) => {
    this.setState({ teamName: name });
  };
}

export default App;
