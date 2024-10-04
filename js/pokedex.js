const pokemonCount = 151;
let pokedex = {}; //? creating a pokedex map. the key will be the numbers from 1-151. {"name", : "bulbasaur", "img" : url, "type" : ["grass", "poison"], "desc" : "...."}

window.onload = async function() {
    // getPokemon(1);

    for (let i = 1; i <= pokemonCount; i++) {
        await getPokemon(i)
    }

    console.log(pokedex)
}

async function getPokemon(num) {
    let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString();

    let response = await fetch(url);
    let pokemon = await response.json();
    // console.log(pokemon);

    let pokemonName = pokemon["name"];
    let pokemonType = pokemon["types"];
    let pokemonIMG = pokemon["sprites"]["front_shiny"];

    response = await fetch(pokemon["species"]["url"]);
    let pokemonDescription = await response.json();

    pokemonDescription = pokemonDescription["flavor_text_entries"][8]["flavor_text"];

    pokedex[num] = {"name" : pokemonName, "img" : pokemonIMG, "types" : pokemonType, "description" : pokemonDescription};
    // console.log(pokemonDescription)
}