
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
    const config = {
      params:{id_juegos: this.state.id_juegos}
    }
    //Se define la URL de la API web 
    const url = `http://localhost:3203/api/juegos/`;
    
    //Se crea un objeto llamado datosActualizados que contiene los campos que se van a
    // actualizar en el juego. Estos campos se obtienen del estado del componente, como this.state.deporte, 
    //this.state.hora, etc.
    const datosActualizados = {
      id_tipo:this.state.deporte,
      hora: this.state.hora,
      lugar: this.state.lugar,
      ganador: this.state.ganador,
      id_juegos:this.state.id_juegos,
      dia: this.state.dia,
      turno: this.state.turno
    } 


    //Se utiliza la función axios.put() para realizar una solicitud HTTP tipo PUT a la URL de la API con los 
    //datos actualizados y la configuración definida anteriormente.
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

      //Hay cuatro campos en el formulario, cada uno representado por un conjunto de etiquetas <label> e <input>
    <div>
        <div className="form-group col-4 text-light mt-4">
          <label htmlFor="deporte">deporte</label>
          <input className="form-control " type="number" name="deporte" id="deporte" onChange={(e) => this.setState({deporte:e.target.value})} value={this.state.deporte}/>
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

        <button className="btn btn-secondary mt-4 me-md-2" onClick={()=>this.ActualizarJuego()}>guardar</button>
        <button className="btn btn-secondary mt-4 me-md-2" onClick={()=>this.props.MostrarFormulario(null)}>cancelar</button>
    
    </div>
    //Se vincula al estado deporte utilizando el evento onChange, actualizando el estado con el valor del campo cada vez que cambia.
    //El valor del campo se establece según el estado actual (value={this.state.deporte}), asegurando que el campo refleje el estado actual.
    )
  }
}


