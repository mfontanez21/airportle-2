import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getRandomAirport } from './test/airport-utils';

export interface Airport {
  iataCode: string;
  city: string;
  country: string;
  airportName: string;
}

interface StoreState {
  answer: Airport;
  guesses: string[];
  addGuess: (guess: string) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      answer: getRandomAirport(),
      guesses: [],
      addGuess: (guess: string) => {
        // Convert the guess to uppercase before processing
        const uppercaseGuess = guess.toUpperCase();
        set((state) => ({
          guesses: [...state.guesses, uppercaseGuess],
        }));
      },
    }),
    {
      name: 'airportle',
    }
  )
);

useStore.persist.clearStorage();
