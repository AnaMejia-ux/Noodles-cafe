const boton = document.getElementById("modo");

boton.addEventListener("click", function () {
  alert("hiciste clic");
  document.body.classList.toggle("oscuro");
});