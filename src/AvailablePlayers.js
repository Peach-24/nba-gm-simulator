import React from 'react';

const AvailablePlayers = (props) => {
  return (
    <div id="availablePlayers" class="rosters">
      <h3>Available Players:</h3>
      <ul>
        {props.players.map((player) => {
          const remove = props.selectPlayer;

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
                  <button
                    id="select-player"
                    onClick={() => {
                      remove(player.name);
                    }}
                  >
                    Select
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AvailablePlayers;
// () => props.selectPlayer(player)
