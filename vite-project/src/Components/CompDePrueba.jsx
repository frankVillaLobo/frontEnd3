// tengo varias formas de exportar un componente
// lo recomendado es mandar un componeten por archivo
const CompDePrueba = (props) => {
    const {nombre} = props
  return <p>{props.children}, {nombre} </p>;
};

export default CompDePrueba;

