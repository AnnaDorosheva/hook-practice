import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PokemonForm from "../PokemonForm/PokemonForm";
import PokemonInfo from "../PokemonInfo/PokemonInfo";
import s from "./Pokemon.module.css";

class Pokemon extends Component {
  state = {
    pokemonName: "",
  };
  hendlePokemonName = (pokemonName) => {
    this.setState({ pokemonName });
  };

  render() {
    return (
      <div className={s.pokemonContainer}>
        <PokemonForm onSubmit={this.hendlePokemonName} />
        <PokemonInfo name={this.state.pokemonName} />
        <ToastContainer />
      </div>
    );
  }
}

export default Pokemon;
