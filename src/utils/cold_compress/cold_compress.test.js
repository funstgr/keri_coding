import cold_compress from './cold_compress';
import input from './input';

const expected_result = 
"3 + 3 = 4 !\r\n" +
"6 7 6 . 12 T\r\n" +
"1 ( 2 A 2 B 1 C 1 )\r\n" +
"1 3 1 . 1 1 1 4 1 1 4 5";

describe('tests the array filter', () => {
    it('tests the array filter on an unsorted object array by a key in the array with a partial string', () => {
      expect(cold_compress(input)).toEqual(expected_result);
    });
  });