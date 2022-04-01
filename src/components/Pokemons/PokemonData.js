import React from 'react';

const PokemonData = ({pokemon: {name, sprites}}) => {
  return (
    <div>
                   <h1>{name}</h1>
          <img
            src={sprites.other.dream_world.front_default}
            width="200"
            alt="pokemon"
          />
    </div>
  )
};

export default PokemonData;