import React from 'react'
import Welcome from './components/welcome'
import { useState } from 'react'

// function App() {

//   const [count, setCount] = useState(0);

//   console.log("App Rendered");

//   return (
//     <div>
//       <h2>Count : {count}</h2>
      
//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//     </div>
//   )
// }

// export default App


// Without React.memo

// function Child() {
//   console.log("Child Rendered")

//   return(
//     <h2>I am Child</h2>
//   )
// }

// function App() {

//   const [count, setCount] = useState(0);

//   return(
//     <div>
//       <h2>Count : {count}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>

//       <Child />
//     </div>
//   )
// }

// export default App

// with child.memo

// import { memo } from 'react';

// const Child = memo(function Child() {
//   console.log("Child Rendered");

//   return (
//     <h2>I am Child</h2>
//   )
// }
// )

// function App() {

//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h2>Count : {count}</h2>

//       <button onClick={() => setCount(count + 1)}>Increase</button>

//       <Child />
//     </div>
//   )
// }

// export default App


import { memo } from 'react';

const Child = memo(function Child({ user }) {
  console.log("Child Rendered");

  return <h2>Hello {user.name}</h2>
})

function App(){

  const [count, setCount] = useState(0);

  const user = {name : "Arav"};

  return (
    <>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Child user = {user} />
    </>
  )
}

export default App