function  calculadora() {
    const operacao = Number(prompt('Escolha uma operação: \n1-soma \n2-subtração \n3-multiplicação \n4-divisão'))

    if(!operacao || operacao > 4){
        alert('Digite um numero valido')
        calculadora()
    }else{
        let n1 = Number(prompt('Digite o primeiro numero:'))
        let n2 = Number(prompt('Digite o segundo numero:'))
        let resultado
        
        if (!n1 || !n2) {
         alert("Digite apenas numeros")   
         calculadora()
        }else{
            function soma() {
                resultado = n1+n2
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperacao()
            }
            function subtracao() {
                resultado = n1-n2
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao()
            }
            function multiplicacao() {
                resultado = n1*n2
                alert(`${n1} X ${n2} = ${resultado}`)
                novaOperacao()
            }
            function divisao() {
                resultado = n1/n2
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao()
            }
        }
    
    function novaOperacao(){
        opcao = Number(prompt('Digite 1 para continuar ou 2 para sair'))
        if (opcao == 1) {
            calculadora()
        }else if(opcao == 2){
            alert('ate a proxima')
        }else{
            alert('Digite um valor valido')
            novaOperacao()
        }
    }

    if (operacao == 1) {
        soma()
    }else if(operacao == 2){
        subtracao()
    }else if(operacao == 3){
        multiplicacao()
    }else if(operacao == 4){
        divisao()
    }
    }

    
}
calculadora()