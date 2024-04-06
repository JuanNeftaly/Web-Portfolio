const pokemon = [
    { name: 'Pikachu', type: 'Electric', level: 25 },
    { name: 'Bulbasaur', type: 'Grass', level: 20 },
    { name: 'Charizard', type: 'Fire', level: 36 },
    { name: 'Squirtle', type: 'Water', level: 18 },
    { name: 'Jigglypuff', type: 'Normal', level: 22 },
];

// guardar en un array los tipo fuego y guardarlos en nuevo array 
function getType(arreglo) {
    // encontrando pokemons 
    pokemon.forEach(element => {
        if (element.type === 'Fire') {
            let result = [element.name, 'Fire']
            console.log(result);
        }
    });
}
console.log('Pokemons tipo fuego');
console.log(getType(pokemon));

// utilizar metodo array para encontrar todos los pokemon de nivel 30 o superior

function getLevel(arreglo) {
    // encontrando pokemons
    pokemon.forEach(element => {
        if (element.level >= 30) {
            let result = [element.name, 'Fire']
            console.log(result);
        }
    });
}
console.log('Pokemons nivel 30 o superior ');
console.log(getLevel(pokemon));


// calcular la cantidad de pokemons en la lista original

function cuantosHay(arreglo) {
    for (let i = 0; i < pokemon.length; i++) {
        return console.log(pokemon.length);
    }
}
console.log('Tenes esta cantidad de pokemons');
console.log(cuantosHay(pokemon));

// no entiendo porque me tira undefined gg 