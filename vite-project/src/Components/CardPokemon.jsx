import Button from "./Button";
import CardStyles from "../Styles/Card.module.css";
import { Link } from "react-router-dom";
const Card = ({pokemon}) => {
  // puedo hacer una desestructuracion de los props para poder manejar las variables que trae este objeto de manera individual

// peudo desestructurar desde los mismos parametros de la funcion del componente
  return (
    <div className={CardStyles.cardContainer}>
      <img src={pokemon.img} alt="pokemon" className={CardStyles.cardImg} />
      <h3>Nombre: {pokemon.name}</h3>
      <p>Id: {pokemon.id}</p>
      <Button>
        <Link to={"/details/" + pokemon.id}>Ver detalle</Link>
      </Button>
    </div>
  );
};

export default Card;
