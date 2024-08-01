function verificar() {
 
    var agora = new Date()
    var anoAtual = agora.getFullYear()
    var nasc = document.getElementById('iano')
    var res = document.getElementById('res')
    if (nasc.value.lenth == 0 || Number(nasc.value) > anoAtual) {
        window.alert('ERRO. Preencha os dados corretamente.')
    }
    else {
        var fsex = document.getElementById('isexofem')
        var idade = ano - Number(nasc.value)
        var genero = ''
        if (isexofem[0] = 'Homem')
    }
}

