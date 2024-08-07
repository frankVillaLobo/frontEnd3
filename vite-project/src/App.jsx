import { useState } from "react";
import "./Styles/App.css";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";



function App() {
  // creamos una lista para le manejo de map
  const lista = ["Elemento 1", "Elemento 2", "Elemento 3"];
  // los elementos de map son lo que se itera, index y la lista (no se usa tanto)
  const mapLista = lista.map((elemento, index) => {
    //siempre tengo que retornar en el call back de map
    // crea un clon de la lista original
    return <li key={index}>{elemento}</li>;
    // siempre nos pide que el return se haga con un key unico, para evitar problemas de renderizado
    // ya que el dom virutal actualiza los componentes de manera individual sin tener que actualziar tooodo el dom
  });

  return (
    <>
      <Navbar/>
      <Home></Home>
    </>
  );
}

export default App;
