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
            <div className="container mt-10">
                  <div className="row">
                  <div className="col-12">
                  <p className="fs-2 text-light mt-5 border"> <strong> Datos que necesitas saber de las intertecno...</strong> </p>
                  </div>
                     <div className="container mt-4">
                           <div className="row">
                              <div className="col-sm text-warning mt-4 fs-5 border rounded-3">
                        <p class="nav-link active  text-warning" aria-current="page" href="#">Lugar correspondiente</p>
                           En el sum de la escuela 1ro y 2do AÑO en su respectivos turnos.<span/>
                           En el Gimnasio ¨Ana Giro¨3ro y 4to AÑO en su respectivo turno.<span/>
                           5to - 6to y 7mo en el zum del colegio en el horario del turno vespertino.<span/>
                              </div>
                     <div className="col-sm text-danger mt-4 fs-5 border rounded-3">
                        <p class="nav-link text-danger" href="#">Horarios</p>
                           Turno Mañana:
                           de 8:30 a 12:00hs.<span/>
                           Turno Tarde
                           de 13:50 a 17:00hs.<span/>
                           Turno Vespertino
                           de 18:20 a 21:30 <span/>
                     </div>
                        <div className="col-sm text-success mt-4 fs-5 border rounded-3">
                           <p className="nav-link text-success " href="#">Que no debo hacer...</p>
                           Una vez ingresdo al establecimiento no se puede volver a salir del instituto hasta el horario finalizado.<span/>
                           No se debe traer bebidas alcohólicas ni estupefacientes.<span/>
                           Si sos de otro color no podes jugar en otros colores que no sea tu equipo.<span/>
                        </div>
                  </div>
                  </div>      
               </div>

               <div className="container mt-5">
               <div className="row">
                  <div className="col-sm text-light">
                  <p className="fs-2 text-light mt-5 border"> Capitanes de los diferentes colores 2023 </p>
                  <p className="fs-4 text-light"> Los mismos se encargan de acomapañar al alumno a jugar y a divertirse, son los organizadores de los juegos </p>
               </div>

               <div className="container mt-5 ">
                  <div className="row">
               <div className="col-sm rounded-3 text-warning fs-5 border">
               <p className="nav-link text-warning "> AMARILLO </p> 
                  Captanes : Fatima Silva, Lautaro Zunia, Oriana Longo,Neli Montalva, Kiara Destellos, Camila Ozuna, Juaco Molina, Denis Montalva, Lautaro Olmos, Luisana Lopes, Martin Gonzales,Martina Cortez.
               </div>
               <div className="col-md-4  rounded-3 text-danger fs-5 border ">
               <p className="nav-link text-danger"> ROJO </p> 
                  Captanes : Fatima Silva, Lautaro Zunia, Oriana Longo,Neli Montalva, Kiara Destellos, Camila Ozuna, Juaco Molina, Denis Montalva, Lautaro Olmos, Luisana Lopes, Martin Gonzales,Martina Cortez.
               </div>
               <div className="col-sm rounded-3 text-success fs-5 border ">
               <p className="nav-link text-success"> VERDE </p> 
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

