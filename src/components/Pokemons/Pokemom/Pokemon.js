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


// class Pokemon extends Component {
//   state = {
// pokemon: null,
// loading: false
//   }
// componentDidMount() {
//   this.setState({loading: true})
//   fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then((res) => res.json())
//     .then(pokemon => this.setState({pokemon}))
//     .finally(this.setState({loading: false}));
// }
// render() {
//   return (
//     <div>
//       <h2>Find the pakemon ( Найди пакемона )</h2>
//       {this.state.loading && <h2>Загружаем....</h2>}
//       <PokemonForm />
//       {this.state.pokemon && <div>{this.state.pokemon.name}</div>}
//     </div>
//   );
// }
// }