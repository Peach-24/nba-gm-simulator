import React from 'react';
import './index.css';
import Header from './Header';
import CurrentRoster from './CurrentRoster';
import AvailablePlayers from './AvailablePlayers';
import Scouting from './Scouting';
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

  render() {
    Howler.volume(1.0);
    return (
      <main>
        <div>{this.RenderButtonAndSound()}</div>

        <Header />

        <Scouting />
        <div className='rosters-container'>
          <CurrentRoster
            roster={this.state.currentRoster}
            selectPlayer={this.selectPlayer}
            updateCurrentSpend={this.updateCurrentSpend}
            remainingBudget={this.state.remainingBudget}
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

  addToRoster = (player) => {
    this.setState((currState) => {
      const newState = {
        currentRoster: [player, ...currState.currentRoster],
        remainingBudget: currState.remainingBudget - player.salary,
      };

      return newState;
    });
  };
}

export default App;
