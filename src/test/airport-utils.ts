import airports from "../airports.json"

export function getRandomAirport(){
  const randomIndex = Math.floor(Math.random() * airports.length)
  return airports[randomIndex]
}

export enum LetterState {
  Miss,
  Present,
  Match,
}

export function computeGuess(guess: string, airportString: string): LetterState[] {
  const result: LetterState[] = []
  const guessArray = guess.split("")
  const airportArray = airportString.split("")

  guessArray.forEach((letter, index ) => {
    if (letter === airportArray[index]){
      result.push(LetterState.Match)
    } else if (airportArray.includes(letter)) {
      result.push(LetterState.Present)
    } else {
      result.push(LetterState.Miss)
    }
  })
    return result
}
