import { useEffect, useState } from "react";
import React from "react";

const LifeCycles = () => {
  console.log("parte funcional");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  // fase de montaje
  useEffect(() => {
    setTimeout(() => {
      console.log("hola");
      setLoading(false);
    }, 2000);
    // ojo que si no le ponemos dependencias solo se ejecuta una vez
  }, []);

  //fase actualizacion
  useEffect(() => {
    if (!loading) {
      setUser({
        name: "Frank",
        age: 12,
      });
    }
  }, [loading]);

  //fase de desmontaje. hacemos una limpieza de componentes
  useEffect(() => {
    return ()=>{
        console.log("Fase de desmontar")
    }
  },[]);
  return (
    <div>
      {console.log("parte render")}
      {loading ? "Cargando..." : <h2>Hola, bienvenido. {user.name}</h2>}
    </div>
  );
};

export default LifeCycles;
