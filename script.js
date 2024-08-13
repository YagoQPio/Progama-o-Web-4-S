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

    if (!/^\d{11}$/.test(cpf)) {
        alert('O CPF deve conter exatamente 11 dígitos numéricos.');
        return;
    }

    // Se todos os campos estão válidos, você pode prosseguir com o envio do formulário
    alert('Formulário enviado com sucesso!');
});
