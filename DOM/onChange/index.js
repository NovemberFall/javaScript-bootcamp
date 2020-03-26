let input = document.querySelector('input');
let log = document.getElementById('log');

input.onchange = handleChange;

function handleChange(e) {
    log.textContent = `The field value is ${e.target.value.length} character(s) long.`;
}