
import React from "react";
import axios from "axios";
import "bootstrap";
import "reactstrap";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

export default class FormularioModifJuego extends React.Component{
    constructor(props){
       super(props); 
       this.state = {
         id_juegos: "",
         deporte: "",
         hora: "",
         lugar: "",
         ganador: ""

        }
   
   }
   ActualizarJuego(e) {
    e.preventDefault();

   modalInsertar=()=>{
    this.setState({modalInsertar: !this.state.modalInsertar});
    }
    

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
    <div>
        <div className="form-group">
          <label htmlFor="deporte">deporte</label>
          <input className="form-control" type="text" name="deporte" id="deporte" onChange={(e) => this.setState({deporte:e.target.value})} value={this.state.deporte}/>
          <br />
          <label htmlFor="lugar">lugar</label>
          <input className="form-control" type="text" name="lugar" id="lugar" onChange={(e) => this.setState({lugar:e.target.value})} value={this.state.lugar}/>
          <br />
          <label htmlFor="hora">hora</label>
          <input className="form-control" type="text" name="hora" id="hora" onChange={(e) => this.setState({hora:e.target.value})} value={this.state.hora}/>
          <br />
          <label htmlFor="ganador">ganador</label>
          <input className="form-control" type="text" name="ganador" id="ganador" onChange={(e) => this.setState({ganador:e.target.value})} value={this.state.ganador}/>
        </div>

        <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>guardar</button>
        <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>cancelar</button>
    
    </div>
    )
  }
}


