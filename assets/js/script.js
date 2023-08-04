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

const form = document.getElementById('contact-form');
const correoInput = document.getElementById('correo');

form.addEventListener('submit', function (event) {
  if (!form.checkValidity()) {
    event.preventDefault(); 
    alert('Por favor, llene todos los campos correctamente.');
}
if (!form.checkValidity()) {
  event.preventDefault(); 
  alert('Por favor, llene todos los campos correctamente.');
} else {
    const correoValue = correoInput.value;
    const correoRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{1,3}$/; // Expresión regular para validar el correo
    if (!correoRegex.test(correoValue)) {
        event.preventDefault(); 
        alert('Por favor, ingrese un correo válido: con @ y extensión final después del punto.');
    }
}
});

  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Previene el envío del formulario por defecto

    // Validar el formulario
    if (validarFormulario()) {
      // Si todas las validaciones son exitosas, muestra el alert
      alert('El correo fue enviado exitosamente');
      // Aquí puedes agregar el código para enviar el formulario al servidor si es necesario
    }
  });

  function validarFormulario() {
    // Aquí puedes agregar tus validaciones personalizadas para cada campo del formulario
    // Retorna true si todas las validaciones son exitosas, o false si alguna falla

    // Por ejemplo, puedes validar el correo usando la expresión regular que mencionamos anteriormente
    const correoInput = document.getElementById('correo');
    const correo = correoInput.value;
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{1,3}$/;

    if (!regexCorreo.test(correo)) {
      alert('Por favor, asegura que tus datos sean válidos');
      return false;
    }

    // Puedes agregar más validaciones aquí si es necesario

    return true; // Si todas las validaciones son exitosas, retorna true
  }
