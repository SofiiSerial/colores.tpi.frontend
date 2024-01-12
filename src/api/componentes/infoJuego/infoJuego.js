import React from "react";

export default class InfoJuego extends React.Component{

    constructor(props){
        super(props);
        this.state={}
    } 

    componentDidMount(){
        this.cargarJuego();
    }

    cargarJuego(){
        console.log(this.props.juego);
    }



    render(){
        return(


        
                <div><p>{
                        this.props.juego.deporte
                    }   </p>
                    <p>{
                        this.props.juego.lugar
                    }</p>
                    <p>{
                        this.props.juego.hora
                    }</p>
                    <p>{
                        this.props.juego.ganador
                    }  </p>
                    <p> <button className="boton btn btn-warning" onClick={(e) => this.enviar(e)}> modificar </button></p>
                    //con un if o un == isadmin
                </div>
            
        )
    }
}