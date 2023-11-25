import React from "react";
import "./modulo3.js";
export default class Modulo3 extends React.Component{
     constructor(props){
        super(props); 
        this.state = {}
    }

    render(){
        return(
         <div className="">
          
            <p> Admin </p>
            <h1> Ingrese sus datos en el formulario para que podamos verificar su identidad </h1>
            <div className="mt-20">
               <button className="boton btn btn-warning"> Continuar</button>
            </div>
            
           
           <div className="contacto">
           
           </div>
         </div>
         
 
       );}
 
 }