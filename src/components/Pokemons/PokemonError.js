import React from 'react';
import picture from "./error.jpg";

const PokemonError = ({message}) => {
  return (
    <div>
        <img src={picture} alt="error"/>
       <h2>{message}</h2> 
    </div>
  )
};

export default PokemonError;