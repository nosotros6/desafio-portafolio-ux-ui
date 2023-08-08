// const logoContainer = document.querySelector(".logo-container");
// const customTooltip = document.querySelector(".custom-tooltip");

// logoContainer.addEventListener("mouseover", function () {
//   customTooltip.style.display = "block"; // Mostrar el tooltip al pasar el cursor sobre el div
// });

// logoContainer.addEventListener("mouseout", function () {
//   customTooltip.style.display = "none"; // Ocultar el tooltip al quitar el cursor del div
// });
function obtenerFechaActual() {
  const dias = [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
  ];
  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  const fecha = new Date();
  const diaSemana = dias[fecha.getDay()];
  const dia = fecha.getDate();
  const mes = meses[fecha.getMonth()];
  const anio = fecha.getFullYear();
  return `${diaSemana}, ${dia} de ${mes} de ${anio}`;
}
function actualizarFechaActual() {
  const elementoFecha = document.getElementById("fecha-actual");
  elementoFecha.textContent = obtenerFechaActual();
}
actualizarFechaActual();
setInterval(actualizarFechaActual, 1000);
// FORMULARIO
const form = document.getElementById("contact-form");
const correoInput = document.getElementById("correo");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!form.checkValidity()) {
    alert("Por favor, llene todos los campos correctamente.");
  } else if (!validarCorreo(correoInput.value)) {
    alert(
      "Por favor, ingrese un correo válido: con @ y extensión final después del punto."
    );
  } else {
    alert("El correo fue enviado exitosamente");
    limpiarFormulario(); 
  }
});
function validarCorreo(correo) {
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{1,3}$/;
  return regexCorreo.test(correo);
}
function limpiarFormulario() {
  form.reset(); 
}
