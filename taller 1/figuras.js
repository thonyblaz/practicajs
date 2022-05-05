//Codigo del cuadrado
console.group("cuadrados")
//const ladoCuadrado =5;
//console.log("los lados del cuadrado miden: "+ ladoCuadrado)

function perimetroCuadrado (lado){
    return  lado*4;
}
function areaCuadrado(lado){
    return lado*lado
}
//console.log("El perimetro del cuadrado es"+ perimetroCuadrado )

//const areaCuadrado = ladoCuadrado*ladoCuadrado;
//console.log("El area es: "+ areaCuadrado )
console.groupEnd();
//Codigo triangulo
console.group("Triangulo")
const alturaTriangulo = 4;
const baseTriangulo = 4;
console.log(
    "La altura del triangulo es:"+alturaTriangulo
    + " La base del triangulo es:"+baseTriangulo
    )

const areaTriangulo = alturaTriangulo*baseTriangulo/2;

console.log(`El area del triangulo es: ${areaTriangulo}`)

console.groupEnd();

//Codigo del circulo
console.group("circulo")
// radio
const radioCirculo =4;
function diametro(radio){
    return radio*2
}
//Diametro
//const diametroCirculo = ;
//PI
const PI = Math.PI;

//Circunferencia
function perimetroCirculo(radio){
    const diametro1 = diametro(radio);
    var d = (diametro1*PI).toFixed(2);
    return Number(d)
}
//const perimetroCirculo = (diametroCirculo*PI).toFixed(2) //redondea los decimales
//area
const areaCirculo = (radioCirculo**2)*PI
console.log(`El radio del circulo es: ${radioCirculo}`)
//console.log(`El diametro del circulo es: ${diametroCirculo}`)
//console.log(`El perimetro del circulo es: ${perimetroCirculo}`)
//console.log(`El area del circulo es: ${areaCirculo} cm²`)
console.groupEnd();

//Alt + 253 para esto cm²


//aui interacturemos con el html

function calcularPerimetroC(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}

function calcularAreaC(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}