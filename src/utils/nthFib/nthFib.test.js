import {nthFib} from './nthFib';

// const array = [ 0, 1,1,2,3,5,8,13,21];

const result = nthFib(2);
console.log(result);

describe('tests the array filter', () => {
  it('tests the array filter on an unsorted object array by a key in the array with a partial string', () => {
    expect(result).toEqual(1);
  });
});

// describe('tests the array filter', () => {
//   it('tests the array filter on an unsorted object array by a key in the array with a partial string', () => {
//     expect(nthFib(1)).toEqual(0);
//   });
// });

// describe('tests the array filter', () => {
//   it('tests the array filter on an unsorted object array by a key in the array with a partial string', () => {
//     expect(nthFib(2)).toEqual(1);
//   });
// });

// describe('tests the array filter', () => {
//   it('tests the array filter on an unsorted object array by a key in the array with a partial string', () => {
//     expect(nthFib(3)).toEqual(1);
//   });
// });

// describe('tests the array filter', () => {
//   it('tests the array filter on an unsorted object array by a key in the array with a partial string', () => {
//     expect(nthFib(6)).toEqual(5);
//   });
// });

// describe('tests the array filter', () => {
//   it('tests the array filter on an unsorted object array by a key in the array with a partial string', () => {
//     expect(nthFib(8)).toEqual(13);
//   });
// });