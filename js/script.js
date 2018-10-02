// Fazer um algoritmo para converter decimal para binario, e ao contrario
// para compilar gcc index.c -o <nome do arquivo a ser compilado>

let btn = document.getElementById('btn');
let btn1 = document.getElementById('btn1');

btn.onclick = () => {
    let x = '';
    let num = parseInt(document.getElementById('decimal').value)
    let i = 0;
    let lista = [];
    let binarioArray = [];
    let cont = 0;
        if(isNaN(num) == true ) {
            alert("Informe um numero primeiro")
        } else {
            while (true) {
                x = parseInt(num % 2)
                num = parseInt(num / 2)
                lista[i] = x 
                i++
                if (num <= 0) {
                    for (let i = lista.length - 1; 0 <= i; i--) {
                        binarioArray[cont] = lista[i]
                        cont ++
                    }
                    break
                }
            }
            let binarioString = binarioArray.toString('');
            while (binarioString.search(',') > '0') {
                binarioString = binarioString.replace(',', '');
            }
            let resp = document.getElementById('binario').value = binarioString;
        }
    }        

btn1.onclick = () => {
    let x = '';
    let num1 = parseInt(document.getElementById('decimal1').value)
    let i = 0;
    let lista = [];
    let hexadecimalArray = [];
    let hexa = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    let cont = 0;
    if(isNaN(num1) == true ) {
        alert("Informe um numero primeiro")
    } else {
        while (true) {
            x = parseInt(num1 % 16)
            num1 = parseInt(num1 / 16)
            lista[i] = x 
            i++
            if (num1 <= 0) {
                for (let i = lista.length - 1; 0 <= i; i--) {
                    hexadecimalArray[cont] = lista[i]
                    if(hexadecimalArray[cont] >= 10) {
                        hexadecimalArray[cont] = hexa[hexadecimalArray[cont]]
                    }
                    cont ++
                }
                break
            }
        }
        let hexadecimalString = hexadecimalArray.toString('');

        while (hexadecimalString.search(',') > '0') {
            hexadecimalString = hexadecimalString.replace(',', '');
        }
        let resp = document.getElementById('hexadecimal').value = hexadecimalString;
    }
}
