// Exercício 014
// João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário do seu trabalho.

// Toda vez que ele traz um peso de peixe maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) 
// deve pagar uma multa de R$ 4,00 por quilo excedente.

// João precisa que você faça um programa que
// #### leia a variável peso (peso de peixes) e calcule o excesso.

// Gravar na variável excesso de quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. 
// Imprima os dados do programa com as mensagens adequadas.

function Pesagem(){
    let peso = prompt("Qual a quantidade do peixe ?")

    if(peso > 50){
        let calculo_multa = (peso - 50 ) * 4.0
        console.log(`Como o peso excedeu o  limite proposto , o valor da multa é R$4,00 por kg totalizando R$${calculo_multa}`)
    }else{
        console.log("Não excedeu o limite proposto")
    }
    
}

let inicio = Pesagem()

// xercício 009
// Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius. C = (5 * (F-32) / 9).

// function  temperatura(){
//     let valor = prompt("Qual é a temperatura em fahrenheint")
//     const calcularCelsius = ( 5 *(valor - 32) / 9)
//     console.log(`O vlor da temperatura em graus celsius é de ${calcularCelsius}`)

// }
// let inicio = temperatura()

// Exercício 011
// Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
//  o produto do dobro do primeiro com a metade do segundo.
//  a soma do triplo do primeiro com o terceiro.  o terceiro elevado ao cubo.

// function calcularValor(){
//     let numero1 = parseInt(prompt("DIGITE UM VALOR PARA 1:"))
//     let numero2 = parseInt(prompt("DIGITE UM VALOR PARA 2:"))
//     let numero3 = parseFloat(prompt("DIGITE UM VALOR PARA 3:"))

 
//     const ProdutoDobroPrimeiroMetadeSegundo = (numero1 * 2) + numero2 / 2
//     const SomaTriploPrimeiroTerceiro = (numero1 * 3) + numero3
//     const TerceiroElevadoAoCubo = numero3 ** 3

//     console.log(` O resultado produto do dobro do primeiro com a metade do segundo é :${ProdutoDobroPrimeiroMetadeSegundo}`)
//     console.log(`O resultado da soma do triplo do primeiro com o terceiro é : ${SomaTriploPrimeiroTerceiro}`)
//     console.log(  `O resultado do terceiro elevado ao cubo é : ${TerceiroElevadoAoCubo}`)
//     }



// let incio =  calcularValor()