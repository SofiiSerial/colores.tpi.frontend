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
            <p className="fs-2  text-info text-light"> Admin </p>
            <p className="fs-3 text-info text-light "> Ingrese sus datos en el formulario para que podamos verificar su identidad </p>
            <div className="mt-20">
               <button className="boton btn btn-warning"> Continuar</button>
            </div>
            
           
           <div className="contacto">
           
           </div>
         </div>
         
 
       );}
 
 }