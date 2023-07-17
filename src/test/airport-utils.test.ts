import { describe, expect, it } from "vitest";
import { getRandomAirport } from "./airport-utils";



describe('airport-utils', () => {
  it('random airport',  () => {
    expect(getRandomAirport()).toBeTruthy()
  });
});