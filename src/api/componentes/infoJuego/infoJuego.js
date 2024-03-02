import React from "react";

export default class InfoJuego extends React.Component{

    //tiene una propiedad de estado llamada admin que se inicializa en false
    constructor(props){
        super(props);
        this.state={
            admin: false
        }
    } 

    //  imprime los detalles del juego que se pasan al componente a través de las props.. 
    cargarJuego(){
        console.log(this.props.juego);
    }

    esAdmin(){
        let verificacion = sessionStorage.getItem/*para recuperar el valor asociado con la clave "rol" almacenada en la sesión del navegador.*/("rol");
            if (verificacion == "admin") {//Compara el valor recuperado con la cadena "admin" para determinar si el usuario tiene el rol de administrador.

                this.setState({admin: true}) //cambia el valor de falso a verdadero
                }else {
                this.setState({admin: false})
                }
    }


    componentDidMount(){
        //Llama a cargarJuego() para cargar el juego
        this.cargarJuego();
        // Llama a esAdmin() para verificar si el usuario es administrador
        this.esAdmin();
    }


    render(){
        return(


                <div className="border-top"><p>{
                        this.props.juego.deporte
                    }   </p>
                    <p>{
                        this.props.juego.lugar
                    }</p>
                    <p>{
                        this.props.juego.hora
                    }</p>
                    <p>{
                        this.props.juego.turno
                    }  </p>

                    { this.state.admin &&
                        <p> <button className="btn btn-secondary col-10 center " onClick={() => this.props.editarDatos(this.props)}> modificar</button></p>
                    }
            
                </div>
            // hay una condición que verifica si el usuario es un administrador (this.state.admin). Si es un administrador, se renderiza un botón para editar los datos del juego. Esto se logra con el operador lógico &&, que renderiza el botón solo si this.state.admin es verdadero.
        )
    }
}