import AirportRow from "./WordRow"

export default function App() {


  return (
    <div className="mx-auto w-96">
      <header className="border-b border-gray-500 pb-2 my-2">
      <h1 className="text-4xl text-center">Airportle 2.0</h1>
      </header>

      <main>
        <AirportRow letters = "h" />
        <AirportRow letters = "he" />
        <AirportRow letters = "hel" />
      </main>
    </div>
  )
}


