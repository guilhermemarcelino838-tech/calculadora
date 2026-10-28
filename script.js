/*getElementById = Ele serve para encontrar, capturar e trazer para o seu código JavaScript um elemento específico da sua página, usando o atributo id que você definiu nele.
Pense nele como o "CPF" do elemento: Como o id no HTML deve ser único (não pode haver dois elementos com o mesmo ID na mesma página), o getElementById vai direto ao ponto e traz exatamente o elemento que você pediu, sem risco de confusão.*/
var input = document.getElementById('tela'),
 
/*querySelectorAll = um método do JavaScript usado para buscar e capturar vários elementos da sua página HTML de uma só vez, utilizando os seletores do CSS (como classes, IDs ou nomes de tags).*/
  numero = document.querySelectorAll(' .numeros div'),
\\rlk
  conta = document.querySelectorAll(' .contas div'),
  resultado = document.getElementById('resultado'),
  limpar = document.getElementById('limpar'),

/*Em calculadoras feitas em JavaScript, existe um pequeno detalhe de lógica muito importante que envolve o botão de igual (=).
Geralmente ela é uma variável do tipo booleana (true ou false)*/
  resultadoEstaMostrado = false;

/*numero.length = mede o tamanho total da variável numero (quantos itens ela tem na lista ou quantos caracteres tem no texto)*/
  for (var i = 0; i < numero.length; i++){

/* .addEventListener = "Adicionar um Ouvinte de Eventos".
 É um método do JavaScript que diz ao navegador: "Fique de prontidão vigiando este elemento, porque eu quero que você faça algo assim que ele sofrer alguma ação".
 
click = o tipo de evento que o ouvinte vai fiscalizar.
Significa que ele só vai disparar a ação quando o usuário der um clique com o mouse (ou um toque com o dedo, se for no celular) em cima daquele botão.

function(e):
É uma função anônima (uma função sem nome) que funciona como uma instrução: "Quando o clique acontecer, execute tudo o que está dentro das chaves {} logo abaixo".

O "e" (abreviação de event / evento) dentro dos parênteses é um parâmetro automático que o JavaScript entrega. Ele guarda várias informações técnicas sobre o clique que acabou de acontecer (como as coordenadas do mouse na tela, em qual elemento foi clicado, etc.).*/
    numero[i].addEventListener("click",function(e){
     
/* .innerHTML = uma propriedade do JavaScript muito poderosa. Ela acessa e lê tudo o que está escrito (ou inserido em HTML) dentro daquele elemento.*/      
      var textoNaTela = input.innerHTML;
     
/* .length = mede o tamanho total (quantos caracteres existem) da palavra ou frase guardada em textoNaTela.
Por exemplo: se a tela da calculadora estiver mostrando "15+8", o length será 4 (porque tem 4 caracteres).

- 1 no JavaScript (e na maioria das linguagens de programação), a contagem de posições começa no zero (0), e não no um (1).*/
      var ultimoChar = textoNaTela[textoNaTela.length -1];

/* === faz uma comparação estrita (verifica se o valor e o tipo são exatamente iguais).*/
      if (resultadoEstaMostrado === false){

/*input.innerHTML (Lado esquerdo)
Representa o conteúdo atual que está escrito no visor da calculadora (armazenado na variável input).

+= (O operador de acréscimo)
Esse operador é um atalho que significa: "Pegue o valor que já existe e some/junte a ele o novo valor".*/
        input.innerHTML += e.target.innerHTML;

/*resultadoMostrado = false = (A calculadora entende que o usuário saiu do estado de "resultado final" e voltou a digitar).

input.innerHTML += e.target.innerHTML = (Ela mantém o que estava na tela e apenas adiciona o novo número ou símbolo na frente, permitindo continuar fazendo contas com o resultado anterior).*/

      }else if (resultadoEstaMostrado === true &&
                ultimoChar === "+" ||
                ultimoChar === "-" ||
                ultimoChar === "x" ||
                ultimoChar === "÷"){
                resultadoEstaMostrado = false;
                  input.innerHTML += e.target.innerHTML;
                }else{
                  resultadoEstaMostrado = false;
                  input.innerHTML = "";
                  input.innerHTML += e.target.innerHTML;
                }
});
  }

// adiconando evento de clique nos botões das contas
for (var i = 0; i < conta.length; i++) {
  conta[i].addEventListener("click", function(e) {

    // variaveis do texto na tela e o ultimo caractere
    var textoNaTela = input.innerHTML;
    var ultimoChar = textoNaTela[textoNaTela.length - 1];

    // se o ultimo caractere mostrado for uma conta, substitui pela que foi clicada
    if (ultimoChar === "+" ||
        ultimoChar === "-" ||
        ultimoChar === "×" ||
        ultimoChar === "÷") {
      var newString = textoNaTela.substring(0, textoNaTela.length - 1) + e.target.innerHTML;
      input.innerHTML = newString;
    } else if (textoNaTela.length == 0) {
      //se a primeira tecla pressionada for uma conta, avisa o usuario para colocar um numero primeiro
      alert("coloque um numero primeiro");
    } else {
      //senão apenas adiciona a conta pressionada na tela
      input.innerHTML += e.target.innerHTML;
    }

  });
}

/*addEventListener("click", ...) = Fica vigiando. Assim que o usuário clica no botão =, a função interna é disparada para calcular o resultado.
input.innerHTML = Pega tudo o que está escrito no visor da calculadora naquele momento (por exemplo, a string "12+5-3").

var inputString = Guarda essa expressão inteira dentro de uma caixinha/variável para que o JavaScript possa analisá-la.

.split() = uma função nativa do JavaScript para fatiar (dividir) um texto em pedaços menores, transformando-os em uma lista (array). Você diz onde a tesoura deve cortar, e ele separa os trechos.

As barras / ... / delimitam a regra.
O símbolo | significa "ou".
O \ antes de cada sinal (\+, \-, etc.) serve para avisar o JavaScript que estamos procurando o sinal matemático literal, e não um código especial de programação.
A letra g no final significa global, ou seja, para procurar e cortar todos os sinais que aparecerem na frase, do começo ao fim.

O indexOf (que significa "índice de") é um método nativo do JavaScript que varre uma string em busca de um caractere ou pedaço de texto específico.

while = "Enquanto" em inglês.
!= é o operador de "diferente de" no JavaScript.

-1 é o número que o .indexOf() devolve quando não encontra o caractere procurado na string.

splice() serve para remover, adicionar ou substituir elementos diretamente dentro do array original.

numero.splice(divide, 2, numeros[divide] / numeros[divide + 1])
Pega o par de números que estava ao redor do sinal de divisão, calcula o valor exato da divisão entre eles, apaga esses dois números da lista e insere o resultado no lugar.

contas.splice(divide, 1)
Apaga o símbolo ÷ da lista de operadores, pois ele já cumpriu a função dele naquela etapa.

divide = contas.indexOf("÷")
Atualiza o radar para procurar o próximo sinal de divisão. Se achar, o while roda de novo; se não achar (-1), o loop se encerra.*/
resultado.addEventListener("click", function() {
  var inputString = input.innerHTML;
  var numeros = inputString.split(/\+|\-|\x|\÷/g);
 
  // fazendo uma lista das contas que serão processadas
  var contas = inputString.replace(/[0-9]|\./g, "").split("");
  var divide = contas.indexOf("÷");
  while (divide != -1){
    numeros.splice(divide, 2,numeros[divide] / numeros[divide +1]);
    contas.splice(divide, 1);
    divide = contas.indexOf("÷");
  }

/* while (multiplica != -1) {  significa
while: Significa "Enquanto". O código vai repetir o bloco de código que está dentro das chaves {} repetidas vezes.

multiplica != -1: Essa é a condição de parada. A variável multiplica guarda a posição (o índice) onde o operador "x" foi encontrado na lista de contas. O -1 é o código universal que o JavaScript usa para dizer "não achei nada".
O significado da linha: "Enquanto o radar continuar achando o sinal de multiplicação ("x") na lista de operadores, continue rodando este bloco.

numero.splice(multiplica, 2, numeros[multiplica] * numeros[multiplica + 1]); significa
Esta é a linha mais inteligente (e densa) de todo o processo. O método .splice() altera a lista de números diretamente. Vamos dividir os três argumentos dele:

multiplica (O ponto de partida): É a posição exata onde o sinal x foi encontrado. Como o operador e os números estão alinhados, o número à esquerda está exatamente nessa mesma posição na lista de números.

2 (A quantidade a apagar): Diz para o JavaScript apagar dois elementos da lista a partir daquela posição. Quais são esses dois elementos? O número que estava antes do x e o número que estava depois do x.

numeros[multiplica] * numeros[multiplica + 1] (O novo valor a inserir):

Pega o número da esquerda (numeros[multiplica]).

Multiplica (*) pelo número da direita (numeros[multiplica + 1]); significa
O resultado dessa conta substitui os dois números que acabaram de ser apagados.
Exemplo prático: Se a lista de números era [5, 4, 2] e o x estava entre o 5 e o 4 (posição 0), o .splice apaga o 5 e o 4, faz 5 * 4 = 20, e coloca o 20 no lugar. A lista de números passa a ser [20, 2]."

contas.splice(multiplica, 1); significa
O que faz: Agora que a multiplicação daquela etapa já foi calculada e virou um número único, o sinal de multiplicação ("x") que estava na lista de operadores (contas) cumpriu o seu papel e não é mais necessário.
Como age: Ele vai até a lista contas, na mesma posição multiplica, e apaga 1 item (o próprio símbolo "x"), fazendo a lista de operadores encolher também.

multiplica = contas.indexOf("x"); significa
O que faz: Essa linha evita que o seu código entre em um loop infinito.
Como age: Ela força o JavaScript a procurar novamente pelo caractere "x" na lista de operadores atualizada.
Se ainda houver outro sinal de multiplicação mais adiante, a variável multiplica recebe a nova posição, o loop roda de novo.
Se não houver mais nenhum "x", o .indexOf("x") devolve -1, a variável multiplica assume o valor -1, a condição do while deixa de ser verdadeira e o loop se encerra, passando para as próximas operações (soma e subtração).*/
  //multiplicação
  var multiplica = contas.indexOf("x");
  while (multiplica != -1){
    numeros.splice(multiplica, 2,numeros[multiplica] * numeros[multiplica +1]);
    contas.splice(multiplica, 1);
    multiplica = contas.indexOf("x");
  }
  //adição
  var soma = contas.indexOf("+");
  while (soma != -1){
    numeros.splice(soma, 2,numeros[soma] + numeros[soma +1]);
    contas.splice(soma, 1);
    soma = contas.indexOf("+");
  }
  //subtração
  var subtrai = contas.indexOf("-");
  while (subtrai != -1){
    numeros.splice(subtrai, 2,numeros[subtrai] - numeros[subtrai +1]);
    contas.splice(subtrai, 1);
    subtrai = contas.indexOf("-");
  }
 
  input.innerHTML = numeros[0]; //mostrar o resultado na tela
  resultadoMostrado = true; //dizendo que resultado está sendo mostrado
});

// adicionando o evento de clique no botão limpar
limpar.addEventListener("click",function(){
  input.innerHTML = " ";
})
/*if = se
  else = senao
  else if = senao se*/

/*for significa "para", "por" ou "durante".
A sintaxe clássica de um loop for é dividida em três partes principais dentro dos parênteses, separadas por ponto e vírgula:
ex: for (var i = 0; i < botoesNumeros.length; i++) {
  // Código que vai se repetir em cada volta
}*/

/*while (condicao) { ... }
O que faz: Um loop condicional ("Enquanto..."). Usado no motor matemático para rodar a conta repetidamente enquanto houver sinais daquela operação (como divisões ou multiplicações) sobrando na expressão.*/
