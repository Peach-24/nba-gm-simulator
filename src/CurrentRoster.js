import React from 'react';

const CurrentRoster = (props) => {
  return (
    <header id="currentRoster" class="rosters">
      <h3>Current Roster:</h3>
      <p>Number of players: 0</p>
      <ul>
        {props.players.map((player) => {
          return (
            <li key={player.name} id="player-card">
              <div class="player-block">
                <div class="headshot">
                  <img src={player.url} alt={player.name} />
                </div>
                <div class="player-info">
                  <h1>{player.name}</h1>
                  <p>Position: {player.position}</p>
                  <p>Salary: ${player.salary}</p>
                </div>
                <div class="rating">
                  <p>{player.rating}</p>
                  <button>Remove</button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default CurrentRoster;
