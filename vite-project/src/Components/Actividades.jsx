import React from "react";

const Actividades = (props) => {
  return (
    <div>
      <div>
        <h2>Lista de pendientes</h2>
        <ul>
          {props.actividades.map((tarea, index) => {
            return <li  onClick={()=>{props.setActivades([...props.actLista,tarea])}} key={index} id={index}>{tarea}</li>;
          })}
        </ul>
      </div>
      <div>
        <h2>Lista de actividades hechas</h2>
        <ul>
          {props.actLista.map((tarea, index) => {
            return <li key={index} id={index}>{tarea}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Actividades;
