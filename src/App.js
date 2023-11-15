import "./styles.css";

// importamos componente inicio
import Inicio from "./api/componentes/inicio/Inicio"

export default function App() {
  return (
    <div className="App">
      {/* //llamamos el componente inicio dentro del ap  */}
      <Inicio /> 
      <h1>Hello CodeSandbox</h1>
    </div>
  );
}
