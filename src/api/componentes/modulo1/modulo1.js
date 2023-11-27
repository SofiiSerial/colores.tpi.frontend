import React from "react";
import "./modulo1.js";
export default class Modulo1 extends React.Component{
     constructor(props){
        super(props); 
        this.state = {}
    }

    render(){
        return(
         <div className="conteiner">
           <img src="../imagenes/fondo.png" class="img-fluid" alt=""></img>
            <div className="fs-2 text-light mt-5">Consultá tu color</div>
            <div className="fs-4 text-light mt-5"> Ingrese sus datos en este formulario para que podamos verificar su identidad y su color correspondiente. </div>
            <button className="boton btn btn-warning mt-5">Continuar </button>
            
           <div className="contacto">
           
           </div>
         </div>
         
 
       );}
 
 }