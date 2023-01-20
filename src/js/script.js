document.querySelector('.numero-do-cartao-input').oninput = () => {
    document.querySelector('.numero-card').innerText = document.querySelector('.numero-do-cartao-input').value
}

document.querySelector('.nome-do-titular-input').oninput = () => {
    document.querySelector('.nome-titular').innerText = document.querySelector('.nome-do-titular-input').value
}

document.querySelector('.codigo-de-seguranca-input').oninput = () => {
    document.querySelector('.cvv').innerText = document.querySelector('.codigo-de-seguranca-input').value
}

document.querySelector('.member-since-month').oninput = () => {
    document.querySelector('.data-member-since-mes').innerText = document.querySelector('.member-since-month').value
}

document.querySelector('.member-since-year').oninput = () => {
    document.querySelector('.data-member-since-ano').innerText = document.querySelector('.member-since-year').value
}

document.querySelector('.valid-thru-month').oninput = () => {
    document.querySelector('.data-valid-thru-mes').innerText = document.querySelector('.valid-thru-month').value
}

document.querySelector('.valid-thru-year').oninput = () => {
    document.querySelector('.data-valid-thru-ano').innerText = document.querySelector('.valid-thru-year').value
}

