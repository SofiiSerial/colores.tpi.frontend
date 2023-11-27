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
            <div className="inicio">
            <div className=" container mt-5">
               <div classs="row">
                  <div class="col-12 bg-primary">
                     <p className="fs-2 text-light mt-5">
                        INTERTECNOS
                     </p>
                     <p className="fs-4 text-light mt-5">
                        Las intertecnos o intercolegiales son eventos organizado 
                        por el colegio, en los que los estudiantes compiten en diversas disciplinas como deportes, 
                        música, arte, matemáticas, bailes entre otros. Estas competencias fomentan el compañerismo, el espíritu deportivo y el intercambio de conocimientos entre los participantes. También son una oportunidad para mostrar talento y habilidades en diferentes áreas. 
                     </p>
                     <div className="mt-20">
                        <button className="boton btn btn-warning">Consultar Color </button>
                     </div>
                  </div>
               </div>
               <div className="contacto">
            
               </div>
            </div>
            </div>

      );}

}