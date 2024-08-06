// variables y funciones

// tenemos diferentes formas de declarar variables

// var es de las primeras formas que existian pero ya no es muy recomendable usarla
// debido al scope que tiene la misma que es global

// ahora se usa el metodo let en donde se restringue el scope

// formas de declarar funciones

// function myFunc(){
//     let x = 10;
//     console.log(x);
// }

// myFunc();

// pero tambien tengo otras formas de declarqar funciones
// Se pueden declarar las funciones como arrowFunctions

// const dividir = (x)=>{
//     console.log(x/2);
// }

// dividir(2);
// metodos de array

let prendas = ["Camisa", "pantalon", "bermuda"];
let accesorios = ["gafas", "manillas", "zapatos"];
// si quiero sacar el ultimo index del array usamos el metodo pop
prendas.pop();
prendas.push("Sueteres");

// console.log(prendas);

// ahora para sacar algo al inicio del array
accesorios.shift();
// y ahora para meter algo al inicio se usa otro metodo
accesorios.unshift("Anillos");
// console.log(accesorios);

// si queiro concatenar de manera correcata dos arrays tengo que usar un metodo especial

// let emprendimientos = accesorios + prendas
// console.log(emprendimientos)

// me va a quedar algo asi Anillos,manillas,zapatosCamisa,pantalon,Sueteres. de este modo
// tengo que usar un metodo de spread operator para que expandir uno de los arrays

let emprendimientos = [...accesorios, ...prendas];

// lo que hace este operador es abrir los objetos y los arrays y botar el envoltorio en el que vienen
// console.log(emprendimientos);

let estudiante = {
  nombre: "Alvaro",
  edad: 13,
};

let usuario = {
  ...estudiante,
  email: "Frank@email.com",
  materias: ["es", "en"],
};
// console.log(usuario);

// operador ternario
let x = true;
let color;

if (x) {
  color = "blue";
} else {
  color = "red";
}

// es mas complejo hacerlo asi, entonces se hace con el operador ternario

let backgroundColor = x ? "blue" : "red";

// desestructuracion

// const ropa1 = prendas[0]
// const ropa2 = prendas[1]
// const ropa3 = prendas[2]

// puedo hacer esto en una sola linea de codigo
const [ropa1, ropa2, ropa3, ropa4 = "sabanas"] = prendas;
console.log(ropa1, ropa2, ropa3, ropa4);

// puedo hacer lo mismo con objetos peeero tengo que tener en cuenta el nombre de las llaves
// en array importa siempre el orden y en los objetos importa es el nombre de la llave


const { nombre, edad, email } = usuario;
console.log(nombre, edad, email);
