const pokemonCount = 151;
let pokedex = {}; //? creating a pokedex map. the key will be the numbers from 1-151. {"name", : "bulbasaur", "img" : url, "type" : ["grass", "poison"], "desc" : "...."}

//todo added a pokemon list by iterating through the pokemon array, then while iterating through each pokemon creating a new div for each pokemon. then I am adding the class name "pokemon-name". after that i am creating a node for the pokemon list, and appending each pokemon to that list.

window.onload = async function() {
    // getPokemon(1);

    for (let i = 1; i <= pokemonCount; i++) {
        await getPokemon(i)

        //? <div id="1" class="pokemon-name">Bulbasaur</div>
        let pokemon = document.createElement("div");
        pokemon.id = i;
        pokemon.innerText = i.toString() + ". " + pokedex[i]["name"].toUpperCase();
        pokemon.classList.add("pokemon-name");
        pokemon.addEventListener("click", updatePokemon)
        document.getElementById("pokemon-list").append(pokemon);
    }

    console.log(pokedex)
}

async function getPokemon(num) {
    let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString();

    let response = await fetch(url);
    let pokemon = await response.json();

    let pokemonName = pokemon["name"];
    let pokemonType = pokemon["types"];
    let pokemonIMG = pokemon["sprites"]["front_shiny"];

    response = await fetch(pokemon["species"]["url"]);
    let pokemonDescription = await response.json();

    pokemonDescription = pokemonDescription["flavor_text_entries"][8]["flavor_text"];

    pokedex[num] = {"name" : pokemonName, "img" : pokemonIMG, "types" : pokemonType, "description" : pokemonDescription};
}

function updatePokemon() {
    document.getElementById("pokemon-img").src = pokedex[this.id]["img"]
}