const Letter_Length = 3

interface AirportRowProps{
  letters: string
}




export default function AirportRow({letters: lettersProp = ""}: AirportRowProps){
  const lettersRemaining = Letter_Length - lettersProp.length
  const letters = lettersProp.split('').concat(Array(lettersRemaining).fill(''))
  return (
      <div className="grid grid-cols-3 gap 4">{letters.map((char, index) => (
        <CharacterBox key = {index} value = {char}/>
      ))}
    </div>
  )
}

interface CharacterBoxProps {
  value: string
}


function CharacterBox({ value }: CharacterBoxProps) {
  return <div className="inline-block mx-2 border-2 border-gray-500 p-4 uppercase font-bold text-center text-2xl"> {value} </div>
  }
