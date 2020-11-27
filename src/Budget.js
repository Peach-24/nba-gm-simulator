import React from 'react';
import salaryFormatter from './func-sandbox';

const Budget = (props) => {
  return (
    <header id="budget">
      <h3>Your remaining amount:</h3>
      <p id="remaining-budget">{salaryFormatter(props.remainingBudget)}</p>

      <br></br>
      <p id="budget-error">
        <strong></strong>
      </p>
    </header>
  );
};

export default Budget;
