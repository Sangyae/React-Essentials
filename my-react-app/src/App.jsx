import "./App.css";
import { useState } from 'react'

function Header({ name, year }) {
  return (
    <header>
      <h1>Welcome to {name} Kitchen!</h1>
      <p>Copyright@{year}</p>
    </header>
  );
}
const items = [
  "Pizza",
  "Burger",
  "Pasta"
];

const dishObjects = items.map((dish,i) => ({
  id: i,
  title: dish
}));

function Main({dishes}) {
  return (
    <div>
      <h2>We server the most delecious around here.✌️</h2>
      <ul>{dishes.map((dish) => (<li key={dish.id} style={{listStyleType:"none"}}>
        {dish.title}</li>))}
      </ul>
    </div>
    
  );
}

function App() {
  return (
    <div>
      <Header name ="Bibek's" year = {new Date().getFullYear()} />    
       <Main dishes = {dishObjects}/>   {/* adding these things to the app function is to make the cdoe dynamic. */}
    </div>
  );
}
export default App;