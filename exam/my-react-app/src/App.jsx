import React from 'react'
import { useState } from 'react'

function App() {
  const [count, setcount] = useState(0)

  return (
    <div>
      <h2>count : {count}</h2>



      <button onClick={() => setcount(count + 1)}>Increament</button>
    </div>
  )
}

export default App