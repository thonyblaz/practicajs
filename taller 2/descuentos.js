/* const precioOriginal = 100;
const descuento = 15;
 */


function calcularPrecioConDescuento (precio,descuento){
    const porcentajePrecioConDescuento = 100-descuento;
    const precioConDescuento = (precio*porcentajePrecioConDescuento)/100
    return precioConDescuento
}

function onClickButtonPD(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento (priceValue ,discountValue);
    const resultP =document.getElementById("ResultP");
    resultP.innerText="el precio con descuento es: $ "+ precioConDescuento;
}
/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
}) */