import airports from "../airports.json"
import { Airport } from "../store"

export const Letter_Length = 3

const airport = getRandomAirport()

export function getRandomAirport(){
  const randomIndex = Math.floor(Math.random() * airports.length)
  return airports[randomIndex]
}

export enum LetterState {
  Match,
  Present,
  Miss,
}

console.log(airport);

export function computeGuess(guess: string, airportString: Airport): LetterState[] {
  const result: LetterState[] = Array.from({ length: guess.length }, () => LetterState.Miss);
  const guessArray = guess.split("");
  const answer = airportString.iataCode.split("");

  if (guess.length !== airportString.iataCode.length) {
    return result;
  }

  const answerLetterCount: Record<string, number> = {};

  // Count the occurrences of each letter in the answer
  answer.forEach((letter) => {
    answerLetterCount[letter] = (answerLetterCount[letter] || 0) + 1;
  });

  // Check for exact matches (LetterState.Match)
  guessArray.forEach((letter, index) => {
    if (letter === answer[index]) {
      result[index] = LetterState.Match;
      answerLetterCount[letter] -= 1; // Decrement the count for exact matches
    }
  });

  // Check for partially matching letters (LetterState.Present)
  guessArray.forEach((letter, index) => {
    if (result[index] !== LetterState.Match && answerLetterCount[letter] && answerLetterCount[letter] > 0) {
      result[index] = LetterState.Present;
      answerLetterCount[letter] -= 1; // Decrement the count for partially matching letters
    }
  });

  return result;
}


