import "./styles.css";
import Modulo1 from "./api/componentes/modulo1/modulo1";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// importamos componente inicio
import Inicio from "./api/componentes/inicio/Inicio"

export default function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="*" element={<Inicio/>}/>
          <Route path="modulo1" element={<Modulo1/>}/>
        </Routes>
      
      </BrowserRouter>


    </div>
  );
}
