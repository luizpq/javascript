let num = document.getElementById('inum')
let list = document.getElementById('ilist')
let botao = document.getElementById('botao')
 
botao.addEventListener('click', () => {
    addnumber()
})
 
function addnumber() {
    let item = document.createElement('option')
    
    if (num.value > 0 && num.value <= 100) {
        item.text = `Valor ${num.value} adicionado`
        list.appendChild(item)
    }
    else if (num.value == list.value) {
        alert('Número já foi digitado')
    }
}
