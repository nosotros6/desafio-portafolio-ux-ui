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
    alert("El correo fue enviado exitosamente (éste es un formulario de prueba con fines académicos. Para contactarme, por favor, usar mis datos personales, ubicados en el footer).");
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
