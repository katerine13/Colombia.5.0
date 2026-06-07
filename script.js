function buscarTermino() {
    var texto = document.getElementById('buscar').value.toLowerCase();
    var filas = document.querySelectorAll('#tabla tbody tr');
    var visibles = 0;

    filas.forEach(function(fila) {
      if (fila.innerText.toLowerCase().includes(texto)) {
        fila.classList.remove('fila-oculta');
        visibles++;
      } else {
        fila.classList.add('fila-oculta');
      }
});
document.getElementById('contador').textContent = visibles + ' términos';
  }
  function abrirModal() {
    document.getElementById('modal').classList.add('abierto');
  }

  function cerrarModal() {
    document.getElementById('modal').classList.remove('abierto');
  }
  document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) cerrarModal();
  });