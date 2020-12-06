export const salaryFormatter = (salary) => {
  const threes = [3, 7, 11, 15];
  let finalStr = '';
  if (salary < 1000) {
    const splits = salary.toString().split('');
    splits.unshift('$');
    finalStr = splits.join('');
  } else if (salary >= 1000) {
    const splits = salary.toString().split('');
    splits.unshift('$');
    let reversed = splits.reverse();
    for (let i = 0; i < reversed.length; i++) {
      if (threes.includes(i) && reversed[i] !== '$') {
        reversed.splice(i, 0, ',');
      }
    }
    let inOrder = reversed.reverse();
    finalStr = inOrder.join('');
  }
  return finalStr;
};

export const positionFormatter = (arr) => {
  let finalStr = '';
  finalStr += arr[0].toString();
  for (let i = 1; i < arr.length; i++) {
    finalStr += `, ${arr[i]}`;
  }
  return finalStr;
};
