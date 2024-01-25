import React from "react";

export default class InfoJuego extends React.Component{

    constructor(props){
        super(props);
        this.state={
            admin: false
        }
    } 

    componentDidMount(){
        this.cargarJuego();
        this.esAdmin();
    }

    cargarJuego(){
        console.log(this.props.juego);
    }

    esAdmin(){
        let verificacion = sessionStorage.getItem("rol");
            if (verificacion == "admin") {
                this.setState({admin: true})
                }else {
                this.setState({admin: false})
                }
    }

    render(){
        return(


                <div className="border rounded-3  "><p>{
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
                    { this.state.admin &&
                        <p> <button className="btn btn-secondary col-10 center " onClick={() => this.props.editarDatos(this.props)}> modificar</button></p>
                    }
            
                </div>
            
        )
    }
}