import React from 'react';
import salaryFormatter from './func-sandbox';

const AvailablePlayers = (props) => {
  return (
    <div id='availablePlayers' className='rosters'>
      <h3>Available Players:</h3>
      <ul>
        {props.players.map((player) => {
          let moneyLeft = props.remainingBudget;
          const remove = props.selectPlayer;

          return (
            <li key={player.name} id='player-card'>
              <div className='player-block'>
                <div className='headshot'>
                  <img src={player.url} alt={player.name} />
                </div>
                <div className='player-info'>
                  <h1>{player.name}</h1>
                  <p>Position: {player.position}</p>
                  <p>Salary: {salaryFormatter(player.salary)}</p>
                </div>
                <div className='rating'>
                  <p>{player.rating}</p>

                  <div
                    id='clicker'
                    onClick={() => {
                      if (player.salary <= moneyLeft) {
                        remove(player.name);
                      }
                    }}
                  >
                    <button
                      id='select-player'
                      onClick={() => {
                        if (player.salary <= moneyLeft) {
                          props.addToRoster(player);
                        }
                      }}
                    >
                      Add
                    </button>
                  </div>
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
