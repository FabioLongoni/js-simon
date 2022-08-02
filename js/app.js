

let generatorNumbers = Array.from({length: 5}, () => Math.floor(Math.random() * 100) + 1);
console.log(generatorNumbers);

alert(generatorNumbers);

setTimeout(() => {
    const utentNumbers = [];
    while (utentNumbers.length < 5) {
        i = prompt('inserisci un numero');
        utentNumbers.push(i);
        console.log(utentNumbers)
    }
}, 5000)