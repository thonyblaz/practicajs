const lista1=[100,200,3000,5000,800,890];

function calcularMediaAritmetica(lista){
    let sumalista = 0;

    for(let i=0; i<lista.length;i++){
        sumalista = sumalista + lista[i];
    }

    const promedioLista = sumalista/lista.length;
    return promedioLista;
}


const mitadLista1 = parseInt(lista1.length/2);


function esPar(numero){
    if(numero%2 === 0){
        return true;
    }else{
        return false;
    }
}

let mediana;

if(esPar(lista1.length)){
    lista1.sort((a, b) => a - b);
    const elemento1=lista1[mitadLista1-1];
    const elemento2=lista1[mitadLista1];
    const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
    mediana = promedioElemento1y2;
}else{
    mediana = lista1[mitadLista1];
}