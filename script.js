let btn = document.getElementById('btn');

btn.onclick = () => {
    let x = '';
    let num = parseInt(document.getElementById('decimal').value)
    let i = 0;
    let lista = [];
    let binarioArray = [];
    let cont = 0;

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
    let binarioString = binarioArray.toLocaleString('');

    while (binarioString.search(',') > '0') {
        binarioString = binarioString.replace(',', '');
    }
    
    let resp = document.getElementById('binario').value = binarioString;
}
