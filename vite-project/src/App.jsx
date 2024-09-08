import { useState } from "react";
import "./Styles/App.css";
import { Route, Router, Routes } from "react-router-dom";
import {routes} from "./Utils/routes.js"


import Navbar from "./Pages/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import Contacto from "./Pages/Contacto.jsx";
import Details from "./Pages/Details.jsx";


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.contact} element={<Contacto />} />
        <Route path={routes.shop} element={<h1>SHOP</h1>} />
        <Route path="/details/:id" element= {<Details/>}/>
        <Route path={routes.notFound} element={<h1>Pagina no encontrada</h1>} />
      </Routes>
    </>
  );
}

export default App;
