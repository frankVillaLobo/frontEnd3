import { useState } from "react";
import "./App.css";
import Componente from "./Components/Componente";
import Navbar from "./Components/Navbar";
import CompDePrueba from "./Components/CompDePrueba";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);
  const variable = 3;
  return (
    <>
      <Navbar />
      <h1>Bienvenidos a Vite</h1>
      <Componente variable={variable} />
      {/* tengo dos formas de tener un componente asi, doble o simple */}
      <Componente variable={variable}></Componente>
      <CompDePrueba/>
      <Card/>
    </>
  );
}

export default App;
