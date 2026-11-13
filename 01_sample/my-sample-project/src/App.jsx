// import React, { useMemo } from 'react'
// import Welcome from './components/welcome'
// import { useState } from 'react'

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

// function ProductList(){

//   const [count, setCount] = useState(0);

//   const products = [
//     { id: 1, name: "Laptop", price: 60000 },
//     { id: 2, name: "Mouse", price: 500 },
//     { id: 3, name: "Phone", price: 30000 },
//     { id: 4, name: "Keyboard", price: 2000 }
//   ];

//   console.log("Filtering prodducts...");

//   const expensiveProducts = products.filter((product) => product.price > 10000);

//   return (
//     <>
//       <h2>Count : {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>

//       {expensiveProducts.map((product) => (
//         <p> key = {product.id}, {product.name} - {product.price}</p>
//       ))}
//     </>
//   )
// }

// export default ProductList

// with useMemo

// const products = [
//   { id: 1, name: "Laptop", price: 60000 },
//   { id: 2, name: "Mouse", price: 500 },
//   { id: 3, name: "Phone", price: 30000 },
//   { id: 4, name: "Keyboard", price: 2000 }
// ];

// function ProductList(){

//   const [count, setCount] = useState(0);

  
//   const expensiveProducts = useMemo(() => {
//     console.log("Filtering prodducts...");

//     return products.filter((product) => product.price > 10000);
//   }, []);

//   return (
//     <>
//       <h2>Count : {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>

//       {expensiveProducts.map((product) => (
//         <p> key = {product.id}, {product.name} - {product.price}</p>
//       ))}
//     </>
//   )
// }

// export default ProductList

// useMemo with changing dependencies

// const products = [
//    "Laptop",
//   "Mobile",
//   "Keyboard",
//   "Mouse",
//   "Monitor"
// ];

// function ProductList(){

//   const [count, setCount] = useState(0);
//   const [search, setSearch] = useState("");

  
//   const filteredProducts = useMemo(() => {
//     console.log("Filtering...");

//     return products.filter((product) => product.toLowerCase().includes(search.toLocaleLowerCase()));
//   }, [search]);

//   return (
//     <>
//       <input
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         placeholder="Search products"
//       />

//       <button onClick={() => setCount(count + 1)}>
//         Count: {count}
//       </button>

//       {filteredProducts.map((product) => (
//         <p key={product}>{product}</p>
//       ))}
//     </>
//   )
// }

// export default ProductList

// useCallback

// import { useState, memo, useCallback } from "react";

// const Child = memo(function Child({ handleClick }) {
//   console.log("Child Rendered");

//   return (
//     <button onClick={handleClick}>Click Child</button>
//   )
// });

// function App(){
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     console.log("Child button Chilked");
//   }, []);

//   return (
//     <div>
//       <h2>Count : {count}</h2>
      
//       <button onClick={() => setCount(count + 1)}>Increase</button>

//       <Child handleClick = {handleClick}/>
//     </div>
//   )
// }

// export default App

// Product e-commerce application.

import { useState, useMemo, useCallback, memo } from "react";

const initialProducts = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Mouse", price: 500 },
  { id: 3, name: "Phone", price: 30000 },
  { id: 4, name: "Keyboard", price: 2000 }
];

// React.memo
const Product = memo(function Product({ product, onDelete }) {
  console.log("Product rendered:", product.name);

  return (
    <div>
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      <button onClick={() => onDelete(product.id)}>
        Delete
      </button>
    </div>
  );
});

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  // useMemo
  const filteredProducts = useMemo(() => {
    console.log("Filtering products");

    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  // useCallback
  const handleDelete = useCallback((id) => {
    setProducts((previousProducts) =>
      previousProducts.filter((product) => product.id !== id)
    );
  }, []);

  return (
    <div>
      <h1>Product Management</h1>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products"
      />

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      {filteredProducts.map((product) => (
        <Product
          key={product.id}
          product={product}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default App;
