import React from "react";
import "./Juegos.css";
import axios from "axios"; 

export default class Juegos extends React.Component{
     constructor(props){
        super(props); 
        this.state = {
          diasJuegos:[],
          juegos:[] //aca creamos un tipo de variable para un array
        }
    }
    componentDidMount(){
      this.actualizar() 
  }

  enviar(e){
    e.preventDefault()//previene q esa pagina se actualize sola
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
  }

   actualizar(){
      //consulta de axios
      const url = "http://localhost:3203/api/juegos" //llama a la basse de datos
      const config = {
        params: {}
      }
      axios.put(url, config)
      .then((resp) => {
        const juegos= resp.data.juegos
        //usar esto para obtener el color y mostrarlo en la pagina 
        const dias = juegos.map((juego)=> juego.dia);
        dias = dias.filter((dia,index) =>{
          return dias.indexOf(dia)==index;
        })
        let diasJuegos = dias.map((dia) =>{
          return{
            dia,
            juegos:juegos.filter((juego) => juego.dia == dia)
          }
        })
        this.setState({diasJuegos})
        //tenemos q insertar lo q queremos mostrar
        console.log(resp.data); //muesttra en consola despues se elimina
        //this.setState({resultadoC: resp.data.resultado}); //
      })
      .catch((error)=>{
        console.log(error);
      })
    }

    render(){
        return(
          <div className="juegos">
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
                          <p key={index}>{juego.deporte}</p>
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