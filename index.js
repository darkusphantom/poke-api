//const URL = 'http://acnhapi.com/v1a';
const URL_POKEMON = 'https://pokeapi.co/api/v2';

// Con fetch
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


const indexRandom = (number) => {
  const value = Math.floor(Math.random() * number);
  return value > 0 ? value : value + 1;
};

const pokeAPI = async (url) => {
  const pokemons = await fetch(`${url}/pokemon/`);
  const pokemonsData = await pokemons.json();

  let pokemonId = indexRandom(pokemonsData.count);
  let regionId = 4;

  const pokemon = await fetch(`${url}/pokemon/${pokemonId}`);
  const pokemonData = await pokemon.json();
  const region = await fetch(`${url}/region/${regionId}`);
  const regionData = await region.json();

  const regionName = regionData.name;
  const pokemonName = pokemonData.name;
  const pokemonImg = pokemonData.sprites.front_default;

  const regionDOM = document.querySelector('#region-name');
  regionDOM.innerText = `Region: ${regionName}`;

  const pokemonDOM = document.querySelector('#pokemon-name');
  pokemonDOM.innerText = `Pokemon: ${pokemonName}`;
  
  const pokemonImgDOM = document.querySelector('#pokemon-img');
  pokemonImgDOM.src = pokemonImg;
  pokemonImgDOM.alt = pokemonImg;
};

pokeAPI(URL_POKEMON)

const btnRandomPokemon = document.querySelector('#btn-random-pokemon');
btnRandomPokemon.addEventListener('click', async () => {
  pokeAPI(URL_POKEMON)
})
