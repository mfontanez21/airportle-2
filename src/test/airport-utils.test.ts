import { describe, expect, it } from "vitest";
import { LetterState, getRandomAirport, computeGuess } from "./airport-utils";

describe('airport-utils', () => {
  it('random airport', () => {
    expect(getRandomAirport()).toBeTruthy();
  });
});

describe('computeGuess', () => {
  it('works with match and present', () => {
    const airportString = { iataCode: "BOS", city: "", country: "", airportName: "" };
    expect(computeGuess('BSL', airportString)).toEqual([
      LetterState.Match,
      LetterState.Present,
      LetterState.Miss,
    ]);
  });

  it('works with all matches', () => {
    const airportString = { iataCode: "BOS", city: "", country: "", airportName: "" };
    expect(computeGuess('BOS', airportString)).toEqual([
      LetterState.Match,
      LetterState.Match,
      LetterState.Match,
    ]);
  });

  it('works with full miss', () => {
    const airportString = { iataCode: "JFK", city: "", country: "", airportName: "" };
    expect(computeGuess('BOS', airportString)).toEqual([
      LetterState.Miss,
      LetterState.Miss,
      LetterState.Miss,
    ]);
  });

  it('only does one match when two letters are present', () => {
    const airportString = { iataCode: "FLL", city: "", country: "", airportName: "" };
    expect(computeGuess('TLH', airportString)).toEqual([
      LetterState.Miss,
      LetterState.Match,
      LetterState.Miss,
    ]);
  });
});
