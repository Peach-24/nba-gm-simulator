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
      };
      return newState;
    });
  };

  componentDidMount() {
    const savedState = JSON.parse(localStorage.getItem('state'));
    this.setState(savedState);
  }

  render() {
    return (
      <main>
        <Header />
        <div id='main-buttons'>
          <button id='save-progress' onClick={this.handleClick}>
            SAVE PROGRESS
          </button>
          <button
            id='submitTeam'
            onClick={() => {
              if (this.state.currentRoster.length >= 8) {
                this.evaluateTeamScore(this.state.currentRoster);
              } else {
                alert(
                  `Your roster only includes ${this.state.currentRoster.length} players!`
                );
              }
            }}
          >
            SUBMIT ROSTER FOR APPROVAL
          </button>
          <button id='start-over' onClick={this.handleRestart}>
            RESTART GAME
          </button>
        </div>
        <div className='rosters-container'>
          <CurrentRoster
            roster={this.state.currentRoster}
            selectPlayer={this.selectPlayer}
            selectRosterPlayer={this.selectRosterPlayer}
            updateCurrentSpend={this.updateCurrentSpend}
            remainingBudget={this.state.remainingBudget}
            addToAvailables={this.addToAvailables}
            guardCount={this.state.guardCount}
            forwardCount={this.state.forwardCount}
            centreCount={this.state.centreCount}
          />
          <AvailablePlayers
            players={this.state.availablePlayers}
            selectPlayer={this.selectPlayer}
            addToRoster={this.addToRoster}
            remainingBudget={this.state.remainingBudget}
          />
        </div>
      </main>
    );
  }

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
      `The NBA Season begins... \n\nIt's a journey of ups and downs for The Monstars... \n\n\n YOUR SCORE: ${average} - Not bad!`
    );
    return average;
  };
}

export default App;
