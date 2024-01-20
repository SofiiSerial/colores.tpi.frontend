import React from "react";
import "./Juegos.css";
import axios from "axios"; 
import InfoJuego from "../infoJuego/infoJuego";
import FormularioModifJuego from "../formularioModifJuego/formularioModifJuego";

export default class Juegos extends React.Component{
     constructor(props){
        super(props); 
        this.state = { 
          diasJuegos:[],

          ResultadoModif:false,

        
            //juegos:[] //aca creamos un tipo de variable para un array
      }
    }
    componentDidMount(){
    this.mostrar(); 
  }

  /*enviar(e){
    e.preventDefault();//previene q esa pagina se actualize sola
    const url = "http://localhost:3203/api/juegos" //
    const config = {
      params: {}
    }
    axios.get(url, config)
    .then((resp) => {
      
       //tenemos q insertar lo q queremos mostrar
        console.log(resp.data); //muesttra en consola despues se elimina
      //this.setState({resultadoC: resp.data.resultado}); //
    })
    .catch((error)=>{
      console.log(error);
    })
  }*/

   mostrar(){
      //consulta de axios
      const url = "http://localhost:3203/api/juegos" //llama a la basse de datos
      const config = {
        params: {}
      }
      //const diasSemana =["lunes","martes","miercoles","jueves","viernes"];
      axios.get(url)
      .then((resp) => {
        //console.log(resp.data);
        const juegos= resp.data.juegos;
        //console.log(juegos);
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

    MostrarFormulario(){

      this.setState({ResultadoModif: !this.state.ResultadoModif});
    }

    render(){
        return(
          <div className="juegos">
            {this.state.ResultadoModif &&
                      <FormularioModifJuego
                      datosJuegos={this.state.diasJuegos}
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
                    <div className="col text-light border" key={index}>
                      <h3>{dia.dia}</h3>
                      {dia.juegos.map((juego,index) => {
                        return(
                          <InfoJuego key={index}juego={juego} editarDatos={() => this.MostrarFormulario()} />
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