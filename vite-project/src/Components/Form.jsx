import { useState } from "react";

const Form = () => {
  //   const [name, setName] = useState("");
  //   const [direction, setDirection] = useState("");
  //    no esuna buena opractica que cada input tengo una use state es mejor manejar todo con un objeto
  const [customer, setCustomer] = useState({
    name: "",
    address: "",
  });
  console.log(customer);
  
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const handleChangeName = (event) => {
    // capturo el evento
    setCustomer({ ...customer, name: event.target.value });
  };
  const handleChangeDirection = (event) => {
    setCustomer({...customer, address: event.target.value });
  };

  const reset = () => {
    setCustomer({ name: "", address: "" });
  };
  // es bueno ponerle a los input un value igual a la variable para cuando limpiemos el form no quede nada ahi

  const handleSubmmit = (event) => {
    // para validar que la direction se usa un regex
    const numRegex = /[0-9]/;
    event.preventDefault();
    console.log(customer.name)
    console.log(customer.address)

    if (
      customer.name.trim().length > 3 &&
      customer.address.trim().includes(" ")
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <div>
      {show ? (
        <>
          <h4>Muchas gracias, {customer.name}</h4>
          <h4>Direccion: {customer.address}</h4>
        </>
      ) : (
        <>
          <form onSubmit={handleSubmmit}>
            <label>Nombre:</label>
            <input
              type="text"
              value={customer.name}
              onChange={handleChangeName}
            />
            <label>Direccion:</label>
            <input
              type="text"
              value={customer.address}
              onChange={handleChangeDirection}
            />
            <button>Enviar</button>
          </form>
          <button onClick={reset}>Reset Form</button>
        </>
      )}

      {error ? (
        <>
          <h4 style={{ color: "red" }}>Verifica la informacion</h4>
        </>
      ) : null}
    </div>
  );
};

export default Form;
