import React from 'react';
import { salaryFormatter, positionFormatter } from './func-sandbox';

const AvailablePlayers = (props) => {
  const posFilter = props.posFilter;
  const players = props.players;
  const filteredPlayers = players.filter(
    (x) => x.position.toString() === posFilter
  );
  const selection = posFilter === 'all' ? players : filteredPlayers;

  return (
    <div id='availablePlayers' className='rosters'>
      <h3>Available Players:</h3>
      <ul>
        {selection.map((player) => {
          let moneyLeft = props.remainingBudget;
          const remove = props.selectPlayer;
          return (
            <li key={player.name} id='player-card'>
              <div className='player-block'>
                <div className='headshot'>
                  <img src={player.url} alt={player.name} />
                </div>
                <div className='player-info'>
                  <h2>{player.name}</h2>
                  <p>Position: {positionFormatter(player.position)}</p>
                  <p>#{player.number}</p>
                  <p>Salary: {salaryFormatter(player.salary)}</p>
                </div>
                <div className='rating'>
                  <p className='rating'>{player.rating}</p>
                  <button
                    id='select-player'
                    onClick={() => {
                      if (player.salary <= moneyLeft) {
                        remove(player);
                        props.addToRoster(player);
                      } else {
                        alert(
                          "The team owner is fuming! There's no way you can afford him as well!"
                        );
                      }
                    }}
                  >
                    Add
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
