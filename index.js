//Questão 1
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(`A resposta da primeira questão é = ${SOMA}`);// Irá imprimir 91

//---------------------------------------------------------------------------------------------------------------------------------------------\\

//Questão 2
const numero = 10; // *Usuario deve informar um numero*

const fibonacci = [0, 1]; // Inicia a sequência de Fibonacci
while (fibonacci[fibonacci.length - 1] < numero) {
  const proximo = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
  fibonacci.push(proximo);
} //Na linha 18, é criado um array fibonacci que inicia com os dois primeiros números da sequência de Fibonacci, que são 0 e 1.

// Na linha 19, é criado um loop while que vai calcular a sequência de Fibonacci até que o último número do array fibonacci seja maior ou igual ao número digitado pelo usuário (armazenado na variável numero).
// Na linha 20, é criada uma variável "proximo" que calcula o próximo número da sequência de Fibonacci a partir dos dois últimos números do array fibonacci. Essa soma é feita com a fórmula fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]. Por exemplo, se fibonacci estiver armazenando [0, 1, 1], proximo será igual a 2.
// Na linha 21, o número calculado em proximo é adicionado ao final do array fibonacci utilizando o método push. Assim, o array fibonacci vai aumentando de tamanho a cada iteração do loop.
// O loop while continua executando até que o último número do array fibonacci seja maior ou igual ao número digitado pelo usuário (armazenado na variável numero). Isso é feito verificando a condição fibonacci[fibonacci.length - 1] < numero. A cada iteração, o loop calcula um novo número da sequência de Fibonacci e adiciona ao final do array fibonacci.


if (fibonacci.includes(numero)) {
  console.log(`A resposta da segunda  questão é = O número ${numero} pertence à sequência de Fibonacci!`);
} else {
  console.log(`A resposta da segunda  questão é = O número ${numero} não pertence à sequência de Fibonacci.`);
}
//usei o método includes que retornará um true/false para verificar se o numero informado pelo usuario pertence a sequencia de fibonacci

//---------------------------------------------------------------------------------------------------------------------------------------------\\

//Questão 3
// a) 1, 3, 5, 7, ___ A lógica é adicionar 2 ao número anterior. Portanto, o próximo elemento sera 9.

// b) 2, 4, 8, 16, 32, 64, ____  A lógica é multiplicar o número anterior por 2. Portanto, o próximo elemento seria 128.

// c) 0, 1, 4, 9, 16, 25, 36, ____ Cada número é igual ao anterior acrescido de um número ímpar que segue a sequência 1, 3, 5, 7, 9. Depois devemos fazer a subtração dos dois últimos números, temos que 36 - 25 = 11. Assim, devemos acrescentar 11 + 2 = 13 ao último número, obtendo 36 + 13 = 49.

// d) 4, 16, 36, 64, ____ Aqui é usado uma sequência de numeros base pares e são elevados ao quadrado. Portanto, o próximo elemento seria 100.

// e) 1, 1, 2, 3, 5, 8, ____ A lógica é a soma dos dois números anteriores. Portanto, o próximo elemento seria 13.

// f) 2,10, 12, 16, 17, 18, 19, ____ A lógica é formar uma sequência com os números que iniciam com a letra d. Assim, o próximo número em ordem crescente é 200

//---------------------------------------------------------------------------------------------------------------------------------------------\\

//Questão 4

// Eles se encontrão a 60,9 km de Ribeirão Preto.

// Para determinar o local em que o carro e o caminhão se cruzam podemos colocar o ponto de referência em Ribeirão Preto, então, a equação do carro é:
//x = v1.t "Estabelecendo a equação horária para o carro. Ela relaciona a posição do carro (x) com o tempo (t) e a sua velocidade (v1)."


// Como o caminhão sai de um local 100 km distante do ponto de referência e se aproxima dele, sua equação é:
//y = 100 - v2.t "Estabelecendo a equação horária para o caminhão. Note que o caminhão parte de uma posição inicial de 100 km de distância do ponto de referência, e por isso a sua posição é dada pela diferença entre essa distância e a distância percorrida (v2.t)."


// Como o caminhão tem 2 pedágios como obstáculo e perde 5 minutos em cada um deles, podemos calcular o tempo de viagem sem os obstáculos:
//tso = 100/80 = 1,25h "calculando o tempo de viagem sem os obstáculos para o caminhão, ou seja, o tempo que o caminhão levaria para percorrer 100 km a uma velocidade constante de 80 km/h."


// Porém, como perde 10 minutos (ou 0,17 horas) nos pedágios, o tempo de viagem para o caminhão será de 1,25h+0,17h=1,42h. Sua velocidade média é:
//v2 = 100/1,42 = 70,42 km/h " levando em conta o tempo perdido nos pedágios pelo caminhão e recalculando o tempo de viagem, podemos calcular a velocidade média do caminhão."


// Nas equações horárias podemos limpar o tempo e igualar ambas para achar o ponto em que o carro e o caminhão se cruzam:
// t = x1/v1
// t = 12-100km/-v2
// x1 = x2 => (x/v1) = (x-100/v2) 
// -v2 * x = v1 * x - v1 * 100km " igualando as equações horárias para o carro e o caminhão e resolvendo para a posição de cruzamento (x)."


// x = (v1 * 100)/ (v1 + v2) = 110 * 100 / (110 + 70,6) "substituindo as velocidades encontradas na equação anterior e calculando a posição de cruzamento (x)."
// x = 60,9 km "A posição de cruzamento é de 60,9 km.


//---------------------------------------------------------------------------------------------------------------------------------------------\\

//Questão 5

// Usuario deve digitar uma palavra ou frase e o programa irá inverter a ordem dos caracteres.
let string = "Olá, Mundo!";

// Criando uma variável para armazenar a string invertida
let reversedString = "";

// Iterando por cada caractere da string original de trás para frente e adicionando-os na variável da string invertida
for (let i = string.length - 1; i >= 0; i--) {
  reversedString += string[i];
}

// Imprimindo a string invertida no console
console.log(`A resposta da quinta questão é = ${reversedString}`); // "!odnuM ,álO"