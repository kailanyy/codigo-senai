function insertionSort(listanumeros) {
    let n = listanumeros.length;
        for (let i = 1; i < n; i++) {
            let numeroAtual = listanumeros[i];
            let x = i-1; 
            while ((x > -1) && (numeroAtual < listanumeros[x])) {
                listanumeros[x+1] = listanumeros[x];
                x--;
            }
            listanumeros[x+1] = numeroAtual;
        }
    return listanumeros;
}

let listanumeros = [5, 2, 4, 6, 1, 3];
insertionSort(listanumeros);
console.log(listanumeros);