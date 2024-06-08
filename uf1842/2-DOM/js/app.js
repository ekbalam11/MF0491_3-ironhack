/**
 * ¡Buena suerte! ¡Pasa el mensaje!
 */

const btn = document.getElementById('btn-send');
const input = document.querySelector('input');

btn.addEventListener('click', function(){
    console.log(input.value);
    document.getElementById('last-message').textContent = input.value;
    input.value = ""
});
