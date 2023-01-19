const cardFrente = document.querySelector('.cardFrente')

cardFrente.addEventListener("mousemove", cardEffect)
cardFrente.addEventListener("mouseleave", cardBack)
cardFrente.addEventListener("mouseenter", cardEnter)

function cardEffect(event) {
    const cardLargura = cardFrente.offsetWidth
    const cardAltura = cardFrente.offsetHeight
    const centroX = cardFrente.offsetLeft + cardLargura / 2
    const centroY = cardFrente.offsetTop + cardAltura / 2
    const posicaoX = event.clientX - centroX
    const posicaoY = event.clientY - centroY

    const rotacaoX = +1 * 25 * posicaoY / (cardAltura / 2)
    const rotacaoY = -1 * 25 * posicaoX / (cardLargura / 2)

    cardFrente.style.transform = `perspective(500px) rotateX(${rotacaoX}deg) rotateY(${rotacaoY}deg)`
}

function cardBack(event) {
    cardFrente.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`
    cardTransicao()
}

function cardTransicao() {
    clearInterval(cardFrente.transitionId)
    cardFrente.style.transition = "transform 400ms"
    cardFrente.transitionId = setTimeout(() => {
        cardFrente.style.transition = ''
    }, 400)
}

function cardEnter(event) {
    cardTransicao()
}