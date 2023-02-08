
var parameters = {
    "count":13,
    "vel":0,
    "countY":20,
    "velY":0,
    "pick":false
};

var pel= false;

const music = new Audio("assets/audio/poyo1.mp3");
music.loop = true;
music.pause();
const musicA = new Audio("assets/audio/poyo2.mp3");
musicA.loop = true;
musicA.pause();
const musicW = new Audio("assets/audio/win.mp3");
musicW.pause();


var accionTurbo = false;

var jueguito = setInterval(function(){
    
    document.getElementById("gancho").style.left = parameters.count+"%";
    if(accionTurbo){
        
        if(!pel){
            if(parameters.count < 70){
                if(parameters.vel < 1){
                    parameters.vel += 0.005;
                }

                parameters.count += parameters.vel;
            }
            music.pause();
            music.currentTime = 0;
            musicA.play();
            console.log(parameters.count);
            console.log(accionTurbo);
        }else{
            accionTurbo = false;
            alert("Los sentimos, la maquina esta presentando fallos :'³ ¡AYUDA, SE ATORÓ!");
            
        }
    }
},30);


function boton(event){
    
    parameters.vel = 0;
    parameters.velY= 0;
    parameters.count = 13;
    
    //EVITA QUE EL TOUCH MANTENIDO NO SE TOME COMO CLICK DERECHO

    event.preventDefault();
    //CÓDIGO
    console.log("ACTIVADO");
    accionTurbo = !accionTurbo;
}

function lag(){
    
    document.oncontextmenu = function(){return false}
    //CÓDIGO
    if(parameters.count < 32){
            musicA.pause();
            musicA.currentTime = 0;
            music.play();
            music.currentTime = 0;
            alert("Manten presionado el boton hasta que llegue a los peluches");
            parameters.count = 13;
            parameters.vel = 0;
    }else{
        pick();
        document.getElementById("dialogbox").removeEventListener("touchstart",boton);
        document.getElementById("dialogbox").removeEventListener("touchend",lag);
        document.getElementById("dialogbox").removeEventListener("mousedown",boton);
        document.getElementById("dialogbox").removeEventListener("mouseup",lag);
    }
    console.log("DESACTIVADO");
    accionTurbo = false;
}

var gancho;

function pick(){
    
    gancho = setInterval(function(){
        document.getElementById("gancho").style.top = parameters.countY+"%";
        if(parameters.countY < 60){
            if(parameters.countY < 80){
                if(parameters.velY < 1){
                    parameters.velY += 0.005;
                }
    
                parameters.countY += parameters.velY;
            }
            console.log(parameters.countY);
            console.log(accionTurbo);
        }else{
            clearInterval(gancho);
            parameters.velY = 0;
            waiting(win,1000);
        }
    },30);
}

function win(){
    document.getElementById("premio").style.display = "block";
    gancho = setInterval(function(){
        document.getElementById("gancho").style.top = parameters.countY+"%";
        if(parameters.countY >= 20){
            if(parameters.countY < 80){
                if(parameters.velY < 1){
                    parameters.velY += 0.005;
                }
    
                parameters.countY -= parameters.velY;
            }
           
        }else{
            clearInterval(gancho);
            waiting(loot,1000);
        }
    },30);
}

function loot(){
    parameters.vel = 0;
    gancho = setInterval(function(){
        document.getElementById("gancho").style.left = parameters.count+"%";
        if(parameters.count > 13){
            if(parameters.vel < 1){
                parameters.vel += 0.005;
            }
                parameters.count -= parameters.vel;
           
        }else{
            musicA.pause();
            musicA.currentTime = 0;
            musicW.play();
            document.getElementById("gancho").style.left = "13%";
            clearInterval(gancho);
            pel = true;
            waiting(function(){alert("TE GANASTE UN PELUSHINX :³")},1000);
                        
            document.getElementById("dialogbox").addEventListener("touchstart",boton);
            document.getElementById("dialogbox").addEventListener("touchend",lag);
            document.getElementById("dialogbox").addEventListener("mousedown",boton);
            document.getElementById("dialogbox").addEventListener("mouseup",lag);
        }
    },
    30);
}

function waiting(fnt,t){
    setTimeout(fnt,t);
}

function sig(){
    document.getElementById("presentacion").innerHTML = "<p>Diviertete :³</p>";
    document.getElementById("next").textContent = "INICIAR";
        
    document.getElementById("next").addEventListener("mousedown",next);
    document.getElementById("next").addEventListener("touchstart",next);

}

function next(){
    document.getElementById("start").style.display = "none";
    music.play();
}

document.getElementById("dialogbox").addEventListener("touchstart",boton);
document.getElementById("dialogbox").addEventListener("touchend",lag);
document.getElementById("dialogbox").addEventListener("mousedown",boton);
document.getElementById("dialogbox").addEventListener("mouseup",lag);

document.getElementById("next").addEventListener("mousedown",sig);
document.getElementById("next").addEventListener("touchstart",sig);
