let num = document.getElementById('inum')
let res = document.getElementById('ires')
const botao = document.getElementById('botao')

botao.addEventListener('click', () => {
    mostratabuada()
})
 
function mostratabuada() {
    let n = Number(num.value)
    let c = 1
    
    if (num.value.length == 0) {
        window.alert('[ERRO]. Digite um número por favor')
    }

    else {

    while (c <= 10) {
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        res.appendChild(item)
        c++
    }
    }
}