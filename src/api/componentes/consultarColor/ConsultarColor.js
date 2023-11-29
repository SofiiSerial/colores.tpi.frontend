import React from "react";
import "./consultarColor.css";
import axios from "axios";

export default class ConsultarColor extends React.Component{
      constructor(props){
        super(props); 
        this.state ={ 
          documento : "",
          usuario:null
          //agregar resultado como color amarrillo
        }
      }
      enviar(e){
        e.preventDefault()//previene q esa pagina se actualize sola 
        const url = "http://localhost:3203/api/usuarios/buscarcolor" //sin el valor de documento
        const config = {
          params: { documento: this.state.documento }
        }
        axios.get(url, config)
        .then((resp) => {
            //tenemos q insertar lo q queremos mostrar
          console.log(resp.data.resultado); //muesttra en consola despues se elimina
        })
        .catch((error)=>{
          console.log(error);
        })

      } 

    render(){
        return(

          <div className="consultarColor">
         <div className="conteiner">
            <div className="fs-2 text-light mt-5">Consultá tu color</div>
            <div className="fs-4 text-light mt-5"> Ingrese sus datos en este formulario para que podamos verificar su identidad y su color correspondiente. </div>
            <form> 
              <label> 
                DNI
              </label>
              <div> 
                <input 
                  className= "col-3 mx-auto text-negro bg-opacity bg-light"
                  value={this.state.documento}
                  onChange={(e) => this.setState({documento:e.target.value})}
                />
              </div>
              <button className="boton btn btn-warning mt-5" onClick={(e) => this.enviar(e)}> Continuar </button>
           </form>
           <div className="contacto">
           { this.state.usuario !==null&&
           
           <div className="container m-10">
               <p className="fs-2 text-light mt-5 col-md-4"> Tu color es: </p>
               <p class="text-light border border-warning bg-opacity-10 p-4 mt-5 bg-warning  col-md-9 rounded-3">Amarillo</p>
               <p className="fs-4 text-info text-light mt-5 col-md-9"> Una vez asignado su color tendrá que venir con la vestimenta (remera, pantalon) adecuados a el color, <br/>
               despues tendra que ir a su tribuna que será acompañado en el momentos por su capitan. </p>     
           </div>
           }

        
           </div>
         </div>
         </div>  
 
       );}
 
 }