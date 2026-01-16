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

//ciclo for of

for (let squadra of squadre) {
    squadra.punti =Math.floor(Math.random() *50) + 1; //numeri casuali da 1 a 50

    squadra.falli = Math.floor(Math.random() * 30) + 1; //numeri casuali da 1 a 30;


}

//creo nuovo array con nome e falli

const nomeEFalli = [ ];

for (let squadra of squadre) {
    nomeEFalli.push({
        nome: squadra.nome,
        falli: squadre.falli

    })


}

/stampo in console
console.log("Tutte le squadre:", squadre);
console.log("Soltanto nomi e falli:", nomeEFalli);







