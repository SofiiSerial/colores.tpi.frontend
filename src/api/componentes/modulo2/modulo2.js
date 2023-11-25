import React from "react";
import "./modulo2.js";
import "./modulo2.css";
export default class Modulo2 extends React.Component{
     constructor(props){
        super(props); 
        this.state = {}
    }

    render(){
        return(
            <div className="container m-10">
                <ul class="nav justify-content-end mt-3 rounded-2">
                    <li class="nav-item">
                        <a class="nav-link active text-light" aria-current="page" href="#">Capitanes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">Juegos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">Reglas</a>
                    </li>
                </ul>

                <p className="fs-3 text-light mt-5 col-md-4"> Tu color es: </p>
                <p class="text-light border border-warning bg-opacity-10 p-3 mt-5 bg-warning  col-md-9 rounded-3">Amarillo</p>
                <p className="fs-4 text-info text-light mt-5 col-md-9"> Una vez asignado su color tendrá que venir con la vestimenta (remera, pantalon) adecuados a el color, <br/>
                 despues tendra que ir a su tribuna que será acompañado en el momentos por su capitan. </p>     
            </div>
       );}
 
 }