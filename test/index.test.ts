import { test, expect } from '@jest/globals';
import { AnyBrand, brander, createBrander } from '../src/index';

test('Should check that the brander function behaves like an identity function at runtime', () => {
  const input = {};

  expect(brander(input)).toBe(input);
});

test('Should ensure that createBrander returns a brander', () => {
  expect(createBrander<AnyBrand>()).toBe(brander);
});
