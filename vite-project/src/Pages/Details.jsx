import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  // variable que almacena datos de la pagina
  const params = useParams();
  // agregamos un estado para una variable que me deje guardar todo lo que trae la res
  const [pokemonAbilities, setAvilities] = useState([]);
  const [pokemon, setPokemon] = useState({});
  const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
  useEffect(() => {
    axios(url).then((res) => {
      setPokemon(res.data);
      console.log(res.data);
      setAvilities(res.data.abilities)
    });
  }, []);
  console.log(pokemonAbilities);
  

  return (
    <div>
      <h1>Nombre: {pokemon.name}</h1>
      <img
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
          pokemon.id +
          ".png"
        }
        alt={pokemon.name}
      />
      <ul>
        {pokemonAbilities.map((ability) => {
          return(<li>{ability.ability.name}</li>)
        })}
      </ul>
    </div>
  );
};

export default Details;
