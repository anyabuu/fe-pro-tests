import {
  changeStringCase,
  sumOfArray,
  divisibleBy,
  addDotsToString,
  objectEntries,
} from '../index';

describe('changeStringCase()', () => {
  describe('If choose lowercase', () => {
    it('Should return string lowercase', () => {
      const result = changeStringCase('FEEL good', 'lowercase');

      expect(result).toEqual('feel good');
    });
  });
  describe('If choose uppercase', () => {
    it('Should return string uppercase', () => {
      const result = changeStringCase('FEEL good', 'uppercase');

      expect(result).toEqual('FEEL GOOD');
    });
  });
  describe('If stringCase is incorrect', () => {
    it('Should return string', () => {
      const result = changeStringCase('FEEL good', 'lowercaase');

      expect(result).toEqual('FEEL good');
    });
  });
});

describe('sumOfArray()', () => {
  describe('If value is number', () => {
    it('Returns sum of numbers', () => {
      const result = sumOfArray([1, 2, 3, 0]);

      expect(result).toEqual(6);
    });
  });
  describe('If value is not number', () => {
    it('Passes and returns accumulator', () => {
      const result = sumOfArray([1, 'a', 2, 0]);

      expect(result).toEqual(3);
    });
  });
});

describe('objectEntries()', () => {
  it('Returns object in array', () => {
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
  it('Divides number without modulo', () => {
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
    it('Returns all string', () => {
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
