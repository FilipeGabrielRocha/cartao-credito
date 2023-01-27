let numeroDoCartao = document.querySelector('.numero-do-cartao-input')
numeroDoCartao.oninput = () => {
    document.querySelector('.numero-card').innerText = numeroDoCartao.value
}

let nomeDoTitular = document.querySelector('.nome-do-titular-input')
nomeDoTitular.oninput = () => {
    document.querySelector('.nome-titular').innerText = nomeDoTitular.value
}

let codigoDeSeguranca = document.querySelector('.codigo-de-seguranca-input')
codigoDeSeguranca.oninput = () => {
    document.querySelector('.cvv').innerText = codigoDeSeguranca.value
}

let memberSinceMes = document.querySelector('.member-since-month')
memberSinceMes.oninput = () => {
    document.querySelector('.data-member-since-mes').innerText = memberSinceMes.value
}

let memberSinceAno = document.querySelector('.member-since-year')
memberSinceAno.oninput = () => {
    document.querySelector('.data-member-since-ano').innerText = memberSinceAno.value
}

let validThruMes = document.querySelector('.valid-thru-month')
validThruMes.oninput = () => {
    document.querySelector('.data-valid-thru-mes').innerText = validThruMes.value
}

let validThruAno = document.querySelector('.valid-thru-year')
validThruAno.oninput = () => {
    document.querySelector('.data-valid-thru-ano').innerText = validThruAno.value
}

