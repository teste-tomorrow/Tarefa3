// =============================================
// ÁREA DE CÓDIGO COMUM - NÃO ALTERAR
// =============================================

function getValues() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    if (num1 === '' || num2 === '') {
        alert('ERRO: Por favor, preencha os dois valores.');
        return [null, null];
    }
    return [parseFloat(num1), parseFloat(num2)];
}

function displayResult(value) {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `C:> Resultado: ${value}`;
}


// =============================================
// ÁREA DE CÓDIGO DOS ALUNOS
// =============================================

// ---------- CÓDIGO DO BOTÃO 1 (JOHN DOE) ----------
document.getElementById('btn-aluno1').addEventListener('click', () => {
    const [val1, val2] = getValues();
    if (val1 === null) return; // Interrompe se os valores forem inválidos
    const resultado = val1 + val2;
    displayResult(resultado);
});

// ---------- COLE AQUI O CÓDIGO DO BOTÃO 2 ----------


// ---------- COLE AQUI O CÓDIGO DO BOTÃO 3 ----------

// ---------- COLE AQUI O CÓDIGO DO BOTÃO 23 ----------

### Função `IMC`

Esta função recebe `PESO` e `ALTURA`, calcula o IMC e chama a função `displayResult` para exibir o resultado, mantendo a mesma estrutura do seu exemplo.

/**
 * Calcula o Índice de Massa Corporal (IMC) e exibe o resultado.
 * Mantém a estrutura e nomenclatura do código original para evitar conflitos.
 *
 * @param {number} PESO - O peso da pessoa em quilogramas (ex: 70).
 * @param {number} ALTURA - A altura da pessoa em metros (ex: 1.75).
 */
function IMC(PESO, ALTURA) {
    // Atribuindo os parâmetros às variáveis com os mesmos nomes da estrutura original.
    const val1 = PESO;
    const val2 = ALTURA;

    // Checagem para garantir que os valores são válidos para o cálculo.
    // O peso e a altura devem ser números positivos.
    if (typeof val1 !== 'number' || typeof val2 !== 'number' || val1 <= 0 || val2 <= 0) {
        // Opcional: você pode querer exibir uma mensagem de erro aqui.
        // displayResult("Por favor, forneça valores válidos.");
        return; // Interrompe se os valores forem inválidos.
    }

    // A fórmula do IMC é PESO / (ALTURA * ALTURA).
    const resultado = val1 / (val2 * val2);

    // Utiliza a mesma função do seu código original para exibir o resultado.
    displayResult(resultado);
}

// etc...
