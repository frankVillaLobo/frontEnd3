import { pizzas } from "../Utils/pizzas";


import Card from "../Components/Card";
import CardPokemon from "../Components/CardPokemon";

import Actividades from "../Components/Actividades";

import HomeStyle from "../Styles/Home.module.css";
import { useEffect, useState } from "react";
const Home = () => {
  const [cart, setCart] = useState([]);
  const [listObjects, setListObjects] = useState([]);

  // const [actLista,setActivades] = useState([])

  const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";

  useEffect(() => {
    const getAllPokemon = async () => {
      let res = await fetch(url);
      let data = await res.json();
      let urlList = [];
      data.results.map((result) => {
        urlList.push(result.url);
      });
      console.log(urlList);
      const pokemonDataPromises = urlList.map((url) =>
        fetch(url).then((res) => res.json())
      );
      const pokemonData = await Promise.all(pokemonDataPromises);

      // set url of images
      const listObjects = pokemonData.map((item) => {
        return {
          img:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
            item.id +
            ".png",
          name: item.name,
          id: item.id,
        };
      });
      setListObjects(listObjects)
    };
    // get the list of objets based on the url obtained

    getAllPokemon();
  }, []);
  return (
    <div className={HomeStyle.homeContainer}>
      <h1>Lista de pizzas</h1>
      <div className="list-container">
        {pizzas.map((pizza) => {
          return (
            <Card key={pizza.id} recipe={pizza} cart={cart} setCart={setCart} />
          );
        })}
      </div>
      <h1>Lista de pokemon</h1>
      <div className="list-container">
        {listObjects.map((pokemon) => {
          return <CardPokemon key={pokemon.id} pokemon={pokemon} />;
        })}
      </div>
    </div>
  );
};

export default Home;
