import React from "react";
import "./resultadoColor.css";
import axios from "axios";

export default class ConsultarColor extends React.Component{
      constructor(props){
        super(props); 
        this.state ={ 
          documento : "", 
          resultadoC:null

          //agregar resultado como color amarrillo
        }
      }
      enviar(e){  
        e.preventDefault()//previene q esa pagina se actualize sola 
        const url = "http://localhost:3203/api/puntajes/resultadoColor" //sin el valor de documento
        const config = {
          params: { puntajes: this.state.documento }
        }
        axios.get(url, config)
        .then((resp) => {
            //tenemos q insertar lo q queremos mostrar
          console.log(resp.data.resultado); //muesttra en consola despues se elimina
          this.setState({resultadoC: resp.data.resultado});
        })
        .catch((error)=>{
          console.log(error);
        })

      } 

    render(){
        return(

          <div className="resultadoColor">
         <div className="conteiner">
            <div className="fs-4 text-light mt-5">En esta seccion de la pagina se podra ver al finalizar la semana de intecnos el equipo ganador con mas puntaje de este año </div>

        <div className="contacto">
            <div className="fs-4 text-light mt-5">En esta seccion de la pagina se podra ver al finalizar la semana de intecnos el equipo ganador con mas puntaje de este año </div>


           { this.state.resultadoC !==null&&
           
           <div class="container m-10" className={this.state.resultadoC[0].color} >
               <p className="fs-2 text-light mt-5 py-3  col-12"> Tu color es:  </p>
               <p class="text-light border bg-opacity-10 p-4 mt-4 col-md-12 rounded-3"  > {this.state.resultadoC[0].color}</p>

               <p className="fs-4 text-info-center text-light mt-5 px-5 col-12"> Una vez asignado su color tendrá que venir con la vestimenta (remera, pantalon) adecuados a el color, <br/>
               despues tendra que ir a su tribuna que será acompañado en el momentos por su capitan. </p>     
           </div>
           }

        
           </div>
         </div>
         </div>  
 
       );}
 
 }