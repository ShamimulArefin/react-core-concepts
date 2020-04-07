import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = [ 'anwar', 'jafor', 'alomgir', 'salman', 'Arefin' ]
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illastrator', price: '$92.99'},
    {name: 'Premiere pro', price: '$95.99'},
    {name: 'PDF Reader', price: '$6.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
       <Counter></Counter>
       <Users></Users>
        <ul>
          {
             nayoks.map(nayok => <li type='1'>{nayok}</li>)
          }
          {/* <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li> */}
          {
            products.map(product=> <li>{product.name}</li>)
          }
          {
            products.map(product=> <Product product={product}></Product>)
          }
        </ul>
        {/* <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product> */}
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}
        <Person name ="Arefin Genius" hero="Hero of the year"></Person>
        <Person name ="Arefin Genius" hero="Hero of the year"></Person>
        <Person name ="Arefin Genius" hero="Hero of the year"></Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0)
  return(
    <div>
      <h1>Count: {count} </h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
        {
          users.map(user=> <li>{user.name} {user.phone}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'2px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
  }
  return(
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
  <h5>{props.product.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}
function Person(props){
  let personStyle={
    border:'2px solid yellow',
    margin:'10px'
  }
  return ( 
    <div style={personStyle}>
      <h2> {props.name} </h2>
      <h3> {props.hero} </h3>
    </div>
  )
}

export default App;
