import bubbleSort from './bubbleSort';

const array = [ 13, 3, 14, 2, 1, 0];
const resultArray1 = [0, 1, 2, 3, 13, 14];

const result = bubbleSort(array);

describe('tests the array filter', () => {
  it('tests the array filter on an unsorted object array by a key in the array with a partial string', () => {
    expect(result).toEqual(resultArray1);
  });
});