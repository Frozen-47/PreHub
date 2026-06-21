import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex gap-4 p-4 bg-gray-200 justify-around text-white">
        <div className="w-14 h-14 grow-0 bg-red-800 flex items-center justify-center">1</div>
        <div className="w-14 h-14 grow-0 bg-blue-800 flex items-center justify-center">2</div>
        <div className="w-14 h-14 grow-0 bg-green-800 flex items-center justify-center">3</div>
      </div>
    </>
  )
}

export default App