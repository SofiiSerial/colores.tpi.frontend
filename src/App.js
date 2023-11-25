import "./styles.css";
import Modulo1 from "./api/componentes/modulo1/modulo1";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// importamos componente inicio
import Inicio from "./api/componentes/inicio/Inicio";
import Modulo2 from "./api/componentes/modulo2/modulo2";
import Modulo3 from "./api/componentes/modulo3/modulo3";
import Modulo4 from "./api/componentes/modulo4/modulo4";


export default function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="*" element={<Inicio/>}/>
          <Route path="modulo1" element={<Modulo1/>}/>
          <Route path="modulo2" element={<Modulo2/>}/>
          <Route path="modulo3" element={<Modulo3/>}/>
          <Route path="modulo4" element={<Modulo4/>}/>

        </Routes>

      </BrowserRouter>


    </div>
  );
}
