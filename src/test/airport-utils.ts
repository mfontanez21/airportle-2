import airports from "../airports.json"

export function getRandomAirport(){
  const randomIndex = Math.floor(Math.random() * airports.length)
  return airports[randomIndex]
}

