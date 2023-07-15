/* Obtém os valores dos campos de entrada da formula "M = C (1+i)t" */
function calcularJuros() {
  let principal = parseFloat(document.getElementById("principal").value);
  let taxa = parseFloat(document.getElementById("taxa").value);
  let tempo = parseFloat(document.getElementById("tempo").value);

  if (isNaN(principal) || isNaN(taxa) || isNaN(tempo)) {
    document.getElementById("resultado").textContent = "Operação Inválida";
    return;
  }

  let jurosCompostos = principal * Math.pow(1 + taxa / 100, tempo);

  let resultadoFormatado = "Valor futuro: R$ " + formatarNumero(jurosCompostos);

  document.getElementById("resultado").textContent = resultadoFormatado;

  let reiniciarBtn = document.getElementById("reiniciarBtn");
  reiniciarBtn.style.display = "block";
}

function formatarNumero(numero) {
  return numero.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function reiniciar() {
  document.getElementById("principal").value = "";
  document.getElementById("taxa").value = "";
  document.getElementById("tempo").value = "";

  document.getElementById("resultado").textContent = "";

  let reiniciarBtn = document.getElementById("reiniciarBtn");
  reiniciarBtn.style.display = "none";
}
