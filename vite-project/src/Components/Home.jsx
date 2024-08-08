import {pizzas} from "../Utils/pizzas"
import Card from "./Card";

const Home = () => {
  return (
    <div>
      <h1>Lista de pizzas</h1>
      <div className="list-container">
        {pizzas.map((pizza) => {
          return (
            <Card key= {pizza.id} recipe={pizza}/>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
