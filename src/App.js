import React from "react";
import "./styles.css";

import ConsultarColor from "./api/componentes/consultarColor/ConsultarColor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./api/componentes/inicio/Inicio";
import ResultadoColor from "./api/componentes/resultadoColor/resultadoColor";
import Admin from "./api/componentes/admin/admin";
import Info from "./api/componentes/info/info";
import Juegos from "./api/componentes/Juegos/Juegos";


  export default function App() {
  return (
    
    <div className="App">
      <div>
                    <ul className="nav mt-4 rounded-2 text-left nav nav-tabs"> 
                        <li className="nav-item ">
                            <a className="nav-link active text-black " aria-current="page" href="/">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/Juegos">Juegos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/Info">Informacion</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/resultadoColor"> Resultados Actuales</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-right" href="/Admin">Login</a>
                        </li>
                    </ul>

      <BrowserRouter>
        <Routes>
          <Route path="/ConsultarColor" element={<ConsultarColor/>}/>
          <Route path="/ResultadoColor" element={<ResultadoColor/>}/>
          <Route path="/Admin" element={<Admin/>}/>
          <Route path="/Info" element={<Info/>}/>
          <Route path="/Juegos" element={<Juegos/>}/>
          <Route path="/" element={<Inicio/>}/>
          <Route path="*" element={<Inicio/>}/>
        </Routes>
      </BrowserRouter>

      </div>
    </div>

   );
}
