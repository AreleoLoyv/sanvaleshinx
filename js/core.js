

function boton(event){
    //EVITA QUE EL TOUCH MANTENIDO NO SE TOME COMO CLICK DERECHO
    event.preventDefault();
    //CÓDIGO
    console.log("ACTIVADO");
}

function lag(){
    //CÓDIGO
    console.log("DESACTIVADO");
}




document.getElementById("dialogbox").addEventListener("touchstart",boton)
document.getElementById("dialogbox").addEventListener("touchend",lag)
document.getElementById("dialogbox").addEventListener("mousedown",boton)
document.getElementById("dialogbox").addEventListener("mouseup",lag)