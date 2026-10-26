import { useState } from "react";
import "./App.css";
import chef from "./images/chef.jpg";

function Header({ name, year }) {
  return (
    <header>
      <h1>Welcome to {name} Kitchen!</h1>
      <p>Copyright@{year}</p>
    </header>
  );
}
const items = ["Pizza", "Burger", "Pasta"];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish,
}));

function Main({ dishes }) {
  return (
    <>
      {/*this closing and opening tag is called fragment. It is used to group a list of children without adding extra nodes to the DOM. */}
      <div>
        <h2>We server the most delecious around here.✌️</h2>
      </div>
      <main>
        <img src={chef} height={200} alt="A photo at Tower Bridge" />{" "}
        {/*we can get github image with this one. " https://github.com/Sangyae.png "   */}
        <ul>
          {dishes.map((dish) => (
            <li key={dish.id} style={{ listStyleType: "none" }}>
              {dish.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

function App() {
  const [status, setStatus] = useState(true);
  return (
    <div>
      <h1>
        Restaurant is {""}
        {status ? "Open" : "Closed"}.
      </h1>
      <button onClick={() => setStatus(!status)}>
        {status ? "Close" : "Open"}Restaurant
      </button>
      <Header name="Bibek's" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} />{" "}
      {/* adding these things to the app function is to make the cdoe dynamic. */}
    </div>
  );
}
export default App;
