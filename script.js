const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')
const mensaje = document.querySelector('#mensaje')


let fontSize = 2

let messages = [
  'Entonces señora Lucia',
  'Tal vez señorita Lucia',
  'Entonces Señorita',
  'Mi peliona',
  'Mi regañona',
  'Entonces mi Vane',
  'Preferiblemente Amor'
]


let miVariable = 0


buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`
  buttonNo.textContent = messages[miVariable]

  if (miVariable < messages.length - 1) {
    miVariable++;
    buttonNo.textContent = messages[miVariable];
  } else {
    messages[messages.length - 1]
  }
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
  if (miVariable == messages.length - 1) {
    mensaje.textContent = "Te amo con todo mi corazon Amor ♥"
  } else if (miVariable == messages.length - 2) {
    mensaje.textContent = "Te amo con todo mi corazon mi Vane ♥";
  } else {
    mensaje.textContent = "Te amo con todo mi corazon Amor ♥"
  }
  
})


document.getElementById('continue').onclick = function() {
  window.location.href = 'me.html'; // Aquí puedes especificar la URL a la que deseas redireccionar
};