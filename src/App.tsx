import AirportRow from "./AirportRow"
import React, { useState } from "react"
import { useStore } from "./store"
import { Letter_Length } from "./test/airport-utils"

const GUESS_LENGTH = 6 

export default function App() {
  const state = useStore()
  const [guess, setGuess] = useState("")


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newGuess = e.target.value.toUpperCase()

    if(newGuess.length === Letter_Length){
      state.addGuess(newGuess)
      setGuess("")
      return
    }
    setGuess(newGuess)
  }
  console.log('App Rows:', state.rows);
  let rows = [...state.rows]

  if (rows.length < GUESS_LENGTH) {
    rows.push({guess})
  }

  const numberOfGuessesRemaining = GUESS_LENGTH - rows.length

  rows = rows.concat(Array(numberOfGuessesRemaining).fill(""))

  const isGameOver = state.rows.length === GUESS_LENGTH

  return (
    <div className="mx-auto w-96 relative">
      <header className="border-b border-gray-500 pb-2 my-2">
      <h1 className="text-4xl text-center">Airportle 2.0</h1>
      

      <div>
        <input 
        type="text" 
        className="w-1/2 p-2 border-2 border-gray-500"
        value={guess} 
        onChange={onChange} 
        disabled={isGameOver}/>
      </div>
      </header>
      <main className="grid grid-rows-6 gap-4">
        {rows.map(({guess, result}, index) => (
          <AirportRow key={index} letters={guess} result={result}/>
        ))}

      </main>

      {isGameOver && (
        <div role="modal" className="absolute bg-white
        left-0 right-0 top-1/4 p-6 w-3/4 mx-auto rounded border border-gray-500 text-center"
        >
          Game Over!
          </div>
      )}
    </div>
  )
}


