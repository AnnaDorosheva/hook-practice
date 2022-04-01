import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PokemonForm from "../PokemonForm/PokemonForm";
import PokemonInfo from "../PokemonInfo/PokemonInfo";

class Pokemon extends Component {
  state = {
    pokemonName: ""
  }
  hendlePokemonName = pokemonName => {
    this.setState({ pokemonName})
  }

  render() {
    return (
      <div>

        <PokemonForm onSubmit={this.hendlePokemonName}/>
        <PokemonInfo name={this.state.pokemonName} />
       <ToastContainer />
      </div>
    );
  }
}

export default Pokemon;


