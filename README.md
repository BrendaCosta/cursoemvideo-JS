# Esse repositório faz parte dos meus estudos de Javascript!
> [Curso básico de javascript - Curso em Vídeo](https://www.youtube.com/watch?v=BXqUH86F-kA&list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1&t=0s&ab_channel=CursoemV%C3%ADdeo) 
- Eu fiz com o objetivo de me preparar para aprender a fundo o VUE.JS, com uma base de js mais solida
- Fiz depois de abandonar o bootcamp da IGTI no meio e já tinha conhecimento em algumas coisas de JS
- O curso é bem básico e o Guanabara tem uma didática maravilhosa
- Foi um dos poucos cursos de programação que consegui terminar no meio da pandemia
- Durante o curso foi realizado alguns desafios: 
  - [Pegar o horario do sistema operacional e mostrar uma mensagem conforme a hora]()
  - Verificador de idade exibindo uma imagem conforme a idade do usuário
  - Contador com possibilidade de pular casas
  - Gerador de tabuadas
  - Analisador de números para aprender sobre arrays e funções

## Aprendizados/Dicas que achei importantes

### Formatação de String
~~~
var s = 'aprendendo JS'

s.length // Mostra a quantidade de caracteres
s.toUpperCase() // Deixa os caracteres maiusculos
s.toLowerCase() // Deixa os caracteres minusculos
~~~
 
### Formatação de números:

~~~
var n1 = 1545.5
n1.tofixed(2) // Coloca o número com duas casas decimais
n1.tofixed(2).replace('.',',') // Troca o ponto por virgula
n1.toLocaleString('pt-br',{style:'currency', currency:'BRL'}) // Para colocar em formato de dinheiro
~~~

### Operador ternário:
~~~
teste ? true : false
Teste - é o teste lógico
? - O que vai acontecer se for verdadeiro ou falso
~~~

### Pegando a hora do sistema
~~~
var horadosistema = new date()
var hora = horadosistema.gethours
~~~

### Composição do FOR

~~~
for(inicialização; teste que será feito; incremento){

}
~~~


### Arrays | Vetor | Variavel composta

~~~
let num = [5,8,4] // vetor
num[3] = 6 // acrescento um valor na posição 3
num.push(7) // acrescento na ultima posição
num.lenght // para saber o tamanho do vetor
num.sort() // para colocar em ordem crescente
num. indexOf(8) // para achar a posição de um elemento | se por acaso o numero não existir dentro do vetor, ele vai retornar -1
~~~

### Para otimizar o uso do for dentro de vetor usamos o for in
~~~
for (indice in nome do array){ // 
    para cada indice dentro do array...
}
~~~