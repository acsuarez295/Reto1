'use strict';

let detalles = {};

const boton = document.querySelector("#boton");
const select = document.querySelector("#selectColor");

const operacion = (cantidad)=>{
    let total = cantidad * 5000000;
    return total;
}

const totalCal = (cantidad, total) =>{
    detalles.cant = cantidad;
    detalles.tota = total;
}

select.onclick = function(){
    const seleccion = document.querySelector("#selectColor").value;
    seleccionColor(seleccion);
    console.info(seleccion);
}

boton.onclick = function(){
    const cantidad = parseFloat(document.querySelector("#cantidad").value);
    let total = operacion(cantidad);
    totalCal(cantidad, total);
    imprimir();
}


const seleccionColor = (seleccionado)=>{
    const selectColor = document.querySelector(".color");
    selectColor.classList.remove("azul","grisclaro","grisoscuro");
    console.log(selectColor);
    if (seleccionado == "grisoscuro") {
        selectColor.classList.add("grisoscuro");
        console.log(selectColor);
    } else if (seleccionado == "grisclaro"){
        selectColor.classList.add("grisclaro");
    }else if(seleccionado == "azul"){
        selectColor.classList.add("azul");
    }else{
        selectColor.classList.remove("azul");
        selectColor.classList.remove("grisclaro");
        selectColor.classList.remove("grisoscuro");
    }
    
}

const imprimir = ()=>{
     
    document.querySelector(".total-cantidad").innerHTML =`Cantidad: ${detalles.cant}`;
    document.querySelector(".text-color").innerHTML ='Color:';
    document.querySelector(".total").innerHTML =`Total: $${parseFloat(detalles.tota)}`;
}






