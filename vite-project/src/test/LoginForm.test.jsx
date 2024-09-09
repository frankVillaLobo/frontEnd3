// usamos decribe, con dos elementos, uno de descripcion y otro con un call back funtion que nos va a permitr poner neustras pruebas

import { describe, test, expect } from "vitest";
import { LoginForm } from "../Components/LoginForm";
import { fireEvent, render, screen } from "@testing-library/react";
describe("Testing del LoginForm Component", () => {
  // vamos a hacer 4 test
  test("Should render title", () => {
    // este render es exclusivo del entorno de test
    render(<LoginForm></LoginForm>);
    // para lo que sea asinconico usamos los metodos find el screen y para lo que se instantaneo usamos el get
    const title = screen.getByText(/debe ingresar/i); // para no compare mayusculas
    expect(title).toBeDefined();
  });

  test("Shoul render first input", () => {
    render(<LoginForm></LoginForm>);
    const email = screen.getByRole("email");
    expect(email).toBeDefined();
  });

  test("Shoul change second input", () => {
    render(<LoginForm></LoginForm>);
    const pass = screen.getByTestId("password");
    // podemos ver como se modifica un elemento simulando un evento
    fireEvent.change(pass, { target: { value: "Contrasena" } });
    expect(pass.value).toBe("Contrasena");
  });
  // para el tema de funciones que le pasamos a elementos tengo que mandarle una funcion que me oferece vitest, que simula que le estoy enciendo una arrow functiin

  test("Should call function", () => {
    // definimos la funcion
    const handleClick = vi.fn();
    render(<LoginForm handleClick={handleClick}></LoginForm>);
    const button = screen.getByText("Enviar");
    fireEvent.click(button);
    expect(handleClick).toBeCalledTimes(1);
  });
});
