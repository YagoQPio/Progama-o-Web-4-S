document.getElementById('inscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário para realizar a validação

    const nome = document.getElementById('nome').value.trim();
    const idade = document.getElementById('idade').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const endereco = document.getElementById('endereco').value.trim();

    // Validação do Nome: somente letras e acentos
    if (!/^[A-Za-zÀ-ú\s]+$/.test(nome)) {
        alert('O nome deve conter apenas letras e acentos.');
        return;
    }

    // Validação da Idade: números entre 1 e 110
    const idadeNumero = parseInt(idade, 10);
    if (!idade || isNaN(idadeNumero) || idadeNumero <= 0 || idadeNumero > 110) {
        alert('A idade deve ser um número entre 1 e 110.');
        return;
    }

    // Validação do CPF: exatamente 11 números
    if (!/^\d{11}$/.test(cpf) || !validaCPF(cpf)) {
        alert('CPF inválido. Deve conter exatamente 11 números.');
        return;
    }

    // Validação do E-mail: formato básico de e-mail
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('E-mail inválido. Deve conter um "@" e seguir o formato padrão.');
        return;
    }

    // Validação do Telefone: 2 dígitos para DDD seguido de 9 números
    if (!/^\d{2}\d{9}$/.test(telefone)) {
        alert('Telefone inválido. Deve conter o DDD (2 dígitos) seguido de 9 números.');
        return;
    }

    // Validação do Endereço: letras, números e acentos
    if (!/^[A-Za-zÀ-ú0-9\s,]+$/.test(endereco)) {
        alert('Endereço inválido. Deve conter apenas letras, números, espaços e acentos.');
        return;
    }

    // Se todos os campos estão válidos, você pode prosseguir com o envio do formulário
    alert('Formulário enviado com sucesso!');
});

