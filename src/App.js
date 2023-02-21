import React, { Component } from "react";
import "./App.css";
import Card from "./Card";

class App extends Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    //que se ejecutara justo despues del objeto state/constructor, y vamos a hacer una llamada fetch
    fetch("characters.json")
      .then(function (response) {
        return response.json();
      }) //convirtiendo la respuesta a json
      .then((data) => {
        this.setState({ characters: data });
        console.log(data);//solo para comprobar que lo estamos recibiendo bien
      }); //devolviendo la data
  }

    
  render() {
    return (
      <div>
        { this.state.characters.map((ch, i) => 
          <Card key={i} name={ch.name} species={ch.species} image={ch.image}/>
        )}
        
      </div>
    );
  }
}

export default App;
