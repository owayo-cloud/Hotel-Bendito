const senhaCorreta = "2678";
let nomeUsuario = "";

function login() {
    nomeUsuario = document.getElementById("username").value;
    const senha = document.getElementById("password").value;

    if (senha === senhaCorreta) {
        // Hide the login form and show the main menu
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("mainMenu").style.display = "block";

        // Show welcome message and alert
        alert(`Bem-vindo ao Hotel Bendito, ${nomeUsuario}. É um imenso prazer ter você por aqui!`);
        document.getElementById("welcomeMessage").innerText = `Bem-vindo ao Hotel Bendito, ${nomeUsuario}!`;
    } else {
        alert("Senha incorreta. Tente novamente.");
    }
}

function sair() {
    alert(`Muito obrigado e até logo, ${nomeUsuario}.`);
    location.reload();  // Reload the page to reset everything
}

function reservarQuarto() {
    const diaria = parseFloat(prompt("Informe o valor da diária:"));
    const dias = parseInt(prompt("Informe a quantidade de dias de hospedagem (1 a 30):"));

    if (diaria < 0 || dias < 1 || dias > 30) {
        alert("Valor Inválido");
        return;
    }

    const nomeHospede = prompt("Informe o nome do hóspede:");
    const numeroQuarto = parseInt(prompt("Informe o número do quarto (1 a 20):"));

    // Simulated room reservation confirmation
    alert(`Reserva confirmada para ${nomeHospede} no quarto ${numeroQuarto} por ${dias} dias.`);
}

function cadastrarHospedes() {
    const diaria = parseFloat(prompt("Informe o valor padrão da diária:"));
    let gratuidades = 0;
    let meias = 0;
    let totalHospedagens = 0;

    while (true) {
        const nomeHospede = prompt("Informe o nome do hóspede (ou digite 'PARE' para finalizar):");
        if (nomeHospede === "PARE") break;

        const idade = parseInt(prompt("Informe a idade do hóspede:"));
        if (idade < 6) {
            alert(`${nomeHospede} possui gratuidade`);
            gratuidades++;
        } else if (idade > 60) {
            alert(`${nomeHospede} paga meia`);
            meias++;
            totalHospedagens += diaria / 2;
        } else {
            totalHospedagens += diaria;
        }
    }

    alert(`Quantidade de gratuidades: ${gratuidades}\nQuantidade de meias hospedagens: ${meias}\nValor total: R$ ${totalHospedagens.toFixed(2)}`);
}

function gerenciarEventos() {
    const convidados = parseInt(prompt("Informe o número de convidados:"));

    if (convidados < 1 || convidados > 350) {
        alert("Número de convidados inválido.");
        return;
    }

    let auditório = "Auditório Laranja";
    let adicionais = 0;

    if (convidados > 150) {
        if (convidados <= 350) {
            auditório = "Auditório Colorado";
        } else {
            alert("Número de convidados inválido.");
            return;
        }
    } else if (convidados > 150) {
        adicionais = convidados - 150;
        if (adicionais > 70) {
            adicionais = 70;
        }
    }

    alert(`O auditório mais adequado é: ${auditório}. Cadeiras adicionais necessárias: ${adicionais}.`);
}

function togglePassword(){
    const passwordField = document.getElementById("password");
    const toggleIcon = document.getElementById("togglePassword");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    }
}
