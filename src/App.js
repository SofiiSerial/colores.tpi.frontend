import "./styles.css";
import ConsultarColor from "./api/componentes/consultarColor/ConsultarColor";
import { BrowserRouter, Routes, Route } from "react-router-dom";



// importamos componente inicio
import Inicio from "./api/componentes/inicio/Inicio";
import ResultadoColor from "./api/componentes/resultadoColor/resultadoColor";
import Admin from "./api/componentes/admin/admin";
import Info from "./api/componentes/info/info";
import Juegos from "./api/componentes/Juegos/Juegos";


export default function App() {
  return (



    <div className="App">

      <div>
                    <ul class="nav justify-content-end mt-4 rounded-2">
                        <li class="nav-item">
                            <a class="nav-link active text-light" aria-current="page" href="/">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="/Juegos">Juegos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="/Info">Informacion</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="/Admin">Admin</a>
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
