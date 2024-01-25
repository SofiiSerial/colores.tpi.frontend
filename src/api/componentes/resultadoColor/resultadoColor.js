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
        console.log("llamando a la api");
        const url = "http://localhost:3203/api/puntajes/ganador" //sin el valor de documento
        const config = {
          
        }
        axios.get(url, config)
        .then((resp) => {
          console.log("obteniendo resultado")
          console.log(resp.data.ganador); //muesttra en consola despues se elimina
          this.setState(resp.data.ganador[0]);
          //this.setState({color: resp.data.ganador.color});
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
          <div className="mb-5 text-light col text-light border rounded-3">
          <p className="form-labelcol text-light border rounded-3">COLOR</p>
          <p> {this.state.color}</p>
          </div>
        
        <div class="mb-5 text-light col text-light border rounded-3">
          <p  class="form-label col text-light border rounded-3">PUNTAJE</p>
          <p> {this.state.puntaje}</p>
          </div>
        </div>
    
 
   );}
 
 }