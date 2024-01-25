import React from "react";
import "./styles.css";

export default class boton extends React.Component{
     constructor(props){
        super(props); 
        this.state = {};
    }

    render() {
         const { image, título, descripción } = this.props;
        return <input 
         type="button"
         className={className}
          id={id}
         value={titulo}
     />;
  }
}