function validaFormulario() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const numero = document.getElementById("numero").value.trim();

    if (nome && email && numero) {
        alert("Prontinho, você receberá as novidades por email.");
        return true;
    } else {
        alert("Por favor, preencha os campos nome, email e telefone!");
        return false; // impede o envio
    }
}
