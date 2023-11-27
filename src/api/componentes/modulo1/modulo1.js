import React from "react";
import "./modulo1.css";
import axios from "axios";

export default class Modulo1 extends React.Component{
      constructor(props){
        super(props); 
        this.state = {}
    

        this.enviar = event => {
          this.state.dni = document.getElementById('dni').value;
          let cadena="http://localhost:3203/api/usuarios/buscar?dni=" + this.state.dni
          alert(cadena);
          axios.get(
            cadena
          )
          .then(function (response) {
            alert(response);
          });
        }
      } 

    render(){
        return(
          <div className="consultarColor">
         <div className="conteiner">
            <div className="fs-2 text-light mt-5">Consultá tu color</div>
            <div className="fs-4 text-light mt-5"> Ingrese sus datos en este formulario para que podamos verificar su identidad y su color correspondiente. </div>
            <form> 
              <label> 
                DNI
              </label>
              <div> 
                <input className= "col-3 mx-auto text-negro bg-opacity bg-light" id="dni" />
              </div>
              <button className="boton btn btn-warning mt-5" onClick={this.enviar}> Continuar </button>
           </form>
           <div className="contacto">
           
           </div>
         </div>
         </div>  
 
       );}
 
 }