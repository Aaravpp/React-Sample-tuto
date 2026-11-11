import React from 'react'
import Welcome from './components/welcome'
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0);

  console.log("App Rendered");

  return (
    <div>
      <h2>Count : {count}</h2>
      
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  )
}

export default App