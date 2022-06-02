import Player from '../src/player';

const somePlayer = new Player('pc');

test('random generate target #1', () => {
  expect(
    somePlayer.randomTarget([
      ['', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
      ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
      ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
      ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
      ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
      ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
      ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
      ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
      ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
      ['m', 'm', 'm', 'h', 'h', 'h', 'm', 'm', 'm', 'm'],
    ])
  ).toEqual([0, 0]);
});

test('random generate target #2', () => {
  expect(
    somePlayer.randomTarget([
      ['h', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
      ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
      ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
      ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
      ['m', 'm', 'm', 'm', 's', 'm', 'm', 'm', 'm', 'h'],
      ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
      ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
      ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
      ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
      ['m', 'm', 'm', 'h', 'h', 'h', 'm', 'm', 'm', 'm'],
    ])
  ).toEqual([4, 4]);
});

test('random generate target #3', () => {
  expect(
    somePlayer.randomTarget([
      ['h', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
      ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
      ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
      ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
      ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
      ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
      ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
      ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
      ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
      ['m', 'm', 'm', 'h', 'h', 'h', 'm', 'm', 'm', 's'],
    ])
  ).toEqual([9, 9]);
});

test('can we shot here #1', () => {
  expect(
    somePlayer.canWeShotHere(
      [
        ['', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'h', 'h', 'h', 'm', 'm', 'm', 's'],
      ],
      [0, 0]
    )
  ).toBe(true);
});

test('can we shot here #2', () => {
  expect(
    somePlayer.canWeShotHere(
      [
        ['', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 's', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'h', 'h', 'h', 'm', 'm', 'm', 's'],
      ],
      [1, 1]
    )
  ).toBe(true);
});

test('can we shot here #3', () => {
  expect(
    somePlayer.canWeShotHere(
      [
        ['', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 's', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'h', 'h', 'h', 'm', 'm', 'm', 's'],
      ],
      [2, 2]
    )
  ).toBe(false);
});

test('can we shot here #4', () => {
  expect(
    somePlayer.canWeShotHere(
      [
        ['', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 's', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'h', 'h', 'h', 'm', 'm', 'm', 's'],
      ],
      [9, 3]
    )
  ).toBe(false);
});

test('can we shot here #5', () => {
  expect(
    somePlayer.canWeShotHere(
      [
        ['', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 's', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'h', 'h', 'h', 'm', 'm', 'm', 's'],
      ],
      [11, -1]
    )
  ).toBe(false);
});

test('generate target #1', () => {
  expect(
    somePlayer.generateTargetWith1Point(
      [
        ['', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'h', 's', 's', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'h', 'h', 'h', 'm', 'm', 'm', 's'],
      ],
      [[1, 1]]
    )
  ).toEqual([1, 2]);
});

test('generate target #2', () => {
  expect(
    somePlayer.generateTargetWith1Point(
      [
        ['h', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['s', 'h', 's', 's', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'h', 'h', 'h', 'm', 'm', 'm', 's'],
      ],
      [[0, 0]]
    )
  ).toEqual([1, 0]);
});

test('generate target #3', () => {
  expect(
    somePlayer.generateTargetWith1Point(
      [
        ['h', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['s', 'h', 's', 's', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'h', 's', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'h', 'h', 'h', 'm', 'm', 'm', 's'],
      ],
      [[3, 3]]
    )
  ).toEqual([3, 4]);
});

test('generate target #4', () => {
  expect(
    somePlayer.generateTargetWith2Point(
      [
        ['', '', '', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'h', 'h', 'h', '', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'h', 's', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'h', 'h', 'h', 'm', 'm', 'm', 's'],
      ],
      [[2, 2], [2, 1], [2, 3]]
    )
  ).toEqual([2, 4]);
});

test('generate target #5', () => {
  expect(
    somePlayer.generateTargetWith2Point(
      [
        ['', '', '', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'h', 'h', 'h', '', 'm', 'm', 'm', 'm', 'm'],
        ['m', 'm', 'm', 'h', 's', 'm', 'm', 'm', 'm', 'm'],
        ['', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['', '', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['', '', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['', '', '', 'm', 'm', 'm', 'm', 'm', 'm', 'h'],
        ['h', '', '', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
        ['h', '', '', 'h', 'h', 'h', 'm', 'm', 'm', 's'],
      ],
      [[8, 0], [9, 0]]
    )
  ).toEqual([7, 0]);
});
