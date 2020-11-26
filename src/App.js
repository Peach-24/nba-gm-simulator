import React from 'react';
import Header from './Header';
import CurrentRoster from './CurrentRoster';
import AvailablePlayers from './AvailablePlayers';
import Budget from './Budget';
import './App.css';
import './index.css';
import players from './playerData';

class App extends React.Component {
  state = {};

  render() {
    return (
      <main>
        <Header />
        <Budget />
        <div class="rosters-container">
          <CurrentRoster />
          <AvailablePlayers players={players} />
        </div>
      </main>
    );
  }
}

export default App;
