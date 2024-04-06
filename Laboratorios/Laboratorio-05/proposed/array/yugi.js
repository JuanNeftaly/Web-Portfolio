const yugiohCards = [
    "Dark Magician",
    "Blue-Eyes White Dragon",
    "Exodia the Forbidden One",
    "Cyber Dragon",
    "Elemental HERO Neos",
    "Chaos Dark Magician",
    "Dark Magician Girl",
    "Gravekeeper's Spy",
    "Blue-Eyes Alternative White Dragon",
    "Meteor Dragon",
    "Dragunity - Ascalon",
    "Harpie Lady",
    "Winged Kuriboh",
    "Gamma the Magnet Warrior",
    "Chaos MAX Dragon",
    "Elemental HERO Burstinatrix",
    "The Winged Dragon of Ra",
    "Spirit of Flames",
    "Black Luster Soldier - Envoy of the Beginning",
    "Celtic Guardian",
    "Chaos Sorcerer",
    "Apocalypse Rider - Lord of Despair",
    "Yubel - The Ultimate Nightmare",
    "Terror King Archfiend",
    "Wolf in Sheep's Clothing",
    "Darklord Morningstar",
    "Exiled Force",
    "Obelisk the Tormentor",
    "Red-Eyes Black Dragon",
    "Elemental HERO Neos",
    "Stardust Dragon"
];

// 1. Agregando al array 
yugiohCards.push("Red-Eyes Black Dragon");
console.log(yugiohCards);

// 2. Eliminar el ultimo elemento 
yugiohCards.pop();
console.log(yugiohCards);

// 3. Agregar al inicio de el array a Shinji pajas locas
yugiohCards.unshift("Black Luster Soldier - Envoy of the Beginning");
console.log(yugiohCards);

// 4. Eliminar el primer elemento del array
let removedElement1 = yugiohCards.shift();
console.log("Shit: ", removedElement1);

// 5. Crear un nuevo array 
const extraYugiCards = [
    "Dark Magician Girl",
    "Elemental HERO Neos",
    "Red Dragon Archfiend"
];
console.log(extraYugiCards);

// 6. Concatenar el array con el tocho
for (let i = 0; i < extraYugiCards.length; i++) {
    yugiohCards.push(extraYugiCards[i]);
}
console.log("6:", yugiohCards);

// 7. Eliminar los ultimos 7 elementos
yugiohCards.splice(-7);
console.log("7: ", yugiohCards);

// 8. Invertir el orden
yugiohCards.reverse();
console.log("8: ", yugiohCards);

// 9. Comprobar la salida del array
if (yugiohCards.length === 25) {
    console.log("El array contiene exactamente 25 elementos.");
} else {
    console.log("El array no contiene exactamente 25 elementos.");
}

// 10. Convertirlo en un String
const cadenaDeNombres = yugiohCards.join(", ");
console.log(cadenaDeNombres);

// Adicional: evaUnits
const legendaryCards = yugiohCards.filter(item => {
    return (
        item === "Exodia the Forbidden One," ||
        item === "Dark Magician" ||
        item === "Blue-Eyes White Dragon" ||
        item === "Red-Eyes Black Dragon"
    );
});

console.log(legendaryCards);  