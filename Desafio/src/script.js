function calcularRank() {
    const vitoriasInput = document.getElementById('vitorias');
    const derrotasInput = document.getElementById('derrotas');

    // Verifica se ambos os campos estão preenchidos
    if (vitoriasInput.value === '' || derrotasInput.value === '') {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = 'Por favor, preencha ambos os campos.';
        return;
    }

    const vitorias = parseInt(vitoriasInput.value);
    const derrotas = parseInt(derrotasInput.value);

    // Verifica se vitórias e derrotas possuem valores negativos
    if (vitorias < 0 || derrotas < 0) {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = 'Não é possível realizar a operação com valores negativos.';
        return;
    }
  
    const saldoVitorias = vitorias - derrotas;
    let nivel;
  
    switch (true) {
    case vitorias >= 0 && vitorias <= 10:
        nivel = 'Ferro';
        break;
    case vitorias > 10 && vitorias <= 20:
        nivel = 'Bronze';
        break;
    case vitorias > 20 && vitorias <= 50:
        nivel = 'Prata';
        break;
    case vitorias > 50 && vitorias <= 80:
        nivel = 'Ouro';
        break;
    case vitorias > 80 && vitorias <= 90:
        nivel = 'Diamante';
        break;
    case vitorias > 90 && vitorias <= 100:
        nivel = 'Lendário';
        break;
    default:
        nivel = 'Imortal';
    }
  
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = `O Herói ou a Heroína tem um saldo de ${saldoVitorias} e está no nível de ${nivel}, possuindo um total de ${vitorias} vitória(s)`;
}
