import React from "react";
import "./admin.js";
export default class admin extends React.Component{
     constructor(props){
        super(props); 
        this.state = { usuario:"",contrasenia:""}
        
    }

    render(){
      return(
        <div className="consultarColor">
       <div className="conteiner">
          <div className="fs-2 text-light mt-5"> ADMIN </div>
          <div className="fs-4 text-light mt-5"> Ingrese sus datos en este formulario para q podamos verificar su identidad y su color correspondiente   </div>
          <form> 
            <label> 
              DNI
            </label>
            <div> 

            <input 
                className= "col-3 mx-auto text-negro bg-opacity bg-light container overflow-hidden text-center"
                value={this.state.ususario}
                onChange={(e) => this.setState({ususario:e.target.value})}
              />
              
              <input 
                className= "col-3  mx-auto text-negro bg-opacity bg-light"
                value={this.state.contrase}
                onChange={(e) => this.setState({contrase:e.target.value})}
              />
            </div>
            <button className="boton btn btn-warning mt-5" onClick={(e) => this.enviar(e)}> Continuar </button>
         </form>
            <div> 
         
         </div>
       </div>
       </div>  

     );}

}