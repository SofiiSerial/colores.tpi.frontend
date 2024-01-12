import React from "react";
import axios from "axios";
import "bootstrap";

export default class admin extends React.Component{
     constructor(props){
        super(props); 
        this.state = { usuario:"",contrasenia:""}
    
        
    }
    enviar(e){  
      e.preventDefault()
      console.log(this.state.usuario)
      console.log(this.state.contrasenia)
      const url = "http://localhost:3203/api/usuarios/login" //sin el valor de documento
      const datos = {
        usuario: this.state.usuario,//document.getElementById("usuario").value, 
        contrasenia: this.state.contrasenia//123456 
      }
      console.log(datos)
      axios.post(url, datos)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error)=>{
        console.log(error);
      })
     
  } 

    render(){
      return(
        <div className="consultarColor">
       <div className="container">
          <div className="fs-2 text-light mt-5"> ADMIN </div>
          <div className="fs-4 text-light mt-5"> Ingrese sus datos en este formulario para q podamos verificar su identidad y su color correspondiente   </div>
          <form> 
            <div class="form-floating mb-3">
              <input 
              value={this.state.usuario}

              onChange={(e) => this.setState({usuario:e.target.value})}
              type="text" class="form-control mt-3 " id="usuario" placeholder="usuario"/>
              <label for="usuario">Admin</label>

            <div class="form-floating ">
             <input 
             value={this.state.contrasenia}
             onChange={(e) => this.setState({contrasenia:e.target.value}) }
             type="password" class="form-control mt-3 " id="contrasenia" placeholder="Password"/>
               <label for="contrasenia">Pass</label>
            </div>
            </div>
            <button className="boton btn btn-warning mt-3" onClick={(e) => this.enviar(e)}> Continuar </button>
         </form>
            <div> 
         
         </div>
       </div>
       </div>  

    );}
 }
