
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
         ganador: "",
         dia: "",
         turno: ""

        }
   
   }

   componentDidMount(){
    
    this.setState({
      deporte:this.props.datosJuegos.deporte,
      hora: this.props.datosJuegos.hora,
      lugar: this.props.datosJuegos.lugar,
      ganador: this.props.datosJuegos.ganador,
      id_juegos:this.props.datosJuegos.id_juegos,
      dia: this.props.datosJuegos.dia,
      turno: this.props.datosJuegos.turno
      
    })
   
  }

   ActualizarJuego() {
    
    // Aquí asumimos que tienes el ID del juego que deseas actualizar, 
    // reemplaza 'ID_DEL_JUEGO' con el valor real del ID.
    const config = {
      params:{id_juegos: this.state.id_juegos}
    }

    
    const url = `http://localhost:3203/api/juegos/`;
    //${idJuego}`;
    
    const datosActualizados = {
      id_tipo:this.state.deporte,
      hora: this.state.hora,
      lugar: this.state.lugar,
      ganador: this.state.ganador,
      id_juegos:this.state.id_juegos,
      dia: this.state.dia,
      turno: this.state.turno
    } 

    axios.put(url, datosActualizados, config)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      }); 

      this.props.MostrarFormulario()
      this.props.mostrarDatos()
  }
        

  render() {
    return(
    <div>
        <div className="form-group">
          <label htmlFor="deporte">deporte</label>
          <input className="form-control" type="number" name="deporte" id="deporte" onChange={(e) => this.setState({deporte:e.target.value})} value={this.state.deporte}/>
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

        <button className="btn btn-danger" onClick={()=>this.ActualizarJuego()}>guardar</button>
        <button className="btn btn-secundary" onClick={()=>this.props.MostrarFormulario(null)}>cancelar</button>
    
    </div>
    )
  }
}


