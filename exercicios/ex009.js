function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('image')
    var corpo = document.getElementsByTagName('body')[0]
    var cump = document.getElementsByTagName('p')[1]
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora < 12) {
        cump.innerHTML = '<b>Bom dia!</p>'
        img.src = '../img/amanhecer.jpg'
        corpo.style.backgroundColor = 'rgb(236, 217, 126)'
    } else if (hora < 18) {
        cump.innerHTML = '<b>Boa tarde!</p>'
        img.src = '../img/tarde.webp'
        corpo.style.backgroundColor = 'rgb(144, 178, 219)'
    } else {
        cump.innerHTML = '<b>Boa noite!</p>'
        img.src = '../img/noite.jpg'
        corpo.style.backgroundColor = 'rgb(17, 37, 106)'
    }
}