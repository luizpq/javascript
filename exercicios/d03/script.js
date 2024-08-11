let num = document.getElementById('inum')
let list = document.getElementById('ilist')
let botao = document.getElementById('botao')
let valores = []

botao.addEventListener('click', () => {
    addnumber()
})

function isnumber(n) {
    if (Number(n) > 0 && Number(n) <= 100) {
        return true   
    }
    else {
        return false
    }
}

function inlist(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }

    else {
        return false
    }
}

 
function addnumber() {
    let item = document.createElement('option')
 
    if (isnumber(num.value) && !inlist(num.value, valores)) {
        item.text = `Valor ${num.value} adicionado`
        valores.push(num.value)
        list.appendChild(item)
    }

    else {
        alert('[ERRO]. Digite um número válido')
    }
  
}
