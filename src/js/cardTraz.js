const cardTraz = document.querySelector(".cardTraz")

cardTraz.addEventListener("mousemove", cardEffect)
cardTraz.addEventListener("mouseleave", cardBack)
cardTraz.addEventListener("mouseenter", cardEnter)

function cardEffect(event) {
    const cardLargura = cardTraz.offsetWidth
    const cardAltura = cardTraz.offsetHeight
    const centroX = cardTraz.offsetLeft + cardLargura / 2
    const centroY = cardTraz.offsetTop + cardAltura / 2
    const posicaoX = event.clientX - centroX
    const posicaoY = event.clientY - centroY

    const rotacaoX = +1 * 25 * posicaoY / (cardAltura / 2)
    const rotacaoY = -1 * 25 * posicaoX / (cardLargura / 2)

    cardTraz.style.transform = `perspective(500px) rotateX(${rotacaoX}deg) rotateY(${rotacaoY}deg)`
}

function cardBack(event) {
    cardTraz.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`
    cardTransicao()
}

function cardTransicao() {
    clearInterval(cardTraz.transitionId)
    cardTraz.style.transition = "transform 400ms"
    cardTraz.transitionId = setTimeout(() => {
        cardTraz.style.transition = ''
    }, 400)
}

function cardEnter(event) {
    cardTransicao()
}