import React from "react";
import "./consultarColor.css";
import axios from "axios";



export default class ConsultarColor extends React.Component{

  // establece el estado inicial del componente, proporcionando valores predeterminados para las propiedades 
      constructor(props){
        super(props); 
        this.state ={ 
          documento : "",// se inicializa como una cadena vacía
          resultadoC:null
        }
      }
      
      enviar(e){  

        e.preventDefault()//previene q esa pagina se actualize sola 
          if(this.state.documento == ""){
            alert('El campo NO puede estar vacio');

          }else{
<<<<<<< HEAD
            const url = "http://localhost:3203/api/usuarios/buscarcolor" //sin el valor de documento
            const config = {
              params: { documento: this.state.documento } //En este caso, this.state.documento se utilizaría para acceder
        // al valor actual de la propiedad documento del estado de MiComponente y podría ser renderizado en el DOM dentro del componente.
=======
            const url = "http://localhost:3203/api/usuarios/buscarcolor" //Aquí se define la URL a la que se enviará la solicitud

            const config = {// está siendo utilizado para especificar los parámetros de la solicitud GET, PASANDOLE lo que tiene q buscar
              params: { documento: this.state.documento } //contiene los parámetros que se adjuntarán a la solicitud GET
>>>>>>> 765d05f222f80251a5284bd5eb01619cf474e883
            }
            axios.get(url, config)
            .then((resp) => {
                //Define una función de devolución de llamada que se ejecutará si la solicitud se completa con éxito. 
              console.log(resp.data.resultado); //muesttra en consola despues se elimina
              this.setState({resultadoC: resp.data.resultado}); // ESTAMOS ALMACENANDO LA RESPUESTA DEL SERVIDOR DE RESULTADO EN RESULTADOC 
            })
            .catch((error)=>{
              console.log(error);
            })
          }
      } 
      //Esta función se ejecutará si la promesa es rechazada en algún punto de la cadena de
       //promesas, es decir, si ocurre un error durante la solicitud HTTP u otro proceso asíncrono.
      

    render(){
        return(

          <div className="consultarColor">
         <div className="conteiner">
            <div className="fs-2 text-light mt-5">Consultá tu color</div>
            <div className="fs-3 text-light mt-2"> Ingrese sus DNI para que podamos verificar su identidad y su color correspondiente. </div>
            <form> 
              <label className="text-light mt-4"> 
                DNI
              </label>
              <div> 
                <input 
                  className= "col-3 mx-auto text-negro bg-opacity bg-light border rounded-3"
                  value={this.state.documento}
                  onChange={(e) => this.setState({documento:e.target.value})}
                  
                />
              </div>
              <button class="boton" className="boton btn btn-warning mt-2 "  onClick={(e) => this.enviar(e)}> Continuar </button>
              
           </form>
           <div className="contacto">
           { this.state.resultadoC !==null&& 
           this.state.resultadoC[0].color !==null&&
           
           <div class="container m-10 border rounded-3" className={this.state.resultadoC[0].color} >
               <p className="fs-2 text-light mt-5 py-3  col-12 border rounded-3"> Tu color es:  </p>
               <p class="text-light border bg-opacity-10 p-4 mt-4 col-md-12 rounded-3"  > {this.state.resultadoC[0].color}</p>

               <p className="fs-4 text-info-center text-light mt-5 px-5 col-12 "> Una vez asignado su color tendrá que venir con la vestimenta (remera, pantalon) adecuados a el color, <br/>
               despues tendra que ir a su tribuna que será acompañado en el momentos por su capitan. </p>     
           </div>
           }

        
           </div>
         </div>
         </div>  
 
       );}
 
 }