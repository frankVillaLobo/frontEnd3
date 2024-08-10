import { pizzas } from "../Utils/pizzas";
import { actividades } from "../Utils/actividades";

import Card from "./Card";
import Actividades from "./Actividades";

import HomeStyle from "../Styles/Home.module.css";
import { useState } from "react";
const Home = () => {
  const [cart, setCart] = useState([]);
  
  const [actLista,setActivades] = useState([])
  console.log(actLista);
  return (
    <div className={HomeStyle.homeContainer}>
      <h1>Lista de pizzas</h1>
      <div className="list-container">
        {pizzas.map((pizza) => {
          return <Card key={pizza.id} recipe={pizza} cart={cart}  setCart={setCart}/>;
        })}
      </div>
      <Actividades actividades={actividades} actLista={actLista} setActivades={setActivades}></Actividades>
    </div>
  );
};

export default Home;
