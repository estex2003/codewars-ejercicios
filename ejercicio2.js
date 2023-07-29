function evenOrOdd (number) {
    if(number%2 === 1){  //un numero dividido entre 2 si te da 1 es impar, si te da cero es par 
        console.log(number, "es impar")
    }if(number%2===0){
        console.log("es par")
        
    }if(number<0){
        console.log("escoge un numero positivo plox")
    }
}
evenOrOdd() //ingresa el numero en el parentesis 