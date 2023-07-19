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

export function computeGuess(
  guess: string, 
  airportString: string
  ): LetterState[] {

  const result: LetterState[] = []

  if (guess.length !== airportString.length) {
    return result
  }

  const guessArray = guess.split("")

  const answer = airportString.split("")

  const answerLetterCount: Record<string, number> = {}

  guessArray.forEach((letter, index ) => {
    const currentAnswerLetter=answer[index]

    answerLetterCount[currentAnswerLetter] = answerLetterCount[currentAnswerLetter] ? answerLetterCount[currentAnswerLetter] + 1 : 1

    if (currentAnswerLetter === letter){
      result.push(LetterState.Match)
    } else if (answer.includes(letter)) {
      result.push(LetterState.Present)
    } else {
      result.push(LetterState.Miss)
    }
  })
    result.forEach((curResult, resultIndex) => {
      if (curResult !== LetterState.Present) {
        return
      }

      const guessLetter = guessArray[resultIndex]

      answer.forEach((currentAnswerLetter, answerIndex) => {
        if (currentAnswerLetter !== guessLetter) {
          return
        }
        
        if (result[answerIndex] === LetterState.Match) {
          result[resultIndex] = LetterState.Miss
        }

        if (answerLetterCount[guessLetter] <= 0) {
          result[resultIndex] = LetterState.Miss
        }
      })
      answerLetterCount[guessLetter]--
    })
    return result
}
