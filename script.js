// Fazer um algoritmo para converter decimal para binario, e ao contrario
// para compilar gcc index.c -o <nome do arquivo a ser compilado>

let btn = document.getElementById('btn');

btn.onclick = () => {
    let x = '';
    let num = parseInt(document.getElementById('decimal').value)
    let i = 0;
    let lista = [];
    let teste = [];
    let cont = 0;

    while (true) {
        
        x = parseInt(num % 2)
        num = parseInt(num / 2)
        lista[i] = x 
        i++
        if (num <= 0) {
            for (let i = lista.length - 1; 0 <= i; i--) {
                
                teste[cont] = lista[i]
                cont ++
            }
            
            break
        }
    }
    let seila = teste.toLocaleString('');

    while (seila.search(',') > '0') {
        seila = seila.replace(',', '');
    }
    
    let resp = document.getElementById('binario').value = seila;
}
