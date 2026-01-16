/* Snack 1 

devo creare un array di oggetti bici
ogni bici ha: nome, peso
devo trovare la bici col peso minore
stamparla in console

 */

//creo l'array di oggetti:

const biciclette = [ 
    {nome: "Brasiliana", peso: 7.5},  // 0
    {nome: "Italiana", peso: 9.2},    // 1
    {nome: "Tedesca", peso: 6.8},     // 2
    {nome: "Spagnola", peso: 7.1},    // 3
    {nome: "Americana", peso: 6.5},   // 4

] 

//faccio una variabile let per la bici più leggera

let biciPesoMinore = biciclette [0];

//schelgo il ciclo for of per confrontare i pesi delle bici

for (let bici of biciclette) {
    if(bici.peso < biciPesoMinore.peso) {

        biciPesoMinore === bici;
    }


}

//stampo il risultato
console.log("La bici più leggera è:", biciPesoMinore.nome, "con peso di:" biciPesoMinore.peso "kg");
    