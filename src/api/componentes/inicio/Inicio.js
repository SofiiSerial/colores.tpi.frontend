import React from "react";
import "./Inicio.css";
import "bootstrap";

export default class Inicio extends React.Component{
     constructor(props){
        super(props); 
        this.state = {};
    }


     render(){
       return(
        <div className="offset-1 col-lg-6 col-s-8 h-100">
         
           <h1> INTERTECNOS </h1>
           <h2> Las intertecnos o intercolegiales son eventos organizado por el colegio, en los que los estudiantes compiten en diversas disciplinas como deportes, música, arte, matemáticas, bailes entre otros. Estas competencias fomentan el compañerismo, el espíritu deportivo y el intercambio de conocimientos entre los participantes. También son una oportunidad para mostrar talento y habilidades en diferentes áreas. </h2>
           <div className="mt-20">
              <button className="boton btn btn-warning">Consultar Color </button>
           </div>
           
          
          <div className="contacto">
          
          </div>
        </div>
        

      );}

}