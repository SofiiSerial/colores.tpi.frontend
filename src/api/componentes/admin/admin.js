import React from "react";
import axios from "axios";
import "bootstrap";

export default class admin extends React.Component{
     constructor(props){
        super(props);
        this.state = { usuario:"",contrasenia:"", validacion:null }
    }
    enviar(e){
      e.preventDefault() //Esta línea se utiliza para prevenir el comportamiento predeterminado del evento
      if(this.state.usuario == "" || this.state.contrasenia == ""){
        alert('El campo NO puede estar vacio');
      }else{
      console.log(this.state.usuario)//Imprime en la consola el valor actual del campo de usuario en el estado
      // del componente React. Esto podría ser útil para depurar y verificar que los datos del usuario se están capturando correctamente.
      console.log(this.state.contrasenia)
      const url = "http://localhost:3203/api/usuarios/login" //Define la URL a la que se enviará la solicitud POST. En este caso, parece ser una ruta de inicio de sesión en un servidor local.
      const datos = { //Crea un objeto llamado datos que contiene la información del usuario y la contraseña obtenida del estado del componente React.
        usuario: this.state.usuario,
        contrasenia: this.state.contrasenia//123456 
      }
      console.log(datos)
      axios.post(url, datos)
      .then((resp) => { // Maneja la respuesta exitosa de la solicitud POST. Imprime en la consola la respuesta del servidor y almacena el rol del usuario en el almacenamiento de sesión.
        console.log(resp.data);
        sessionStorage.setItem("rol", resp.data.user.rol)
        this.setState({validacion: resp.data.validacion});//cambiar state de validacion
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  } 
  //En resumen, esta función se utiliza para manejar el envío de datos de inicio de sesión a través de una 
  //solicitud POST a un servidor, y posteriormente procesa la respuesta del servidor y almacena el rol del 
  //usuario en el almacenamiento de sesión. Ten en cuenta que el código asume el uso de la biblioteca Axios
  // para realizar la solicitud HTTP y también asume que el componente React tiene un estado (this.state) que almacena la información del usuario y la contraseña.


    render(){
      return(
        <div className="consultarColor">
       <div className="container">
          <div className="fs-2 text-light mt-5 "> ADMIN </div>
          <div className="fs-4 text-light mt-5 "> Ingrese sus datos para poder identificar su usuario</div>
          <form> 
            <div class="form-floating mb-3">
              <input 
              value={this.state.usuario}

              onChange={(e) => this.setState({usuario:e.target.value})}
              type="text" class="form-control mt-3 w-50" id="usuario" placeholder="usuario"/>
              <label for="usuario">Admin</label>

            <div class="form-floating w-50">
             <input 
             value={this.state.contrasenia}
             onChange={(e) => this.setState({contrasenia:e.target.value}) }
             type="password" class="form-control mt-3 w-60" id="contrasenia" placeholder="Password"/>
               <label for="contrasenia">Pass</label>
            </div>
            </div>
            <button className="boton btn btn-warning mt-3" onClick={(e) => this.enviar(e)}> Continuar </button>
            {this.state.validacion !==null&&

            <div class="container m-3" >
            <p className="fs-2 text-light"> validacion exitosa </p>    
            </div>
            /*crear div solo si validacion no esta vacio*/}
         </form>
            <div> 
         
         </div>
       </div>
       </div>  

    );}
 }
