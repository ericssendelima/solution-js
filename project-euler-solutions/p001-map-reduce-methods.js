/* Se listarmos todos os números naturais abaixo de 10 que são múltiplos de 3 ou 5, obtemos 3, 5, 6 e 9. 
A soma desses múltiplos é 23.
Encontre a soma de todos os múltiplos de 3 ou 5 abaixo de 1000.*/
function num(n){
    let sum = 0;
    const multiples = [];
    const arr = [];

    for(let i = 1; i < n; i++){
        arr.push(i);
    };

    arr.map(ns => {           
        if( ((ns % 3) == 0) || (( ns % 5) == 0) ){
            multiples.push(ns);
        };
    });
    
    sum = multiples.reduce((somatorio, atual) => {return somatorio + atual}, 0);

    return sum;
};

console.log(num(1000));//233168
