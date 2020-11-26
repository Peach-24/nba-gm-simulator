import React from 'react';
import players from './playerData';

const AvailablePlayers = (props) => {
  return (
    <div id="availablePlayers" class="rosters">
      <h3>Available Players:</h3>
      <ul>
        {props.players.map((player) => {
          return (
            <li key={player.name} id="player-card">
              <img src={player.url} alt={player.name}></img>
              <p>Name: {player.name}</p>
              <p>Rating: {player.rating}</p>
              <p>Position: {player.position}</p>
              <p>Salary: ${player.salary}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AvailablePlayers;
