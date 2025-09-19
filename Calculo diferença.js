###                                  ###   
### Função para calcular a diferença ###
###                                  ###    

function calcularDiferenca(num1, num2) {
  return Math.abs(num1 - num2);
}

// Entrada do usuário
const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));

// Cálculo da diferença
const diferenca = calcularDiferenca(numero1, numero2);

// Exibição do resultado
alert(`A diferença entre ${numero1} e ${numero2} é: ${diferenca}`);
