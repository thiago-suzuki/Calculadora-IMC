function Calcular(peso, altura) {
   return peso / (Math.pow(altura, 2)); 
}

function Mostrar() {
    let peso = document.querySelector("#peso").value;
    let altura = document.querySelector("#altura").value;
    if(altura == "" || peso == "" || altura <= 0 || peso <= 0) {
        alert('Peso e altura inválidos!');
    }
    else {
        let IMC = Calcular(peso, altura)
        document.querySelector("#resultado").innerText = IMC.toFixed(2);
        if(IMC < 18.5) {
            document.querySelector("#classificacao").innerText = "Magreza"
            document.querySelector("#classificacao").style.color = 'Blue'
            document.querySelector("#classificacao").style.fontWeight = 'bolder'
        }
        else if(IMC >= 18.5 && IMC <= 24.9) {
            document.querySelector("#classificacao").innerText = "Normal"
            document.querySelector("#classificacao").style.color = 'Green'
            document.querySelector("#classificacao").style.fontWeight = 'bolder'
        }
        else if(IMC >= 25 && IMC <= 29.9) {
            document.querySelector("#classificacao").innerText = "Sobrepeso"
            document.querySelector("#classificacao").style.color = 'Orange'
            document.querySelector("#classificacao").style.fontWeight = 'bolder'
        }
        else if(IMC >= 30 && IMC <= 39.9) {
            document.querySelector("#classificacao").innerText = "Obesidade"
            document.querySelector("#classificacao").style.color = 'Red'
            document.querySelector("#classificacao").style.fontWeight = 'bolder'
        }
        else if(IMC > 40) {
            document.querySelector("#classificacao").innerText = "Obesidade Grave"
            document.querySelector("#classificacao").style.color = 'Purple'
            document.querySelector("#classificacao").style.fontWeight = 'bolder'
        }
    }
}
document.querySelector("#btnCalculo").addEventListener("click", Mostrar);