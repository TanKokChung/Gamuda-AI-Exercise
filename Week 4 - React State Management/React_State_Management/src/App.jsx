// import { useState } from 'react';

// function UserProfile() {

// const [count, setCount] = useState(0);
// const [name, setName] = useState('Louis');
// const [user, setUser] = useState({name: 'Louis', email: 'louistan@gmail.com'});

// return (
//   <div>
//     <h1>Hi, my name is {user.name}</h1>
//     <h2>My email: {user.email}</h2>
//   </div>
// );
// }

// export default UserProfile;

//Sample excercise





// import { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => setCount(count + 1);
//   const decrement = () => setCount(count - 1);
//   const reset = () => setCount(0);

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }

// export default Counter;

//first_excercise





// import { useState } from "react";

// function userProfile() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [age, setAge] = useState(0);

//   return (
//     <div>
//       <input
//         placeholder="First Name"
//         value={firstName}
//         onChange={(e) => setFirstName(e.target.value)}
//       />
//       <input
//         placeholder="Last Name"
//         value={lastName}
//         onChange={(e) => setLastName(e.target.value)}
//       />
//       <input
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="Number"
//         placeholder="Age"
//         value={age}
//         onChange={(e) => setAge(Number(e.target.value))}
//       />
//       <h3>
//         Hello, {firstName} {lastName}
//       </h3>
//       <p>Email: {email}</p>
//       <p>Age: {age}</p>
//     </div>
//   );
// }

// export default userProfile;

//Second_Excercise





// import { useState } from "react";

// function UserForm() {
//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     phone: ''
//   });

//   const handleInputChange = (field, value) => {
//     setUser(prevUser => ({
//       ...prevUser,
//       [field]: value,
//     }));
//   };

//   return (
//     <div>
//       <input
//         placeholder="Name"
//         value={user.name}
//         onChange={(e) => handleInputChange('name', e.target.value)}
//       />
//       <input
//         placeholder="Email"
//         value={user.email}
//         onChange={(e) => handleInputChange('email', e.target.value)}
//       />
//       <input
//         placeholder="Phone"
//         value={user.phone}
//         onChange={(e) => handleInputChange('phone', e.target.value)}
//       />
//       <div>
//         <h3>User Info:</h3>
//         <p>Name: {user.name}</p>
//         <p>Email: {user.email}</p>
//         <p>Phone: {user.phone}</p>
//       </div>
//     </div>
//   );
// }

// export default UserForm;

//third_excercise





// import {useState} from 'react'

// function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const addTodo = () => {
//     if (inputValue.trim()) {
//       setTodos(prevTodos => [
//         ...prevTodos,
//         {id: Date.now(), text: inputValue, completed: false}
//       ]);
//       setInputValue('');
//     }
//   };

//   const toggleTodo = (id) => {
//     setTodos(prevTodos =>
//       prevTodos.map(todo =>
//         todo.id === id ? { ...todo, completed: !todo.completed} : todo
//       )
//     );
//   };

//   const deleteTodo = (id) => {
//     setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
//   };

//   return (
//     <div>
//       <input
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         placeholder="Add a todo"      
//       />

//       <button onClick={addTodo}>Add</button>
//       <ul>
//         {todos.map(todo => (
//           <li key={todo.id}>
//             <span
//               style={{
//                 textDecoration: todo.completed ? 'line-through' : 'none'
//               }}
//               onClick={() => toggleTodo(todo.id)}
//             >
//             {todo.text}
//             </span>
//             <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList;

//Fourth excercise





// import {useState} from 'react'

// function TemperatureConverter () {
//   const [celcius, setCelcius] = useState('');
//   const [fahrenheit,setFahrenheit] = useState('');

//   const handelCelciusChange = (e) => {
//     const value = e.target.value;
//     setCelcius(value);
//     setFahrenheit(value === '' ? '' : ((value * 9)/5 + 32).toFixed(2));
//   };

//   const handelFahrenheitChange = (e) => {
//     const value = e.target.value;
//     setFahrenheit(value);
//     setCelcius(value === '' ? '' : (((value - 32)*5) / 9).toFixed(2));
//   };

//   return (
//     <div>
//       <h2>Temperature Converter</h2>
//       <label>
//         Celcius:
//         <input type ="number" value={celcius} onChange={handelCelciusChange}></input>
//       </label>
//       <br />
//       <label>
//         Fahrenheit:
//         <input type ="number" value={fahrenheit} onChange={handelFahrenheitChange}></input>
//       </label>
//     </div>
//   )
// }

// export default TemperatureConverter;

//Temperature converter excercise




import { useState } from "react";

function ShoppingCart () {
  const product = [
    {
      id: 1,
      name: 'Apple',
      price: 2
    },
    {
      id: 2,
      name: 'Orange',
      price: 3
    },
    {
      id: 3,
      name: 'Banana',
      price: 1.5
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index,1);
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <h3>Products</h3>
      {product.map((product) => (
        <div key={product.id}>
          {product.name} - ${product.price}
          <button onClick={() => addToCart(product)}>Add</button>
        </div>
      ))}

      <h3>Cart</h3>
      {cart.map((item, index) => (
        <div key={index}>
          {item.name} - ${item.price}
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))}

      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
}

export default ShoppingCart;


//Shopping cart excercise




// import { useState } from "react";

// function personalExpenses() {

// }


//Personal Expenses Tracker - Not yet complete