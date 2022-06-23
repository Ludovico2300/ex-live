/* CONSEGNA 1:Definita la seguente variabile:

- students: array contenente i nomi di 10 studenti

Stampare su console, per il primo e l’ultimo studente nell’array, le seguenti righe:
	
	“nome studente” è il primo studente
    “nome studente” è l’ultimo studente*/

// let students = ["Ludovico", "Manuel", "Elio", "Alex", "Ciccio", "Ibra", "Pippo"];

// console.log(`${students[0]} è il primo studente`);
// console.log(`${students[students.length -1]} è l'ultimo studente`);

/*CONSEGNA 2:Partendo dall’array precedente creare un ciclo for che scriva su console, per ogni studente:

- “Nome studente” è lo studente numero 0
- “Nome studente” è lo studente numero 1
- Ecc.

Alla fine del ciclo scrivere su console “E Questo è tutto!”*/

// for (let index = 0; index < students.length; index++) {
//     console.log(`${students[index]} è lo studente numero ${index}`);
// }
// console.log("Questo è tutto");

/*CONSEGNA 3: definito un array di 10 elementi numerici e una variabile di tipo stringa chiamata operation definire due funzioni:

- sumAll: restituisce la somma di tutti gli elementi nell’array usando un for
- avgAll: restituisce la media di tutti gli elementi nell’array usando un for 

Il programma chiamerà la funzione sumAll se la variabile operation è uguale a “sum”. Oppure chiamerà avgAll se la variabile operation è uguale a “avg”*/


const NUM = [5, 8, 7, 8, 5, 5, 3, 9, 4, 23];

const operation = "";

function sumAll(arr) {
    let temp = 0;
    for (let index = 0; index < arr.length; index++) {
        temp += arr[index]; //sintassi ridotta per x = x + y
        
    }
    return temp;
}

function avgAll(arr) {
    let temp1 = 0;
    for (let index = 0; index < arr.length; index++) {
        temp1 += arr[index];
        
    }
    let avg = temp1 / arr.length;
    return avg;
}

console.log(sumAll(NUM));
console.log(avgAll(NUM));