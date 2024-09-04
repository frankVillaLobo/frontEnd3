import React, { useEffect, useState } from "react";

const DogFetch = () => {
  const url = "https://dog.ceo/api/breeds/image/random";
  const [dog, setDog] = useState({});
  const [search, setSearch] = useState(false);
  // esto me da una promesa
  // si lo dejamos asi, cada vez que tengo un cambio en el state renderiza nuevamente el componente y hace que se haga de nuevo el fetch
  // entonces se me va a hacer un loop infito de cargar nuevamente el componente
  // es por esto qeu lo dejamos en un useEffect para que se cargue solo una vez
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      }) // Convertir la respuesta en JSON
      .then((data) => {
        setDog(data);
      });
  }, [search]);

  return (
    <div>
      <img src={dog.message} alt="img-perro" />
      <button onClick={()=>{setSearch(!search)}}>Cargar Otra imagen</button>
    </div>
  );
};

export default DogFetch;
