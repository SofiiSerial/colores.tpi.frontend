import React from "react";
import "./info.css";
export default class Info extends React.Component{
     constructor(props){
        super(props); 
        this.state = {}
    }
    
    render(){
      return(
         <div className="info">
            <div className="container mt-3">
                  <div classs="row">
                  <div class="col-12">
                  <p className="fs-2 text-light mt-5 border"> <strong> Datos que necesitas saber de las intertecno...</strong> </p>
                  </div>
                     <div class="container mt-4">
                           <div class="row">
                              <div class="col-sm text-light card text-bg-dark mb-3">
                        <p class="nav-link active text-light" aria-current="page" href="#">Lugar correspondiente</p>
                           En el sum de la escuela 1ro y 2do AÑO en su respectivos turnos. 
                           En el Gimnasio ¨Ana Giro¨3ro y 4to AÑO en su respectivo turno.
                           5to - 6to y 7mo en el zum del colegio en el horario del turno vespertino.
                              </div>
                     <div class="col-sm text-light card bg-dark mb-3">
                        <p class="nav-link text-light" href="#">Horarios</p>
                           Turno Mañana:
                           de 8:30 a 12:00hs.
                           Turno Tarde
                           de 13:50 a 17:00hs.
                           Turno Vespertino
                           de 18:20 a 21:30 
                     </div>
                        <div class="col-sm text-light">
                           <p class="nav-link text-light" href="#">Que no debo hacer...</p>
                           Una vez ingresdo al establecimiento no se puede volver a salir del instituto hasta el horario finalizado.
                           No se debe traer bebidas alcohólicas ni estupefacientes.
                           Si sos de otro color no podes jugar en otros colores que no sea tu equipo.
                        </div>
                  </div>
                  </div>      
               </div>

               <div className="container mt-5">
               <div classs="row">
                  <div class="col-sm text-light">
                  <p className="fs-2 text-light mt-5 border"> Capitanes de los diferentes colores 2023 </p>
                  <p className="fs-4 text-light"> Los mismos se encargan de acomapañar al alumno a jugar y a divertirse, son los organizadores de los juegos </p>
               </div>

               <div class="container mt-5 ">
                  <div class="row">
               <div class="col-sm  ps-5 col-md-4 rounded-3 text-warning">
               <p class="nav-link text-warning "> AMARILLO </p> 
                  Captanes : Fatima Silva, Lautaro Zunia, Oriana Longo,Neli Montalva, Kiara Destellos, Camila Ozuna, Juaco Molina, Denis Montalva, Lautaro Olmos, Luisana Lopes, Martin Gonzales,Martina Cortez.
               </div>
               <div class="col-md-4  ps-5 rounded-3 text-danger">
               <p class="nav-link text-danger"> ROJO </p> 
                  Captanes : Fatima Silva, Lautaro Zunia, Oriana Longo,Neli Montalva, Kiara Destellos, Camila Ozuna, Juaco Molina, Denis Montalva, Lautaro Olmos, Luisana Lopes, Martin Gonzales,Martina Cortez.
               </div>
               <div class="col-sm col-md-4 ps-5 rounded-3 text-success">
               <p class="nav-link text-success"> VERDE </p> 
                  Captanes : Fatima Silva, Lautaro Zunia, Oriana Longo,Neli Montalva, Kiara Destellos, Camila Ozuna, Juaco Molina, Denis Montalva, Lautaro Olmos, Luisana Lopes, Martin Gonzales,Martina Cortez.
                  </div>
                  </div> 
               </div>
               </div>
            </div>
            </div>
         </div>
       
     );
   } 
}

