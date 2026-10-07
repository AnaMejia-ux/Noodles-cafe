// Etapa 1: inicio de sesión (demo: acepta cualquier usuario y contraseña no vacíos)
const form = document.getElementById('loginForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const usuario = document.getElementById('usuario').value.trim();
    const clave = document.getElementById('clave').value;
    const error = document.getElementById('error');
    if (!usuario || !clave) {
      error.textContent = 'Escribe tu usuario o correo y tu contraseña.';
      return;
    }
    sessionStorage.setItem('sesion', usuario);
    window.location.href = 'producto.html'; // Pasa a la etapa 2
  });
}

// Etapa 2: página de producto
const btnAgregar = document.getElementById('agregar');
if (btnAgregar) {
  // Si no hay sesión, regresa al login
  if (!sessionStorage.getItem('sesion')) {
    window.location.href = 'index.html';
  }
  let total = Number(sessionStorage.getItem('carrito') || 0);
  const etiqueta = document.getElementById('carrito');
  const aviso = document.getElementById('aviso');
  etiqueta.textContent = 'Carrito: ' + total;

  btnAgregar.addEventListener('click', function () {
    total++;
    sessionStorage.setItem('carrito', total);
    etiqueta.textContent = 'Carrito: ' + total;
    aviso.textContent = 'Sierra Norte agregado al carrito.';
  });

  document.getElementById('salir').addEventListener('click', function () {
    sessionStorage.removeItem('sesion');
    sessionStorage.removeItem('carrito');
  });
}
