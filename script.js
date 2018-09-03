let btn = document.getElementById('btn');

btn.onclick = () => {
    let x = '';
    let num = parseInt(document.getElementById('decimal').value)
    let i = 0;
    let lista = [];
    let binaritoArray = [];
    let cont = 0;

    while (true) {
        
        x = parseInt(num % 2)
        num = parseInt(num / 2)
        lista[i] = x 
        i++
        if (num <= 0) {
            for (let i = lista.length - 1; 0 <= i; i--) {
                
                binaritoArray[cont] = lista[i]
                cont ++
            }
            
            break
        }
    }
    let binarioSting = binaritoArray.toLocaleString('');

    while (binarioSting.search(',') > '0') {
        binarioSting = binarioSting.replace(',', '');
    }
    
    let resp = document.getElementById('binario').value = binarioSting;
}
