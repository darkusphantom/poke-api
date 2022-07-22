//const URL = 'http://acnhapi.com/v1a';
const URL_POKEMON = 'https://pokeapi.co/api/v2';

const indexRandom = (number) => {
  const value = Math.floor(Math.random() * number);
  return value > 0 ? value : value + 1;
};

const loadPokeAPI = async (url) => {
  const pokemons = await fetch(`${url}/pokemon/`);
  const pokemonsData = await pokemons.json();

  let pokemonId = indexRandom(pokemonsData.count);

  const pokemon = await fetch(`${url}/pokemon/${pokemonId}`);
  const pokemonData = await pokemon.json();

  const pokemonName = pokemonData.name;
  const pokemonImg = pokemonData.sprites.front_default;

  const pokemonDOM = document.querySelector('#random-pokemon-name');
  pokemonDOM.innerText = `Pokemon: ${pokemonName}`;
  
  const pokemonImgDOM = document.querySelector('#random-pokemon-img');
  pokemonImgDOM.src = pokemonImg;
  pokemonImgDOM.alt = pokemonImg;
};

//const loadFavoriteAPI = async (url) => {};

loadPokeAPI(URL_POKEMON)

const btnRandomPokemon = document.querySelector('#btn-random-pokemon');
btnRandomPokemon.addEventListener('click', async () => {
  pokeAPI(URL_POKEMON)
})
