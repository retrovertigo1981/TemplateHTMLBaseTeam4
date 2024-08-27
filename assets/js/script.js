// Obtener los elementos
const contactForm = document.getElementById('contactForm')
const name = document.getElementById('inputName')
const email = document.getElementById('inputEmail')
const comment = document.getElementById('inputComment')  

const btn = document.querySelector('.btn-contact');
const modal = document.getElementById('modalContacto');
const span = document.getElementsByClassName("close")[0];

// Cuando se hace clic en el botón, mostrar el modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Cuando se hace clic en la "x", cerrar el modal
span.onclick = function() {
  modal.style.display = "none";
}

contactForm.addEventListener('submit', function(event){
  event.preventDefault();

  // Obtener los valores actualizados de los inputs (dentro del evento)
  const nameValue = name.value;
  const emailValue = email.value;
  const commentValue = comment.value;

  // Mostrar alerta y cerrar modal
  alert(`
    Los datos han sido ingresados con éxito:
      Nombre: ${nameValue}
      Correo: ${emailValue}
      Comentarios: ${commentValue}
    Pronto responderemos a tu solicitud`);
  modal.style.display = "none";

  // Limpiar el formulario
  contactForm.reset();
});
