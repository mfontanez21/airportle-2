import { LetterState, Letter_Length} from "./test/airport-utils";




interface AirportRowProps {
  letters: string;
  result?: LetterState[]
}

interface CharacterBoxProps {
  value: string;
  state?: LetterState;
}

export default function AirportRow({ letters: lettersProp = "", result = [] }: AirportRowProps) {
  console.log('AirportRow result:', result); // Add this line

  const lettersRemaining = Letter_Length - lettersProp.length;
  const letters = lettersProp.split('').concat(Array(lettersRemaining).fill(''));

  return (
    <span className="grid grid-cols-3 gap-4">
      {letters.map((char, index) => (
        <CharacterBox key={index} value={char} state={result[index]} />
      ))}
    </span>
  );
}




function CharacterBox({ value, state }: CharacterBoxProps) {
  console.log('CharacterBox state:', state); // Add this line
  
  const stateStyles =
    state == null
      ? 'border-gray-500 text-black'
      : `${characterStateStyles[state]} text-white`;
  return (
    <span
      className={`inline-block border-2 boreder-black-500 p-6 before: inline-block before:content-['_'] uppercase font-bold text-2xl text-center ${stateStyles}`}
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

