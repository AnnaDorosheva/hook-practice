import React, { Component } from "react";
import { toast } from "react-toastify";

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {

    const prevName = prevProps.name;
    const nextName = this.props.name;

    if (prevName !== nextName) {
      this.setState({ isLoading: true });
      toast(`I finde a pokemon ${nextName}`);
      fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then((res) => res.json()).then((pokemon) => this.setState({ pokemon })).finally(() => this.setState({ isLoading: false }));
    }
  }
  render() {
    const {isLoading, pokemon} = this.state;
    const {pokemonName} = this.props;
    return (
      <>
        {isLoading && <div>"Загружаем..."</div>}
        {!pokemonName && <div>"Введите имя покемона!"</div>}
        {pokemon && <h1>{pokemon.name}</h1>}
      </>
    );
  }
}
