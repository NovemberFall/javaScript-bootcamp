document.getElementById('city').oninvalid = (event) => {
    document.getElementById('error').removeAttribute('hidden');
}

document.getElementById('form').onsubmit = (event) => {
    document.getElementById('form').setAttribute('hidden', '');
    document.getElementById('thanks').removeAttribute('hidden');

    event.preventDefault();
}
