import React, { Component } from "react";
import {ReactComponent as MyIcon} from "../../svg/happy-emoji-svgrepo-com.svg";
import { toast } from 'react-toastify';

export default class PokemonForm extends Component {
  state = {
    pokemonName: "",
  };

  hendleNameChange = (event) => {
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  };

  hendleSubmit = (event) => {
    event.preventDefault();

    if(this.state.pokemonName.trim() === "") {
        toast.error("Введите имя покемона");
        return;
    }
    this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: "" });
  };

  render() {
    return (
      <form onSubmit={this.hendleSubmit}>
        <input
          type="text"
          name="pokemoneName"
          value={this.state.pokemonName}
          onChange={this.hendleNameChange}
        />
        <button type="submit">
        <MyIcon width={28} height={28}/> Найти
        </button>
      </form>
    );
  }
}
