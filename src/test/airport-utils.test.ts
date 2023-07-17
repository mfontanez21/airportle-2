import { describe, expect, it } from "vitest";
import { LetterState, getRandomAirport, computeGuess } from "./airport-utils";



describe('airport-utils', () => {
  it('random airport',  () => {
    expect(getRandomAirport()).toBeTruthy()
  });
});

describe('computeGuess', () => {
  it('works with match and present',  () => {
    expect(computeGuess('BSL', "BOS")).toEqual([
      LetterState.Match,
      LetterState.Present,
      LetterState.Miss
    ])
  });

  it('works with all matches',  () => {
    expect(computeGuess('BOS', "BOS")).toEqual([
      LetterState.Match,
      LetterState.Match,
      LetterState.Match,
    ])
  });

  it('works with full miss',  () => {
    expect(computeGuess('BOS', "JFK")).toEqual([
      LetterState.Miss,
      LetterState.Miss,
      LetterState.Miss,
    ])
  });

  it('only does one match when two letters are present',  () => {
    expect(computeGuess('TLH', "FLL")).toEqual([
      LetterState.Miss,
      LetterState.Match,
      LetterState.Miss,
    ])
  });
});