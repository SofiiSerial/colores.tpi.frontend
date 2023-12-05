import React from "react";
import "./resultadoColor.css";
import axios from "axios";

export default class ConsultarColor extends React.Component{
      constructor(props){
        super(props); 
        this.state ={ 
          color: "", 
          puntaje:null

          //agregar resultado como color amarrillo
        }
      }
      obtenerResultado(){  
        
        const url = "http://localhost:3203/api/puntajes/ganador" //sin el valor de documento
        const config = {
          
        }
        axios.get(url, config)
        .then((resp) => {
            //tenemos q insertar lo q queremos mostrar
          console.log(resp.data.ganador); //muesttra en consola despues se elimina
          this.setState({resp.data.ganador});
          console.log(this.state)
        })
        .catch((error)=>{
          console.log(error);
        })

      } 

      componentDidMount(){
        this.obtenerResultado();
      }
      

    render(){
        return(
        <div className= "">
          <div className="mb-3">
          <label className="form-label">COLOR</label>
          <div className = "form-control"  placeholder="COLOR">
          </div>
        </div>
        <div class="mb-3">
          <label  class="form-label">Puntaje</label>
          <div className = "form-control"  placeholder="Puntaje">
          </div>
        </div>
      </div>
 
   );}
 
 }