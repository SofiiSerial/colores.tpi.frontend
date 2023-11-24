import React from "react";
import "./modulo1.js";
export default class Modulo1 extends React.Component{
     constructor(props){
        super(props); 
        this.state = {}
    }

    render(){
        return(
         <div className="offset-1 col-lg-6 col-s-8 h-100">
          
            <h1> consultá tu color </h1>
            <h2> Ingrese sus datos en este formulario para q podamos verificar su identidad y su color correspondiente. </h2>
            <div className="mt-20">
               <button className="boton btn btn-warning">Continuar </button>
            </div>
            
           
           <div className="contacto">
           
           </div>
         </div>
         
 
       );}
 
 }