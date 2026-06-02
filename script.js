function mostrarMensagem() {
  let inputNome = document.getElementById("nome");
  let nome = inputNome.value.trim();

  // Verifica se o campo de texto está vazio
    if (nome === "") {
        document.getElementById("resultado").innerHTML = "<strong>Por favor, digite seu nome para receber a mensagem personalizada.</strong>";
        document.getElementById("resultado").style.color = "red";
    }
 // Se não mostra a mensagem na tela
    else {
         // .toUpperCase() transforma o nome em MAIÚSCULO
        let nomeMaiusculo = nome.toUpperCase(); 
        document.getElementById("resultado").innerHTML =
        `<strong>Olá, ${nomeMaiusculo}!</strong> Tenha um dia cheio de conquistas, é o que desejo para você hoje.<br>` + 
        `Um pequeno pensamento positivo pela manhã pode mudar todo o seu dia.`;
         document.getElementById("resultado").style.color = "green";
        // Limpa o campo de texto após o envio
        inputNome.value = "";
            }

 
}
