import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { computeGuess, getRandomAirport, LetterState } from './test/airport-utils';

interface GuessRow{
  guess: string;
  result?: LetterState[]
}

export interface Airport {
  iataCode: string;
  city: string;
  country: string;
  airportName: string;
}

interface StoreState {
  answer: Airport;
  rows: GuessRow[];
  addGuess: (guess: string) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      answer: getRandomAirport(),
      rows: [],
      addGuess: (guess: string) => {
        set((state) => ({
          rows: [...state.rows, 
            {
            guess, result: computeGuess(guess, state.answer)}],
        }));
      },
    }),
    {
      name: 'airportle',
    }
  )
);

useStore.persist.clearStorage();
