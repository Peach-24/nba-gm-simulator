// salary formatter
// takes number as input
// output is correctly formatted salary string.
// e.g. 34000000 ----> '$34,000,000'

const salaryFormatter = (salary) => {
  const threes = [3, 7, 10, 12];
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

export default salaryFormatter;
