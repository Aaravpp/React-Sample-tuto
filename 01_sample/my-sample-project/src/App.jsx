// import React, { useMemo } from 'react'
// import Welcome from './components/welcome'
// import { useState } from 'react'

// const { useReducer } = require("react");

// const { useMemo } = require("react");

// const { useReducer } = require("react");

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

// import { useState, useMemo, useCallback, memo } from "react";

// const initialProducts = [
//   { id: 1, name: "Laptop", price: 60000 },
//   { id: 2, name: "Mouse", price: 500 },
//   { id: 3, name: "Phone", price: 30000 },
//   { id: 4, name: "Keyboard", price: 2000 }
// ];

// // React.memo
// const Product = memo(function Product({ product, onDelete }) {
//   console.log("Product rendered:", product.name);

//   return (
//     <div>
//       <h3>{product.name}</h3>
//       <p>₹{product.price}</p>

//       <button onClick={() => onDelete(product.id)}>
//         Delete
//       </button>
//     </div>
//   );
// });

// function App() {
//   const [products, setProducts] = useState(initialProducts);
//   const [search, setSearch] = useState("");
//   const [count, setCount] = useState(0);

//   // useMemo
//   const filteredProducts = useMemo(() => {
//     console.log("Filtering products");

//     return products.filter((product) =>
//       product.name.toLowerCase().includes(search.toLowerCase())
//     );
//   }, [products, search]);

//   // useCallback
//   const handleDelete = useCallback((id) => {
//     setProducts((previousProducts) =>
//       previousProducts.filter((product) => product.id !== id)
//     );
//   }, []);

//   return (
//     <div>
//       <h1>Product Management</h1>

//       <input
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         placeholder="Search products"
//       />

//       <button onClick={() => setCount(count + 1)}>
//         Count: {count}
//       </button>

//       {filteredProducts.map((product) => (
//         <Product
//           key={product.id}
//           product={product}
//           onDelete={handleDelete}
//         />
//       ))}
//     </div>
//   );
// }

// export default App;

// useReducer

// import { useReducer } from "react";

// const initialState = {
//   name : "",
//   age : 0,
//   email : "",
//   isSubmitted : false
// };

// function reducer(state, action){
//   switch(action.type){

//     case "UPDATE_NAME":
//       return {
//         ...state,
//         name : action.payload
//       };

//     case "UPDATE_AGE":
//       return {
//         ...state,
//         age : action.payload
//       }

//     case "UPDATE_EMAIL":
//       return {
//         ...state,
//         email : action.payload
//       }

//     case "SUBMIT":
//       return {
//         ...state,
//         isSubmitted : true
//       }

//     case "RESET":
//       return initialState;

//     default:
//       return state;
//   }
// }

// function Registration() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <h2>Registration</h2>

//       <input type="text"
//         placeholder="Name"
//         value={state.name}
//         onChange={(e) => 
//           dispatch({
//             type: "UPDATE_NAME",
//             payload : e.target.value
//           })
//         }
//       />

//       <input type="number"
//         placeholder="Age"
//         value = {state.age}
//         onChange={(e) => 
//           dispatch({
//             type : "UPDATE_AGE",
//             payload : Number(e.target.value)
//           })
//         }
//       />

//       <input
//         placeholder="Email"
//         value = {state.email}
//         onChange={(e) => 
//           dispatch({
//             type : "UPDATE_EMAIL",
//             payload : e.target.value
//           })
//         }
//       />

//       <button onClick={() => dispatch({type : "SUBMIT"})}>Submit</button>
        
//       <button onClick={() => dispatch({ type : "RESET"})}>Reset</button>

//       <pre>{JSON.stringify(state, null, 2)}</pre>

//     </div>
//   )
// }

// export default Registration

// context API

// import { createContext, useContext } from "react";

// export const UserContext = createContext(null);

// function App(){
//     const user = {
//         name : "Arav",
//         email : "aravpp03@gmail.com"
//     };

//     return (
//         <UserContext.Provider value={user}>
//             <Dashboard/>
//         </UserContext.Provider>
//     );
// }

// function Dashboard() {
//     return (
//         <div>
//             <h2>Dashboard</h2>
//             <UserName />
//         </div>
//     )
// }

// function UserName() {
//     const user = useContext(UserContext);

//     return (
//         <div>
//             <h1>Hello {user.name}</h1>
//             <p>{user.email}</p>
//         </div>
//     )
// }

// export default App;

// import { UserContext } from "./context/UserContext";
// import Dashboard from "./components/Dashboard";

// function App() {
//     const user = {
//         name : "Arav",
//         email : "aravpp03@gmail.com"
//     };

//     return (
//         <UserContext.Provider value={user}>
//             <Dashboard />
//         </UserContext.Provider>
//     )
// }

// export default App;

// Task 1

// import { useState } from "react";

// function Product({ name, price}) {
//     console.log("Product Rendered.");

//     return (
//         <div>
//             <h1>{ name }</h1>
//             <h4>{ price }</h4>
//         </div>
//     );
// }

// function App() {

//     const [count, setCount] = useState(0);

//     return(
//         <div>
//             <h2>Count : {count}</h2>

//             <button onClick={() => {setCount(count + 1)}}>Increament</button>

//             <Product name = "Laptop" price={82999}/>
//         </div>
//     );
// }

// export default App;


// Task 1 React.memo

// import { useState, memo } from "react";

// const Product = memo(function Product({ name, price }) {
//     console.log("Product Rendered.");

//     return (
//         <div>
//             <h1>{name}</h1>
//             <h4>{price}</h4>
//         </div>
//     )
// })

// function App() {
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <h1>Count : {count}</h1>

//             <button onClick={() => setCount(count + 1)}>Increase</button>

//             <Product name = "Laptop" price = {82999}/>
//         </div>
//     );
// }

// export default App;

// useCallback

// import { useState, memo, useCallback } from "react";

// const Product = memo(function Product({ name, price, onbuy}) {
//     console.log("Product component Rendered.");

//     return (
//         <div>
//             <h1>{name}</h1>
//             <h4>{price}</h4>
            
//             <button onClick={onbuy}>Buy now</button>
//         </div>
//     );
// })

// function App() {

//     const [count, setCount] = useState(0);

//     const handleBuy = useCallback(() => {
//         console.log("Product Purchased!");
//     }, []);

//     return (
//         <div>
//             <h2>Count : {count}</h2>

//             <button onClick={() => setCount(count + 1)}>Increase</button>

//             <Product name = "Laptop" price = {899999} onbuy = {handleBuy}/>
//         </div>
//     );
// }

// export default App;


// with useMemo

// import { useState, memo, useCallback, useMemo } from "react";

// const products = [
//     { id: 1, name: "Laptop", price: 60000 },
//     { id: 2, name: "Mouse", price: 500 },
//     { id: 3, name: "Keyboard", price: 1500 },
//     { id: 4, name: "Monitor", price: 12000 },
//     { id: 5, name: "Mobile", price: 30000 },
//     { id: 6, name: "Headphones", price: 2500 },
//     { id: 7, name: "Tablet", price: 20000 },
//     { id: 8, name: "Webcam", price: 3500 },
// ];

// const Product = memo(function Product({ product, onBuy }) {
//     console.log(`${product.name} Child Component Rendered.`);

//     return (
//         <div>
//             <h2>{product.name}</h2>
//             <h4>{product.price}</h4>

//             <button onClick={() => (onBuy(product.name))}>Buy Now</button>
//         </div>
//     )
// });

// function App() {

//     const [count, setCount] = useState(0);
//     const [maxPrice, setMaxPrice] = useState(10000);

//     console.log("App Components Rendered.");

//     const handleBuy = useCallback((name) => {
//         console.log(`${name} Purchased!`);
//     }, []);

//     const filteringProducts = useMemo(() => {
//         console.log("Filtering Products...");

//         return products.filter((product) => product.price <= maxPrice)
//     }, [maxPrice]);

//     return (
//         <div>
            
//             <h1>ONLINE SHOPING CENTER</h1>
  
//             <h2>Count : {count}</h2>

//             <button onClick={() => setCount(count + 1)}>Increase</button>
//             <hr />

//             <h2>Maximum Price : {maxPrice}</h2>

//             <input type= "range"
//                 min={1000}
//                 max={100000}
//                 step={1000}
//                 value={maxPrice}
//                 onChange={(e) => setMaxPrice(Number(e.target.value))}
//             />

//             <hr />

//             {filteringProducts.map((product) => (
//                 <Product key = {product.id} product = {product} onBuy = {handleBuy}/>
//             ))}

//         </div>
//     );

// }

// export default App;

// useReducer

import { useReducer, useEffect } from "react";

const initialState = {
    name : "",
    age : 0,
    email : "",
    isSubmitted : false,
    error : ""
};

function reducer(state, action) {
    switch (action.type) {
        case "UPDATE_NAME" :
            return {
                ...state,
                name : action.payload,
                isSubmitted : false,
                error : ""
            }
        
        case "UPDATE_AGE" :
            return {
                ...state,
                age : action.payload,
                isSubmitted : false,
                error : ""
            }

        case "UPDATE_EMAIL" :
            return {
                ...state,
                email : action.payload,
                isSubmitted : false,
                error : ""
            }

        case "SUBMIT" :
            if(!state.name || !state.age || !state.email) {
                return {
                    ...state,
                    error : "Please fill the all fields. "
                }
            }
            return {
                ...state,
                isSubmitted : true,
                error : ""
            }

        case "RESET" :
            return initialState;

        default:
            return state;
    }   
}

function App () {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (state.isSubmitted) {
            console.log("Form Submitted Successfully!");
            console.log("Name:", state.name);
            console.log("Age:", state.age);
            console.log("Email:", state.email);
        }
    }, [state.isSubmitted])

    return (
        <div>
            <h1>Registration Form</h1>
            <hr />
            <input type="text"
                placeholder="Entet Your Name"
                value={state.name}
                onChange={(e) => 
                    dispatch({
                        type : "UPDATE_NAME",
                        payload : e.target.value
                    })
                }
            />

            <input type= "number"
                placeholder="Enter your age"
                value={state.age}
                onChange={(e) => 
                    dispatch({
                        type : "UPDATE_AGE",
                        payload : Number(e.target.value)
                    })
                }
            />

            <input type="email"
                placeholder="Email"
                value={state.email}
                onChange={(e) =>
                    dispatch({
                        type : "UPDATE_EMAIL",
                        payload : e.target.value
                    })
                }
            />

            <button onClick={() => dispatch({type : "SUBMIT"})}>Submit</button>
            <button onClick={() => dispatch({type : "RESET"})}>RESET</button>
            
            <hr />

            {state.error && (
                <h3>{state.error}</h3>
            )}

            {state.isSubmitted && (
                <div>
                    <h2>Form Submittede Successfully!</h2>
                    <hr />
    
                    <h2>NAME : {state.name}</h2>
                    <h3>AGE : {state.age}</h3>
                    <h3>Email : {state.email}</h3>
                </div>
            )}

        </div>
    )
}

export default App;