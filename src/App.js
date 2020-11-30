import React from 'react';
import './index.css';
import Header from './Header';
import CurrentRoster from './CurrentRoster';
import AvailablePlayers from './AvailablePlayers';
// import Scouting from './Scouting';
import players from './playerData';
import Lebron from './sounds/lebron-james.mp3';
import Sword from './sounds/sword.mp3';
import Steph from './sounds/steph-curry.mp3';
import { Howl, Howler } from 'howler';

const audioClips = [
  { sound: Lebron, label: 'CLICK ME' },
  { sound: Sword, label: 'Sword' },
  { sound: Steph, label: 'Steph' },
];

class App extends React.Component {
  state = {
    availablePlayers: players,
    currentRoster: [],
    remainingBudget: 150000000,
  };

  SoundPlay = (src) => {
    const sound = new Howl({
      src,
    });
    sound.play();
  };

  RenderButtonAndSound = () => {
    return audioClips.map((soundObj, index) => {
      return (
        <button key={index} onClick={() => this.SoundPlay(soundObj.sound)}>
          {soundObj.label}
        </button>
      );
    });
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
    Howler.volume(1.0);
    return (
      <main>
        <div>{this.RenderButtonAndSound()}</div>
        <Header />
        {/* <Scouting /> */}
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

  selectPlayer = (playerName) => {
    this.setState((currState) => {
      const newState = {
        availablePlayers: currState.availablePlayers.filter(
          (player) => player.name !== playerName
        ),
      };
      return newState;
    });
  };

  selectRosterPlayer = (playerName) => {
    this.setState((currState) => {
      const newState = {
        currentRoster: currState.currentRoster.filter(
          (player) => player.name !== playerName
        ),
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
    console.log('Trying to add to availables >>>>>>', player);
    this.setState((currState) => {
      const newState = {
        availablePlayers: [player, ...currState.availablePlayers],
        remainingBudget: currState.remainingBudget + player.salary,
      };
      return newState;
    });
  };

  evaluateTeamScore = (roster) => {
    console.log(roster);
    let totalScore = 0;
    for (const player of roster) {
      totalScore += player.rating;
    }
    let average = (totalScore / roster.length).toFixed(1);
    console.log(average);
    alert(
      `The NBA Season begins... \n\nIt's a journey of ups and downs for The Monstars... \n\n\n YOUR SCORE: ${average} - Not bad!`
    );
    return average;
  };
}

export default App;
