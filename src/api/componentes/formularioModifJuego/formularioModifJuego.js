
import React from "react";
import axios from "axios";
import "bootstrap";

export default class admin extends React.Component{
    constructor(props){
       super(props); 
       this.state = {
         id_juegos,
         hora,
         lugar,
         ganador

        }
   
   }
   ActualizarJuego(e) {
    e.preventDefault();
    
    // Aquí asumimos que tienes el ID del juego que deseas actualizar, 
    // reemplaza 'ID_DEL_JUEGO' con el valor real del ID.
    const idJuego = id_juegos;
    
    const url = `http://localhost:3203/api/juegos/`;
    //${idJuego}`;
    
    const datosActualizados = 
        this.props.id_juegos
    

    axios.put(url, datosActualizados)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return(
        <div><button className="boton btn btn-warning" onClick={(e) => this.enviar(e)}> actualizar </button></div>
    )
  }
}
