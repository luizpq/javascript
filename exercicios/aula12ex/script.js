function verificar() {
 
    var agora = new Date()
    var anoAtual = agora.getFullYear()
    var nasc = document.getElementById('iano')
    var res = document.getElementById('res')
    if (Number(nasc.value) < 1900 || Number(nasc.value) > anoAtual) {
        window.alert('[ERRO]. Preencha os dados corretamente.')
    }
    else {
        var fsex = document.getElementsByName('sexo')
        var idade = anoAtual - Number(nasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            var genero = 'Homem'
            if (idade >= 0 && idade <= 10) {

            } 
            else if (idade < 18) {

            }
            else if (idade < 65) {

            }
            else {

            }
        }
        else {
            var genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'foto-bebe-fem.jpg')
            } 
            else if (idade < 18) {

            }
            else if (idade < 65) {

            }
            else {
                
            }
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} de ${idade} anos`
    res.appendChild(img)
}



