
//genero 5 numeri casuali da 1 a 100
let generatorNumbers = Array.from({length: 5}, () => Math.floor(Math.random() * 100) + 1);
console.log(generatorNumbers);

alert(generatorNumbers);

//imposto il timer
setTimeout(() => {
    let utentNumbers = [];
    //chiedo all'utente 5 numeri e subito dopo li pusho nell'array dedicato
    while (utentNumbers.length < 5) {
        i = parseInt(prompt('inserisci un numero'));
        utentNumbers.push(i);
        console.log(utentNumbers);
    } 
    let isEqual = utentNumbers.toString() === generatorNumbers.toString();
    console.log(isEqual + ' i numeri sono uguali');

}, 5000)
 