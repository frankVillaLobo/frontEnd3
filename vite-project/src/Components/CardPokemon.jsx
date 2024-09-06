import Button from "./Button";
import CardStyles from "../Styles/Card.module.css";
import Counter from "./Counter";
import { useState } from "react";

const Card = ({pokemon}) => {
  // puedo hacer una desestructuracion de los props para poder manejar las variables que trae este objeto de manera individual

// peudo desestructurar desde los mismos parametros de la funcion del componente
  return (
    <div className={CardStyles.cardContainer}>
      <img src={pokemon.img} alt="pokemon" className={CardStyles.cardImg} />
      <h3>{pokemon.name}</h3>
      <p>{pokemon.id}</p>
    </div>
  );
};

export default Card;
