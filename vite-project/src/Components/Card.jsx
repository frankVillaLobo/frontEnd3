import Button from "./Button";

const Card = (props) => {
  // puedo hacer una desestructuracion de los props para poder manejar las variables que trae este objeto de manera individual
const{nombre,email} = props
// peudo desestructurar desde los mismos parametros de la funcion del componente
  return (
    <div>
      <img
        src="https://http2.mlstatic.com/D_NQ_NP_794927-MLA47542196691_092021-O.webp"
        alt="imagen"
      />
      <h2>Nombre</h2>
      <p>Estado civil</p>
      <p>{nombre}</p>
      <p>{email}</p>
        {/* podemos mandar informacion de diferentes maneras */}
      <Button>Enviar info</Button>
      <Button>Hola mundo</Button>

    </div>
  );
};

export default Card;
