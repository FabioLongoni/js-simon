
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
    } 
    console.log(utentNumbers);

    //comparazione dei due array 
    for ( i = 0; i < utentNumbers.length; i++ ) {
        if (utentNumbers[i] === generatorNumbers[i]) {
            console.log(utentNumbers[i] + ' hai indovinato');
        }else {
            console.log(utentNumbers[i] + ' non hai indovinato');
        } 
    }    

}, 5000)
 