let num = document.getElementById('inum')
let list = document.getElementById('ilist')
let botao = document.getElementById('botao')
let valores = []

botao.addEventListener('click', () => {
    addnumber()
})

function isnumber(param) {
    if (num.value > 0 && num.value > 100) {
        alert('[ERRO]. O número digitado não é válido.')   
    }
    else {
        return param
    }
}


 
function addnumber() {
    let item = document.createElement('option')
 
    if (isnumber(num.value) && !inlist(num.value)) {
        item.text = `Valor ${num.value} adicionado`
        valores.push(num.value)
        list.appendChild(item)
    }

    else {
        alert('[ERRO]. Digite um número válido')
    }

   
    
}
