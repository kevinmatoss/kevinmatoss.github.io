document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    validarNumero();
  });

  function obterMensagem(n) {
    if (n < 12) return "O valor está muito baixo, seu namorado vai chorar se ficar sabendo disso.";
    if (n == 12) return "Seu namorado definitivamente te ama mais!";
    if (n > 50 && n <= 1000) return "Até que você ama muito, mas seu namorado com certeza te ama mais!";
    else
     return "Boa tentativa, mas o amor do seu namorado por voce, cujo valor beira o infinito, ainda é maior";
  }

  let timeout 

  function validarNumero() {
    if (timeout) clearTimeout(timeout)
    let inputNumero =document.getElementById("numero")
    let caixaDeMensagem = document.getElementById("mensagem")
    let numero = Number(inputNumero.value);
    let mensagem = obterMensagem(numero)

    caixaDeMensagem.innerHTML = mensagem
    caixaDeMensagem.style.display = "block"

    timeout = setTimeout(()=> {
      caixaDeMensagem.style.display = 'none'
    }, 2000)
  }