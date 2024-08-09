import {pizzas} from "../Utils/pizzas"
import Card from "./Card";
import HomeStyle from "../Styles/Home.module.css"
const Home = () => {
  // const [cart,setCart] = useState([])
  return (
    <div className={HomeStyle.homeContainer}>
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
