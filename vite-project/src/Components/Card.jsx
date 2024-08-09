import Button from "./Button";
import CardStyles from "../Styles/Card.module.css";

const Card = ({recipe}) => {
  // puedo hacer una desestructuracion de los props para poder manejar las variables que trae este objeto de manera individual

// peudo desestructurar desde los mismos parametros de la funcion del componente
  return (
    <div className={CardStyles.cardContainer}>
      <img src={recipe.img} alt="pizzaFoto" className={CardStyles.cardImg} />
      <h3>{recipe.tipo}</h3>
      <p>{recipe.precio}</p>
      <Button>Ver detalle</Button>
    </div>
  );
};

export default Card;
