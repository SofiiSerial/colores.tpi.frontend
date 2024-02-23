
import React from "react";
import axios from "axios";
import "bootstrap";
import "reactstrap";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

//Estás inicializando el estado del componente FormularioModifJuego con 7 propiedades: 
export default class FormularioNuevoUsuario extends React.Component{
    constructor(props){
       super(props); 
       this.state = {
        dni: "",
        nombre: "",
        apellido: "",
        usuario: "",
        id_color: "",
        rol: ""
        
      }
   
   }

   componentDidMount(){
    console.log("formulario para crear usuario");
     // this.setState:
     // Se refiere al método setState del componente, que se utiliza para actualizar el estado del
     // componente y, posteriormente, volver a renderizar el componente con los nuevos datos.
    
   
  }
  //FUNCION
   CrearUsuario() {
    
    //Se define la URL de la API web 
    const url = "http://localhost:3203/api/usuarios";
    
    //Se crea un objeto llamado datosActualizados que contiene los campos que se van a
    // actualizar en el juego. Estos campos se obtienen del estado del componente, como this.state.deporte, 
    //this.state.hora, etc.
    const nuevoUsuario = {
      dni:this.state.dni,
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      usuario: this.state.usuario,
      id_color:this.state.id_color,
      rol: this.state.rol
    } 

    console.log(nuevoUsuario);


    //Se utiliza la función axios.put() para realizar una solicitud HTTP tipo PUT a la URL de la API con los 
    //datos actualizados y la configuración definida anteriormente.
    axios.post(url, nuevoUsuario)
      .then((resp) => {
        console.log(resp.data);
        //uando se completa la solicitud, se maneja la respuesta exitosa en la función `.then()`,
        // donde se imprime en la consola la respuesta del servidor.
      })
      .catch((error) => {
        console.log(error);
      }); 

     
  }
        

  render() {
    return(

      //Hay cuatro campos en el formulario, cada uno representado por un conjunto de etiquetas <label> e <input>
    <div>
        <div className="form-group col-4 text-light mt-4">

          <label htmlFor="dni">dni</label>
          <input className="form-control " type="number" name="dni" id="dni" onChange={(e) => this.setState({dni:e.target.value})} value={this.state.dni}/>

          <br />

          <label htmlFor="nombre">nombre</label>
          <input className="form-control" type="text" name="nombre" id="nombre" onChange={(e) => this.setState({nombre:e.target.value})} value={this.state.nombre}/>

          <br />

          <label htmlFor="apellido">apellido</label>
          <input className="form-control" type="text" name="apellido" id="apellido" onChange={(e) => this.setState({apellido:e.target.value})} value={this.state.apellido}/>

          <br />

          <label htmlFor="usuario">usuario</label>
          <input className="form-control" type="text" name="usuario" id="usuario" onChange={(e) => this.setState({usuario:e.target.value})} value={this.state.usuario}/>
          
          <br />

          <label htmlFor="id_color">id_color</label>
          <input className="form-control " type="number" name="id_color" id="id_color" onChange={(e) => this.setState({id_color:e.target.value})} value={this.state.id_color}/>
          
          <br />

          <label htmlFor="rol">rol</label>
          <input className="form-control " type="text" name="rol" id="rol" onChange={(e) => this.setState({rol:e.target.value})} value={this.state.rol}/>
        
          <br />

        </div>

        <button className="btn btn-secondary mt-4 me-md-2" onClick={()=>this.CrearUsuario()}>guardar</button>
       
    
    </div>
    //Se vincula al estado deporte utilizando el evento onChange, actualizando el estado con el valor del campo cada vez que cambia.
    //El valor del campo se establece según el estado actual (value={this.state.deporte}), asegurando que el campo refleje el estado actual.
    )
  }
}


