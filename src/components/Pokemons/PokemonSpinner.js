import React from "react";
import { ImSpinner } from "react-icons/im";
import pendidngPic from "./pending.png";
import PokemonData from "./PokemonData";

const PokemonSpinner = ({ pokemonName }) => {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        dream_world: {
          front_default: pendidngPic,
        },
      },
    },
  };

  return (
    <div>
      <ImSpinner size={32} />
      <div>"Загружаем..."</div>
      <PokemonData pokemon={pokemon} />
    </div>
  );
};

export default PokemonSpinner;
