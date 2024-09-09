import React from "react";

export const LoginForm = ({handleClick}) => {
  return (
    <div>
      <h1>Debe ingresar</h1>
      <input role="email" type="text" />
      <input data-testid="password" type="text" />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};
