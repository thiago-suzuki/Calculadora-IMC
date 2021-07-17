/*
    formula  Harris-Benedict 

    TMB Mulher = 655 + (9,6 * P) + (1,8 * A) – (4,7 * I)
    TMB Homem = 66 + (13,7 * P) + (5 * A) – (6,8 * I)

    P=> Peso em kg
    A=> Altura em cm
    I=> Idade em anos
*/

function Calcular(peso, altura) {
   return peso / (Math.pow(altura, 2)); 
}

function Mostrar() {
    let peso = document.querySelector("#peso").value;
    let altura = document.querySelector("#altura").value;
    document.querySelector("#resultado").innerText = Calcular(peso, altura);
    if(Calcular(peso, altura) < 18.5) {
        document.querySelector("#classificacao").innerText = "Magreza"
    }
    else if(Calcular(peso, altura) >= 18.5 && Calcular(peso, altura) <= 24.9) {
        document.querySelector("#classificacao").innerText = "Normal"
    }
    else if(Calcular(peso, altura) >= 25 && Calcular(peso, altura) <= 29.9) {
        document.querySelector("#classificacao").innerText = "Sobrepeso"
    }
    else if(Calcular(peso, altura) >= 30 && Calcular(peso, altura) <= 39.9) {
        document.querySelector("#classificacao").innerText = "Obesidade"
    }
    else if(Calcular(peso, altura) > 40) {
        document.querySelector("#classificacao").innerText = "Obesidade Grave"
        document.querySelector("#classificacao").style.color = 'Purple'
        document.querySelector("#classificacao").style.fontWeight = 'bolder'
    }
}
document.querySelector("#btnCalculo").addEventListener("click", Mostrar);