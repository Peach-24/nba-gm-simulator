import React from 'react';
import { salaryFormatter, positionFormatter } from './func-sandbox';

const CurrentRoster = (props) => {
  const updateCurrentSpend = (roster) => {
    let total = 0;
    for (const obj of roster) {
      total += obj.salary;
    }
    return total;
  };
  return (
    <header id='currentRoster' className='rosters'>
      <div id='team-info-box'>
        <h3>Current Roster:</h3>
        <p>
          Number of players: <strong>{props.roster.length}</strong>
        </p>
        <p>
          Spent so far:{' '}
          <strong>{salaryFormatter(updateCurrentSpend(props.roster))}</strong>
        </p>
        <p>
          Budget remaining:{' '}
          <strong>
            {salaryFormatter(150000000 - updateCurrentSpend(props.roster))}
          </strong>
        </p>
        <hr></hr>
        <p>Guards selected: {props.guardCount}</p>
        <p>Forwards selected: {props.forwardCount}</p>
        <p>Centres selected: {props.centreCount}</p>
        <p id='budget-error'></p>
      </div>
      <ul>
        {props.roster.map((player) => {
          const remove = props.selectRosterPlayer;

          return (
            <li key={player.name} id='player-card'>
              <div className='player-block'>
                <div className='headshot'>
                  <img src={player.url} alt={player.name} />
                </div>
                <div className='player-info'>
                  <h2>{player.name}</h2>
                  <p>{positionFormatter(player.position)}</p>
                  <p>#{player.number}</p>
                  <p>Salary: {salaryFormatter(player.salary)}</p>
                </div>
                <div className='rating'>
                  <p className='rating'>{player.rating}</p>
                  <div
                    onClick={() => {
                      props.addToAvailables(player);
                    }}
                  >
                    <button
                      onClick={() => {
                        remove(player);
                      }}
                    >
                      Remove
                    </button>
                  </div>
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
