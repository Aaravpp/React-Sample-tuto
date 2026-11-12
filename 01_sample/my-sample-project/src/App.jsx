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

// with React.memo

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

// with react.memo string props

// import { memo } from 'react';

// const Child = memo(function Child({ user }) {
//   console.log("Child Rendered");

//   return <h2>Hello {user.name}</h2>
// })

// function App(){

//   const [count, setCount] = useState(0);

//   const user = {name : "Arav"};

//   return (
//     <>
//       <h2>Count : {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>

//       <Child user = {user} />
//     </>
//   )
// }

// export default App

// without useMemo

function ProductList(){

  const [count, setCount] = useState(0);

  const products = [
    { id: 1, name: "Laptop", price: 60000 },
    { id: 2, name: "Mouse", price: 500 },
    { id: 3, name: "Phone", price: 30000 },
    { id: 4, name: "Keyboard", price: 2000 }
  ];

  console.log("Filtering prodducts...");

  const expensiveProducts = products.filter((product) => product.price > 10000);

  return (
    <>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      {expensiveProducts.map((product) => (
        <p> key = {product.id}, {product.name} - {product.price}</p>
      ))}
    </>
  )
}

export default ProductList