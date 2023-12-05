import React from "react";
import "bootstrap";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css"></link>
import "./Inicio.css";

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
                  <div className="col-12 ">
                     <p className="fs-2 text-light mt-5">
                        INTERTECNOS
                     </p>
                     <p className="fs-4 text-light mt-5"> <em>
                        Las intertecnos o intercolegiales son eventos organizado 
                        por el colegio, en los que los estudiantes compiten en diversas disciplinas como deportes, 
                        música, arte, matemáticas, bailes entre otros. Estas competencias fomentan el compañerismo, el espíritu deportivo y el intercambio de conocimientos entre los participantes. También son una oportunidad para mostrar talento y habilidades en diferentes áreas. 
                        </em></p>
                     <div className="mt-20">
                        <button className="boton btn btn-warning text-dark">
                           <a class = "nav-link text-light" href="/consultarColor"> Consultar Color </a></button>

                     </div>
               </div>
            </div>
               <div className="contacto">
            
                  </div>
            </div>
                  <footer>
                  <div className="container-fluid p-5 ">
                     <div className="row" >
                        <div className="col"> <a href="https://instagram.com/intertecnos_2023?igshid=YzAwZjE1ZTI0Zg==" class="text-decoration-none text-seccess"> Instragram</a></div>


                  </div>
                     </div>
                  </footer>

            </div>
         
      );}

}