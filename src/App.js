import React from 'react';
import './index.css';
import Header from './Header';
import CurrentRoster from './CurrentRoster';
import AvailablePlayers from './AvailablePlayers';
import Budget from './Budget';
import Scouting from './Scouting';
import players from './playerData';
import Lebron from './sounds/lebron-james.mp3';
import Sword from './sounds/sword.mp3';
import { Howl, Howler } from 'howler';

const audioClips = [
  { sound: Lebron, label: 'CLICK ME' },
  { sound: Sword, label: 'Sword' }
];

class App extends React.Component {
  state = {
    availablePlayers: players,
    currentRoster: [],
    selectedPlayer: null
  };

  SoundPlay = (src) => {
    const sound = new Howl({
      src
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
        <Budget />
        <Scouting />
        <div class="rosters-container">
          <CurrentRoster
            players={this.state.currentRoster}
            // addToRoster={this.addToRoster}
            selectPlayer={this.selectPlayer}
          />
          <AvailablePlayers
            players={this.state.availablePlayers}
            selectPlayer={this.selectPlayer}
            // addToRoster={this.addToRoster}
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
        selectedPlayer: (currState.selectedPlayer = playerName)
      };

      console.log('NEWSTATE >>>>>', newState);
      return newState;
    });
  };

  // addToRoster = (player) => {
  //   this.setState((currState) => {
  //     console.log(currState.currentRoster);
  //     let x = this.selectedPlayer;
  //     const newState = {
  //       currentRoster: currState.currentRoster.push(x),
  //     };
  //     return newState;
  //   });
  // };
}

export default App;
