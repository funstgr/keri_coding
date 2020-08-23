import binarySearch from './binarySearch';

// Driver code 
let arr = [1, 3, 5, 7, 8, 9, 10]; 
let x = 5; 
let y = 6; 
let z = 7; 
let aa = 2;
let a = 8;

let bb = 10;
let cc = 11;
let zz = 144;
let yy = 145;

let arr2 = [1, 3, 5, 7, 8, 9, 10, 50, 51, 62, 99, 121, 144]; 


describe('tests the array filter', () => {
    it('tests the array filter on an unsorted object array by a key in the array with a partial string', () => {
      expect(binarySearch(arr, x)).toEqual(2);
    });
  });

  describe('tests the array filter', () => {
    it('tests the array filter on an unsorted object array by a key in the array with a partial string', () => {
      expect(binarySearch(arr, y)).toEqual(-1);
    });
  });

  describe('tests the array filter', () => {
    it('tests the array filter on an unsorted object array by a key in the array with a partial string', () => {
      expect(binarySearch(arr, z)).toEqual(3);
    });
  });

  describe('tests the array filter', () => {
    it('tests the array filter on an unsorted object array by a key in the array with a partial string', () => {
      expect(binarySearch(arr, aa)).toEqual(-1);
    });
  });

  describe('tests the array filter', () => {
    it('tests the array filter on an unsorted object array by a key in the array with a partial string', () => {
      expect(binarySearch(arr, bb)).toEqual(6);
    });
  });

  describe('tests the array filter', () => {
    it('tests the array filter on an unsorted object array by a key in the array with a partial string', () => {
      expect(binarySearch(arr, cc)).toEqual(-1);
    });
  });

  describe('tests the array filter', () => {
    it('tests the array filter on an unsorted object array by a key in the array with a partial string', () => {
      expect(binarySearch(arr2, zz)).toEqual(12);
    });
  });

  describe('tests the array filter', () => {
    it('tests the array filter on an unsorted object array by a key in the array with a partial string', () => {
      expect(binarySearch(arr2, yy)).toEqual(-1);
    });
  });

  
  describe('tests the array filter', () => {
    it('tests the array filter on an unsorted object array by a key in the array with a partial string', () => {
      expect(binarySearch(arr2, yy)).toEqual(-1);
    });
  });

  describe('tests the array filter', () => {
    it('tests the array filter on an unsorted object array by a key in the array with a partial string', () => {
      expect(binarySearch(arr2, a)).toEqual(4);
    });
  });
  