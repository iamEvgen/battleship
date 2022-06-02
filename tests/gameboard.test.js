/* eslint-disable no-undef */
import Gameboard from '../src/gameboard';

const myGameboard = new Gameboard();

test('add ship #1', () => {
  expect(myGameboard.addShip([1, 1], 3, 'horizontal')).toEqual([
    ['', '', '', '', '', '', '', '', '', ''],
    ['', 's', 's', 's', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
  ]);
});

test('add ship #2', () => {
  expect(myGameboard.addShip([1, 1], 3, 'horizontal')).toBe(false);
});

test('add ship #3', () => {
  expect(myGameboard.addShip([2, 1], 4, 'horizontal')).toBe(false);
});

test('add ship #4', () => {
  expect(myGameboard.addShip([3, 0], 4, 'vertical')).toEqual([
    ['', '', '', '', '', '', '', '', '', ''],
    ['', 's', 's', 's', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['s', '', '', '', '', '', '', '', '', ''],
    ['s', '', '', '', '', '', '', '', '', ''],
    ['s', '', '', '', '', '', '', '', '', ''],
    ['s', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
  ]);
});

test('add ship #5', () => {
  expect(myGameboard.addShip([0, 4], 2, 'horizontal')).toBe(false);
});

test('add ship #6', () => {
  expect(myGameboard.addShip([0, 9], 2, 'horizontal')).toBe(false);
});

test('add ship #7', () => {
  expect(myGameboard.addShip([9, 9], 2, 'vertical')).toBe(false);
});

test('add ship #8', () => {
  expect(myGameboard.addShip([9, 9], 1, 'vertical')).toEqual([
    ['', '', '', '', '', '', '', '', '', ''],
    ['', 's', 's', 's', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['s', '', '', '', '', '', '', '', '', ''],
    ['s', '', '', '', '', '', '', '', '', ''],
    ['s', '', '', '', '', '', '', '', '', ''],
    ['s', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', 's'],
  ]);
});

test('add ship #9', () => {
  expect(myGameboard.addShip([5, 9], 3, 'vertical')).toEqual([
    ['', '', '', '', '', '', '', '', '', ''],
    ['', 's', 's', 's', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['s', '', '', '', '', '', '', '', '', ''],
    ['s', '', '', '', '', '', '', '', '', ''],
    ['s', '', '', '', '', '', '', '', '', 's'],
    ['s', '', '', '', '', '', '', '', '', 's'],
    ['', '', '', '', '', '', '', '', '', 's'],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', 's'],
  ]);
});

test('hit the target #10', () => {
  expect(myGameboard.receiveAttack([1, 1])).toEqual(
    {
      hitStatus: true,
      shipWasSunk: false,
      gameOverStatus: false,
      field: [
        ['', '', '', '', '', '', '', '', '', ''],
        ['', 'h', 's', 's', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['s', '', '', '', '', '', '', '', '', ''],
        ['s', '', '', '', '', '', '', '', '', ''],
        ['s', '', '', '', '', '', '', '', '', 's'],
        ['s', '', '', '', '', '', '', '', '', 's'],
        ['', '', '', '', '', '', '', '', '', 's'],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', 's'],
      ],
    },
  );
});

test('hit the target #11', () => {
  expect(myGameboard.receiveAttack([1, 1])).toEqual(
    {
      hitStatus: 'error',
      shipWasSunk: false,
      gameOverStatus: false,
      field: [
        ['', '', '', '', '', '', '', '', '', ''],
        ['', 'h', 's', 's', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['s', '', '', '', '', '', '', '', '', ''],
        ['s', '', '', '', '', '', '', '', '', ''],
        ['s', '', '', '', '', '', '', '', '', 's'],
        ['s', '', '', '', '', '', '', '', '', 's'],
        ['', '', '', '', '', '', '', '', '', 's'],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', 's'],
      ],
    },
  );
});

test('hit the target #12', () => {
  expect(myGameboard.receiveAttack([0, 0])).toEqual(
    {
      hitStatus: false,
      shipWasSunk: false,
      gameOverStatus: false,
      field: [
        ['m', '', '', '', '', '', '', '', '', ''],
        ['', 'h', 's', 's', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['s', '', '', '', '', '', '', '', '', ''],
        ['s', '', '', '', '', '', '', '', '', ''],
        ['s', '', '', '', '', '', '', '', '', 's'],
        ['s', '', '', '', '', '', '', '', '', 's'],
        ['', '', '', '', '', '', '', '', '', 's'],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', 's'],
      ],
    },
  );
});

test('hit the target #13', () => {
  expect(myGameboard.receiveAttack([0, 0])).toEqual(
    {
      hitStatus: 'error',
      shipWasSunk: false,
      gameOverStatus: false,
      field: [
        ['m', '', '', '', '', '', '', '', '', ''],
        ['', 'h', 's', 's', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['s', '', '', '', '', '', '', '', '', ''],
        ['s', '', '', '', '', '', '', '', '', ''],
        ['s', '', '', '', '', '', '', '', '', 's'],
        ['s', '', '', '', '', '', '', '', '', 's'],
        ['', '', '', '', '', '', '', '', '', 's'],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', 's'],
      ],
    },
  );
});

test('hit the target #14', () => {
  expect(myGameboard.receiveAttack([1, 2])).toEqual(
    {
      hitStatus: true,
      shipWasSunk: false,
      gameOverStatus: false,
      field: [
        ['m', '', '', '', '', '', '', '', '', ''],
        ['', 'h', 'h', 's', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['s', '', '', '', '', '', '', '', '', ''],
        ['s', '', '', '', '', '', '', '', '', ''],
        ['s', '', '', '', '', '', '', '', '', 's'],
        ['s', '', '', '', '', '', '', '', '', 's'],
        ['', '', '', '', '', '', '', '', '', 's'],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', 's'],
      ],
    },
  );
});

test('hit the target #15', () => {
  expect(myGameboard.receiveAttack([0, 2])).toEqual(
    {
      hitStatus: false,
      shipWasSunk: false,
      gameOverStatus: false,
      field: [
        ['m', '', 'm', '', '', '', '', '', '', ''],
        ['', 'h', 'h', 's', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['s', '', '', '', '', '', '', '', '', ''],
        ['s', '', '', '', '', '', '', '', '', ''],
        ['s', '', '', '', '', '', '', '', '', 's'],
        ['s', '', '', '', '', '', '', '', '', 's'],
        ['', '', '', '', '', '', '', '', '', 's'],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', 's'],
      ],
    },
  );
});

test('hit the target #16', () => {
  expect(myGameboard.receiveAttack([1, 3])).toEqual(
    {
      hitStatus: true,
      shipWasSunk: true,
      gameOverStatus: false,
      field: [
        ['m', '', 'm', '', '', '', '', '', '', ''],
        ['', 'h', 'h', 'h', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['s', '', '', '', '', '', '', '', '', ''],
        ['s', '', '', '', '', '', '', '', '', ''],
        ['s', '', '', '', '', '', '', '', '', 's'],
        ['s', '', '', '', '', '', '', '', '', 's'],
        ['', '', '', '', '', '', '', '', '', 's'],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', 's'],
      ],
    },
  );
});

test('hit the target #17', () => {
  expect(myGameboard.receiveAttack([3, 0])).toEqual(
    {
      hitStatus: true,
      shipWasSunk: false,
      gameOverStatus: false,
      field: [
        ['m', '', 'm', '', '', '', '', '', '', ''],
        ['', 'h', 'h', 'h', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['h', '', '', '', '', '', '', '', '', ''],
        ['s', '', '', '', '', '', '', '', '', ''],
        ['s', '', '', '', '', '', '', '', '', 's'],
        ['s', '', '', '', '', '', '', '', '', 's'],
        ['', '', '', '', '', '', '', '', '', 's'],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', 's'],
      ],
    },
  );
});

test('hit the target #18', () => {
  myGameboard.receiveAttack([4, 0]);
  myGameboard.receiveAttack([5, 0]);
  expect(myGameboard.receiveAttack([6, 0])).toEqual(
    {
      hitStatus: true,
      shipWasSunk: true,
      gameOverStatus: false,
      field: [
        ['m', '', 'm', '', '', '', '', '', '', ''],
        ['', 'h', 'h', 'h', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['h', '', '', '', '', '', '', '', '', ''],
        ['h', '', '', '', '', '', '', '', '', ''],
        ['h', '', '', '', '', '', '', '', '', 's'],
        ['h', '', '', '', '', '', '', '', '', 's'],
        ['', '', '', '', '', '', '', '', '', 's'],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', 's'],
      ],
    },
  );
});

test('hit the target #19', () => {
  expect(myGameboard.receiveAttack([7, 0])).toEqual(
    {
      hitStatus: false,
      shipWasSunk: false,
      gameOverStatus: false,
      field: [
        ['m', '', 'm', '', '', '', '', '', '', ''],
        ['', 'h', 'h', 'h', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['h', '', '', '', '', '', '', '', '', ''],
        ['h', '', '', '', '', '', '', '', '', ''],
        ['h', '', '', '', '', '', '', '', '', 's'],
        ['h', '', '', '', '', '', '', '', '', 's'],
        ['m', '', '', '', '', '', '', '', '', 's'],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', 's'],
      ],
    },
  );
});

test('hit the target #19', () => {
  expect(myGameboard.receiveAttack([9, 9])).toEqual(
    {
      hitStatus: true,
      shipWasSunk: true,
      gameOverStatus: false,
      field: [
        ['m', '', 'm', '', '', '', '', '', '', ''],
        ['', 'h', 'h', 'h', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['h', '', '', '', '', '', '', '', '', ''],
        ['h', '', '', '', '', '', '', '', '', ''],
        ['h', '', '', '', '', '', '', '', '', 's'],
        ['h', '', '', '', '', '', '', '', '', 's'],
        ['m', '', '', '', '', '', '', '', '', 's'],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', 'h'],
      ],
    },
  );
});

test('hit the target #20', () => {
  myGameboard.receiveAttack([5, 9]);
  myGameboard.receiveAttack([6, 9]);
  expect(myGameboard.receiveAttack([7, 9])).toEqual(
    {
      hitStatus: true,
      shipWasSunk: true,
      gameOverStatus: true,
      field: [
        ['m', '', 'm', '', '', '', '', '', '', ''],
        ['', 'h', 'h', 'h', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['h', '', '', '', '', '', '', '', '', ''],
        ['h', '', '', '', '', '', '', '', '', ''],
        ['h', '', '', '', '', '', '', '', '', 'h'],
        ['h', '', '', '', '', '', '', '', '', 'h'],
        ['m', '', '', '', '', '', '', '', '', 'h'],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', 'h'],
      ],
    },
  );
});
