function showAlert() { alert('Hola, esta es una alerta desde JavaScript!'); }

const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})

function validateForm () {
    const emailImput = document.getElementById('email')
    const email = emailImput.value;
    if (!validateEmail(email)) {
        alert('Por favor ingrese una direccion de email valida.');
    } else {
        alert('Correo electronico enviado correctamente.');
    }
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}