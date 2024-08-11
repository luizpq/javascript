let num = document.getElementById('inum')
let list = document.getElementById('ilist')
let botao = document.getElementById('botao')
let botao2 = document.getElementById('botao2')
let res = document.getElementById('res')
let div = document.querySelector('div')
let valores = []

botao.addEventListener('click', () => {
    addnumber()
})

botao2.addEventListener('click', () => {
    answer()
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
        valores.push(Number(num.value))
        list.appendChild(item)
        res.innerHTML = ''
    }

    else {
        alert('[ERRO]. O número é inválido ou já foi digitado')
    }
    num.value = ''
    num.focus()
}

    function answer() {
      
        if (valores.length == 0) {
            alert('Adicione um valor antes de Finalizar')
        }
        else {
            let tot = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0
      
            for (let pos in valores) {
                if (valores[pos] > maior) {
                    maior = valores[pos]
                }
                if (valores[pos] < menor) {
                    menor = valores[pos]
                }
            }

            for (let pos in valores) {
                soma += valores[pos]
            }

            media = soma / valores.length
            

            res.innerHTML = ''
            res.innerHTML += `<p>Ao todo temos ${tot} valores registrados</p>`
            res.innerHTML += `<p>O maior número digitado foi ${maior}</p>`
            res.innerHTML += `<p>O menor número digitado foi ${menor}</p>`
            res.innerHTML += `<p>A soma entre todos os valores é ${soma}</p>`
            res.innerHTML += `<p>A média dos números é ${media}</p>`
    }

    }
