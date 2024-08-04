


function calcpasso() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var botao = document.getElementById('botao')

    var inicio = Number(inicio.value)
    var passo = Number(passo.value)
    var fim = Number(fim.value)

    for (var inicio; inicio <= fim; inicio += passo) {
        if (inicio + passo > fim) {
            res.innerHTML += inicio
        }
        else {
        res.innerHTML += `${inicio} > `
        }
    }
}

botao.addEventListener('click', () => {
    calcpasso()
})