import React from 'react';
import salaryFormatter from './func-sandbox';

const Budget = (props) => {
  const startingBudget = 150000000;
  const updateCurrentSpend = (roster) => {
    let total = 0;
    for (const obj of roster) {
      total += obj.salary;
    }
    return total;
  };

  return (
    <header id="budget">
      <h3>Your remaining amount:</h3>
      <p>
        {salaryFormatter(startingBudget - updateCurrentSpend(props.roster))}
      </p>
      <br></br>
    </header>
  );
};

export default Budget;
