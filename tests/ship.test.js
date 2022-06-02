/* eslint-disable no-undef */
import Ship from '../src/ship';

const ship1 = new Ship([[0, 0], [0, 1], [0, 2], [0, 3]]);

test('ship is ok #1', () => {
  expect(ship1.isHit()).toBe(false);
});

test('ship is ok #2', () => {
  expect(ship1.isSunk()).toBe(false);
});

test('ship is ok #3', () => {
  ship1.hit([1, 1]);
  expect(ship1.isHit()).toBe(false);
});

test('ship is ok #4', () => {
  expect(ship1.isSunk()).toBe(false);
});

test('ship is hit #5', () => {
  ship1.hit([0, 0]);
  expect(ship1.isHit()).toBe(true);
});

test('ship isnt sunk #6', () => {
  expect(ship1.isSunk()).toBe(false);
});

test('ship is hit #7', () => {
  ship1.hit([0, 1]);
  expect(ship1.isHit()).toBe(true);
});

test('ship isnt sunk #8', () => {
  expect(ship1.isSunk()).toBe(false);
});

test('ship is hit #9', () => {
  ship1.hit([0, 2]);
  expect(ship1.isHit()).toBe(true);
});

test('ship isnt sunk #10', () => {
  expect(ship1.isSunk()).toBe(false);
});

test('ship is hit #11', () => {
  ship1.hit([0, 3]);
  expect(ship1.isHit()).toBe(true);
});

test('ship is sunk #12', () => {
  expect(ship1.isSunk()).toBe(true);
});
