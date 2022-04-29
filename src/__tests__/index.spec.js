import {
  changeStringCase,
  sumOfArray,
  divisibleBy,
  addDotsToString,
  objectEntries,
} from '../index';

describe('changeStringCase()', () => {
  describe('If choose lowercase', () => {
    it('It makes string lowercase', () => {
      const result = changeStringCase('FEEL good', 'lowercase');

      expect(result).toEqual('feel good');
    });
  });
  describe('If choose uppercase', () => {
    it('It makes string uppercase', () => {
      const result = changeStringCase('FEEL good', 'uppercase');

      expect(result).toEqual('FEEL GOOD');
    });
  });
  describe('If stringCase is incorrect', () => {
    it('It returns string', () => {
      const result = changeStringCase('FEEL good', 'lowercaase');

      expect(result).toEqual('FEEL good');
    });
  });
});

describe('sumOfArray()', () => {
  describe('If value is number', () => {
    it('It returns sum of numbers', () => {
      const result = sumOfArray([1, 2, 3, 0]);

      expect(result).toEqual(6);
    });
  });
  describe('If value is not number', () => {
    it('It passes and returns accumulator', () => {
      const result = sumOfArray([1, 'a', 2, 0]);

      expect(result).toEqual(3);
    });
  });
});

describe('objectEntries()', () => {
  it('It remade object in array', () => {
    const result = objectEntries({
      first: 'first',
      second: 'second',
      third: 'third',
    });

    expect(result).toEqual([
      ['first', 'first'],
      ['second', 'second'],
      ['third', 'third'],
    ]);
  });
});

describe('divisibleBy()', () => {
  it('It divides number without modulo', () => {
    const result = divisibleBy([5, 6, 7, 8, 9, 10], 2);

    expect(result).toEqual([6, 8, 10]);
  });
});

describe('addDotsToString()', () => {
  describe('If permissed length is less than string length', () => {
    it('It returns sliced string', () => {
      const result = addDotsToString(
        'Слишком мало места для всего, что тут можно написать',
        6
      );

      expect(result).toEqual('Сли...');
    });
  });
  describe('If permissed length is more than string length', () => {
    it('It returns all string', () => {
      const result = addDotsToString(
        'Слишком мало места для всего, что тут можно написать',
        888
      );

      expect(result).toEqual(
        'Слишком мало места для всего, что тут можно написать'
      );
    });
  });
});
