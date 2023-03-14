/* Se listarmos todos os números naturais abaixo de 10 que são múltiplos de 3 ou 5, obtemos 3, 5, 6 e 9. 
A soma desses múltiplos é 23.
Encontre a soma de todos os múltiplos de 3 ou 5 abaixo de 1000.*/
const sum = n => {
    const multiples = [];
    const arr = [];

    for(let i = 1; i < n; i++){
        arr.push(i);
    };

    arr.map(ns => {           
        if( ((ns % 3) == 0) || (( ns % 5) == 0) ){
            multiples.push(ns); // poderia usar um somatório de ns em uma váriavel qualquer e dar o return dela no final de sum.
        };
    });

    return multiples.reduce((somatorio, atual) => {return somatorio + atual}, 0);
};

console.log(sum(1000)); //233168
