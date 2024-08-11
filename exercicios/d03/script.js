let num = document.getElementById('inum')
let list = document.getElementById('ilist')
let botao = document.getElementById('botao')
let valores = []

botao.addEventListener('click', () => {
    addnumber()
})

function isnumber(param) {
    if (param.value > 0 && param.value <= 100) {
        return true   
    }
    else {
        return false
    }
}

function inlist(param) {
    if (param.value in valores.value) {
        return true
    }

    else {
        return false
    }
}

 
function addnumber() {
    let item = document.createElement('option')
 
    if (isnumber(num.value) == true && inlist(num.value) == true) {
        item.text = `Valor ${num.value} adicionado`
        valores.push(num.value)
        list.appendChild(item)
    }

    else {
        alert('[ERRO]. Digite um número válido')
    }
  
}
