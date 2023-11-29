import React from "react";
import "./Juegos.css";

const juegos=[
      {
          "id_juegos": 1,
          "dia": "lunes",
          "hora": "11:40 a 12:20",
          "lugar": "gimnacio ana giro",
          "ganador": "verde",
          "turno": "vespertino",
          "deporte": "jambool",
          "descripcion": "......"
      },
      {
          "id_juegos": 2,
          "dia": "martes",
          "hora": "13:40 a 14:30",
          "lugar": "Ana giro",
          "ganador": "amarillo",
          "turno": "tarde",
          "deporte": "nose",
          "descripcion": "dos jugadores por color"
      },
      {
          "id_juegos": 3,
          "dia": "miercoles",
          "hora": "10:20 a 11:40",
          "lugar": "gimnacio ana giro",
          "ganador": "rojo",
          "turno": "mañana",
          "deporte": "voley",
          "descripcion": "-cada equipo esta conformado por un total de 6 jugadores titulares los cuales deben ser minimo 3 chicas y un maximo de 3 masculino\r\nel objetivo del juego es pasar la pelota por encima de la red con el fin de hacerla tocar el piso del campo adversario, y evitar q hagan lo mismo en su propio campo"
      },
      {
          "id_juegos": 4,
          "dia": "jueves",
          "hora": "13:40 a 14:30",
          "lugar": "Ana giro",
          "ganador": "amarillo",
          "turno": "tarde",
          "deporte": "nose",
          "descripcion": "dos jugadores por color"
      },
      {
          "id_juegos": 5,
          "dia": "lunes",
          "hora": "11:40 a 12:20",
          "lugar": "gimnacio ana giro",
          "ganador": "verde",
          "turno": "mañana",
          "deporte": "jambool",
          "descripcion": "......"
      },
      {
          "id_juegos": 6,
          "dia": "viernes",
          "hora": "11:40 a 12:20",
          "lugar": "gimnacio ana giro",
          "ganador": "verde",
          "turno": "mañana",
          "deporte": "jambool",
          "descripcion": "......"
      },
      {
          "id_juegos": 7,
          "dia": "martes",
          "hora": "13:40a14:30",
          "lugar": "colegio",
          "ganador": "amarillo",
          "turno": "tarde",
          "deporte": "nose",
          "descripcion": "dos jugadores por color"
      },
      {
          "id_juegos": 8,
          "dia": "viernes",
          "hora": "13:40a14:30",
          "lugar": "colegio",
          "ganador": "amarillo",
          "turno": "tarde",
          "deporte": "nose",
          "descripcion": "dos jugadores por color"
      },
      {
          "id_juegos": 9,
          "dia": "martes",
          "hora": "13:40a14:30",
          "lugar": "colegio",
          "ganador": "amarillo",
          "turno": "tarde",
          "deporte": "nose",
          "descripcion": "dos jugadores por color"
      }
  ]

export default class Juegos extends React.Component{
     constructor(props){
        super(props); 
        this.state = {
          diasJuegos:[]
        }
    }

    componentDidMount(){
      this.actualizar()
    }

    actualizar(){
      //consulta de axios
      //usar esto para obtener el color y mostrarlo en la pagina 
      let dias = juegos.map((juego)=> juego.dia)
      
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
    }

    render(){
        return(
            <div className="container mt-5">
                <div class="row">
                <div class="col-12">
                  <p className="fs-2 text-light mt-5"> Datos que necesitas saber de las intertecno... </p>
                </div>
                {this.state.diasJuegos.map((dia,index) => {
                  return(
                    <div class="col text-light" key={index}>
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
       );}
 
 }