import React from 'react';
import salaryFormatter from './func-sandbox';

const CurrentRoster = (props) => {
  const updateCurrentSpend = (roster) => {
    let total = 0;
    for (const obj of roster) {
      total += obj.salary;
    }
    return total;
  };

  return (
    <header id="currentRoster" class="rosters">
      <h3>Current Roster:</h3>
      <p>Number of players: {props.roster.length}</p>
      <p>Spent so far: {salaryFormatter(updateCurrentSpend(props.roster))}</p>

      <ul>
        {props.roster.map((player) => {
          return (
            <li key={player.name} id="player-card">
              <div class="player-block">
                <div class="headshot">
                  <img src={player.url} alt={player.name} />
                </div>
                <div class="player-info">
                  <h1>{player.name}</h1>
                  <p>Position: {player.position}</p>
                  <p>Salary: {salaryFormatter(player.salary)}</p>
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
