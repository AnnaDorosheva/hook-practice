import React, { Component } from "react";
import { toast } from "react-toastify";
import PokemonError from "../PokemonError";
import PokemonData from "../PokemonData";
import PokemonSpinner from "../PokemonSpinner";
import {pokemonApi} from "../pokemon-api";

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    status: "idle",
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.name;
    const nextName = this.props.name;
console.log(this.state.pokemon)
    if (prevName !== nextName) {
      this.setState({ status: "pending" });
      toast(`I'm traing to finde a pokemon ${nextName}`);

      pokemonApi(nextName).then((pokemon) => this.setState({ status: "resolved", pokemon }))
        .catch((error) => this.setState({ status: "redjected", error }));
    }
  }
  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === "idle") {
      return <div>Введите имя покемона!</div>;
    }
    if (status === "pending") {
      return <PokemonSpinner pokemonName={pokemonName}/>;
    }
    if (status === "redjected") {
      return <PokemonError message={error.message} />;
    }
    if (status === "resolved") {
      return <PokemonData pokemon={pokemon} />;
    }
  }
}
