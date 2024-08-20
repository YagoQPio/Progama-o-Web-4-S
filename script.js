document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário para realizar a validação

    const nome = document.getElementById('nome').value.trim();
    const idade = parseInt(document.getElementById('idade').value, 10);
    const cpf = document.getElementById('cpf').value.trim();

    if (!nome || !idade || !cpf) {
        alert('Todos os campos são obrigatórios.');
        return;
    }

    if (idade < 0 || idade > 150) {
        alert('A idade deve estar entre 0 e 150 anos.');
        return;
    }

    if (!validaCPF(cpf)) {
        alert('CPF inválido.');
        return;
    }

    // Se todos os campos estão válidos, você pode prosseguir com o envio do formulário
    alert('Formulário enviado com sucesso!');
});

function validaCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, ''); // Remove caracteres não numéricos

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return false; // Verifica se o CPF tem 11 dígitos ou é uma sequência repetida
    }

    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) {
        return false;
    }

    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) {
        return false;
    }

    return true; // CPF válido
}
