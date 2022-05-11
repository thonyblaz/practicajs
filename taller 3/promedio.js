//const lista1=[100,200,300,500];



function calcularMediaAritmetica(lista){
    let sumalista = 0;

    for(let i=0; i<lista.length;i++){
        sumalista = sumalista + lista[i];
    }

    const promedioLista = sumalista/lista.length;
    return promedioLista;
}