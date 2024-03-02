import React from "react";
import "./Juegos.css";
import axios from "axios"; 
import InfoJuego from "../infoJuego/infoJuego";
import FormularioModifJuego from "../formularioModifJuego/formularioModifJuego";

export default class Juegos extends React.Component{
     constructor(props){
        super(props); 
        this.state = { 
          formularioJuego:null,
          diasJuegos:[],//Esta propiedad se inicializa como un arreglo vacío. 
          //Es probable que se utilice para almacenar los días en los que se juegan los juegos.
        ResultadoModif:false,
      }
    }
    componentDidMount(){
    this.mostrar(); 
  }

   mostrar(){ 
      //consulta de axios
      const url = "http://localhost:3203/api/juegos" //llama a la basse de datos
      const config = {
        params: {}
      }
  
      axios.get(url)
      .then((resp) => {
       
        const juegos= resp.data.juegos;
      
        let diasJuegos = [];
        //para no repetir los dias, se crea un conjunto. Los conjuntos (set) no tienen duplicados
        let diasUnicos = new Set();

        // Filtra los días únicos
        juegos.forEach((juego) => {
          diasUnicos.add(juego.dia);
        });

        // Crea el array diasJuegos
        diasUnicos.forEach((dia) => {
          diasJuegos.push({
            dia,
            juegos: juegos.filter((juego) => juego.dia === dia),
          });
        });
        this.setState({diasJuegos})
       
      })
      .catch((error)=>{
        console.log(error);
      })
      
    }

    MostrarFormulario(juego){

      this.setState({ResultadoModif: !this.state.ResultadoModif,formularioJuego: juego});
      this.mostrar();
    }

    render(){
        return(
          <div className="juegos">
            {this.state.ResultadoModif &&
                      <FormularioModifJuego
                      datosJuegos={this.state.formularioJuego}
                      mostrarDatos={() => this.mostrar()}
                      MostrarFormulario={() => this.MostrarFormulario(null)}
                      ></FormularioModifJuego>
            }
            <div className="container mt-12 ">
                <div className="row">
                <div className="col-12">
                  <p className="fs-2 text-light mt-5">
                  <strong> Juegos que se realizaran en la semana </strong></p>
                </div> 
                {this.state.diasJuegos.map((dia,index) => {
                  return(
                    <div className="col text-light border " key={index}>
                      <h3>{dia.dia}</h3>
                      {dia.juegos.map((juego,index) => {
                        return(
                          <InfoJuego key={index}juego={juego} editarDatos={() => this.MostrarFormulario(juego)} />
                        )
                      })}
                    </div>
                  )
                })}
             </div>
            </div>
         </div>
       );}
 
 }