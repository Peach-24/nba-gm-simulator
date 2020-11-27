// salary formatter
// takes number as input
// output is correctly formatted salary string.
// e.g. 34000000 ----> '$34,000,000'
import salaryFormatter from './func-sandbox';

describe('salaryFormatter()', () => {
  it('returns a dollar string when passed 0', () => {
    expect(salaryFormatter(0)).toBe('$0');
  });
  it('correctly formats a number < 1000', () => {
    expect(salaryFormatter(500)).toBe('$500');
  });
  it('correctly formats 1000', () => {
    expect(salaryFormatter(1000)).toBe('$1,000');
  });
  it('correctly formats 10000', () => {
    expect(salaryFormatter(10000)).toBe('$10,000');
  });
  it('correctly formats 100000', () => {
    expect(salaryFormatter(100000)).toBe('$100,000');
  });
  it('correctly formats 1000000', () => {
    expect(salaryFormatter(1000000)).toBe('$1,000,000');
  });
  it('correctly formats 34000000', () => {
    expect(salaryFormatter(34000000)).toBe('$34,000,000');
  });
});
