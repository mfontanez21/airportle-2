import { LetterState, computeGuess } from "./test/airport-utils";
import { useStore, Airport } from "./store";
import { Letter_Length } from "./test/airport-utils";



interface AirportRowProps {
  letters: string;
}

interface CharacterBoxProps {
  value: string;
  state?: LetterState;
}

export default function AirportRow({ letters: lettersProp = "" }: AirportRowProps) {
  const answer = useStore((state) => state.answer as Airport); // Explicitly specify the Airport interface
  const lettersRemaining = Letter_Length - lettersProp.length;
  const letters = lettersProp.split('').concat(Array(lettersRemaining).fill(''));

  const guessStates = computeGuess(lettersProp, answer); // Pass the entire answer object to computeGuess

  return (
    <span className="grid grid-cols-3 gap-4">
      {letters.map((char, index) => (
        <CharacterBox key={index} value={char} state={guessStates[index]} />
      ))}
    </span>
  );
}



function CharacterBox({ value, state }: CharacterBoxProps) {
  const stateStyles =
    state == null
      ? 'border-gray-500 text-black'
      : `${characterStateStyles[state]} text-white`;
  return (
    <span
      className={`border-2 p-2 uppercase text-center font-extrabold text-4xl before:inline-block before:content-['_'] ${stateStyles} `}
    >
      {value}
    </span>
  );
}

const characterStateStyles = {
  [LetterState.Miss]: 'border-gray-500 bg-gray-500',
  [LetterState.Present]: 'border-yellow-500 bg-yellow-500',
  [LetterState.Match]: 'border-green-500 bg-green-500',
};
