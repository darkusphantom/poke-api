// Consumo de API con fetch
/*
fetch(URL_POKEMON)
  .then(res => res.json())
  .then(data => {
    const pokemon = data.results[9];
    console.log(data.results[9]);
    
    const pokemonName = pokemon.name;
    const pokemonDOM = document.querySelector('#pokemon-name');
    pokemonDOM.innerText += ` ${pokemonName}`;
  })
  */

