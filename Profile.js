document.addEventListener('DOMContentLoaded', function() {
  const nombreSpan = document.getElementById('nombre');
  const emailSpan = document.getElementById('email');
  const passwordSpan = document.getElementById('password');
  const edadSpan = document.getElementById('edad');
  const generoSpan = document.getElementById('genero');
  const pesoSpan = document.getElementById('peso');
  const alturaSpan = document.getElementById('altura');
  const objetivoSpan = document.getElementById('objetivo');
  const pesoObjetivoSpan = document.getElementById('peso-objetivo');
  const enfermedadSpan = document.getElementById('enfermedad');
  const fechaObjetivoSpan = document.getElementById('fecha-objetivo');
  const editBtn = document.getElementById('edit-btn');



  // Mostrar los datos en el perfil
  mostrarDatos();

  // Evento click para el botón de editar
  editBtn.addEventListener('click', function() {
    // Aquí puedes agregar el código para editar los datos del perfil
    alert('Función de edición no implementada');
  });
});