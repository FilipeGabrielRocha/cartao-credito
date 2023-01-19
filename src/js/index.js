const card = document.querySelector(".container")

card.addEventListener("mousemove", cardEffect)
card.addEventListener("mouseleave", cardBack)
card.addEventListener("mouseenter", cardEnter)

function cardEffect(event) {
    const cardLargura = card.offsetWidth
    const cardAltura = card.offsetHeight
    const centroX = card.offsetLeft + cardLargura / 2
    const centroY = card.offsetTop + cardAltura / 2
    const posicaoX = event.clientX - centroX
    const posicaoY = event.clientY - centroY

    const rotacaoX = +1 * 25 * posicaoY / (cardAltura / 2)
    const rotacaoY = -1 * 25 * posicaoX / (cardLargura / 2)

    card.style.transform = `perspective(500px) rotateX(${rotacaoX}deg) rotateY(${rotacaoY}deg)`
}

function cardBack(event) {
    card.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`
    cardTransicao()
}

function cardTransicao() {
    clearInterval(card.transitionId)
    card.style.transition = "transform 400ms"
    card.transitionId = setTimeout(() => {
        card.style.transition = ''
    }, 400)
}

function cardEnter(event) {
    cardTransicao()
}