/**
 * devo creare un array di squadre di calcio
 * dove ogni squadra ha: nome, punti fatti, falli subiti.
 * soltanto il nome deve essere compilato. Punti fatti e falli subiti partono da 0.
 * Riempire Punti fatti e falli subiti con numero random.
 * creare un nuovo array con solo nome e falli subiti.
 * stampo in console
 *  */ 

// creo array di oggetti squadra

const squadre = [ 
    {nome:"Atletico", punti: 0, falli: 0},
    {nome:"Cruzeiro", punti: 0, falli: 0},
    {nome:"Flamengo", punti: 0, falli: 0},
    {nome:"America", punti: 0, falli: 0},
    {nome:"Vasco", punti: 0, falli: 0},

] 
console.table(squadre);

//creo una funzione per generare un numero random tra min e max. La userò per reimpire i punti e i falli:

function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;


}

for(let squadra of squadre) {
    squadra.punti = numeroRandom(1, 50); //punti casuali da 1 a 50
    squadra.falli = numeroRandom(1, 30); //falli casuali da 1 a 30
}

// ora devo creare un nuovo array che contenga solo nome e falli subiti. Uso il map che ci ha insegnato Tiziano. e arrow function

const nomiEFalli = squadre.map(squadra)


