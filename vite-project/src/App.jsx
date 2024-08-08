import { useState } from "react";
import "./App.css";
import Componente from "./Components/Componente";
import Navbar from "./Components/Navbar";
import CompDePrueba from "./Components/CompDePrueba";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);
  const variable = 3;
  const nombre = "Andres";
  return (
    <>
      <Navbar />
      <h1>Bienvenidos a Vite</h1>
      <Componente variable={variable} />
      {/* tengo dos formas de tener un componente asi, doble o simple */}
      <Componente variable={variable}></Componente>
      {/* <Card nombre="Pedro" email="pedro@email.com"/>
      <Card nombre="Mateo" email="mateo@email.com"/>
      <Card nombre="Claudia" email="Claudia@email.com"/> */}

      <CompDePrueba nombre={nombre}>Hola</CompDePrueba>
    </>
  );
}

export default App;
