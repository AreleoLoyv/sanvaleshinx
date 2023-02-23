
// PARAMETROS
var parameters = {
    "X":-59,    //-60
    "Y":6,      //

    "Xspeed":0,     //
    "Yspeed":0,     //

    "acceleration":0.01,
    "maxspeed":0.5,
    "minspeed":-0.5,
    
    "stock":23,

    "Xini":-60,
    "Yini":5,

    "Xlimit":-19,
    "Ylimit":60,

    "pick":false,
    "XinAction":false,
    "YinAction":false,
    "OnOk":false,   
    "OnEnable":true,

    "isDakia":false,
    "beyDakia":false,

    "last":undefined,
    "full":false,

    "debug":false,
};

let plush = [
//  file ,  Name , Description , url
    ["angel","El Riolu de Galar","Si alguien se acerca a ti con malas intensiones, él te protegerá. Dale chocolate, buen chico","https://www.facebook.com/people/El-Riolu-de-galar/100064145349481/"],
    ["anto","Un Peluche AntonimouZ","Una serpientita muy talentosa, por su gorra diria que le gusta sonic","https://www.facebook.com/people/AntonimouZ/100064692324217/"],
    ["chinx","Un Peluche Shinx","PeluShinx, por fin pudo salir de esa maquina una semana despues de San ValenShinx (Edit: 2 semanas)",""],
    ["chinxOLD","Un Peluchinx antiguo","Parece que olvidaron quitarlo de la version de prueba, ahora lo tienes como objeto de colección que valdrá mucho dentro de mil años",""],
    ["cubito","Un Mudkip","Tienes un nuevo amigo, cuidalo mucho y el te cuidará. Creo que quiere que lo abrazes","https://www.facebook.com/Maukiip"],
    ["dakia","Otro Peluche Dakia?","Hey! el otro peluche de Dakia desapareció! Al menos tienes este como recuerdo","https://www.facebook.com/DakiatheEspurr"],
    ["dakiareal","Un Peluche Dakia","Estas mirandolo de cerca porque es muy pequeño, tiene tantos detalles que parece real",""],
    ["emkra","Un Peluche Zorua de Limon","Algo me dice que si apagas las luces, brilla. También puede ocurrir que se escape, mejor no arriesgarse. Su nivel es un secreto",""],
    ["espurrHD","Un Peluche Espurr HD","Es oficial de Nintendo pero está en PNG para ti sin costo de envio.",""],
    ["jyra","Una Estrellita","Te acompañará, guiará en tu camino y te hará unos buenos momazos,","https://www.facebook.com/JykzzU"],
    ["kiro","Un Zorrito Peluche Kiro","Es muy buena compañia, no lo dejes solo y el nunca te dejará solo","https://www.facebook.com/KiroZA26"],
    ["luxio","Un Luxio Peluche","Es como Shinx pero más grande y enojado","https://www.facebook.com/LuxSmash"],
    ["moishinx","Un Maki Peluche","Siempre te ayudará cuando más lo necesites","https://www.facebook.com/MakiLuxray"],
    ["pops","Un Pops Peluche","Hay que cuidarlo porque contaminaron su habitad natural y ya no hace noticias","https://www.facebook.com/PopsElSirenito"],
    ["reno","Un renito Peluche","No se, se metió a una tienda y todos se alteraron","https://www.twitch.tv/123renitowo"],
    ["shinxHD","Un Peluche Shinx HD","Ya no se esfuerzan como antes, Cantidad por Calidad. Terrible",""],
    ["shinxhev","Un Peluche Shinx Half Life","Se llama Shinx pero parece Luxio, sospechoso(SUS). El Shinx adecuado en la red social equivocada puede causar que baje sus acciones","https://www.facebook.com/HolaSoyShinx"],
    ["shinxpawo","Un Peluche Shinx Powa","Es Admin, tiene el Powar de dar Ban. Que bueno que ahora lo controlas","https://www.facebook.com/TheFluffyCuteWorld"],
    ["shinychinx","Un Shiny Peluchinx","Se acabó la tinta celeste, algún dia celebraremos el mes Shiny",""],
    ["zoey","Un Peluche Zoey","Asi es, se llama Zoey. Tiene problemas como la gente normal y mañana debe ir a trabajar",""],
    ["zorua","Un Peluche Zorua","Este Zorrito casi inicia una tercera guerra mundial y quizo volver a intenarlo este año",""],
];


function more(){
    var one = "";
    var two = "";
    plush.forEach(i => {
        if(i[1].length >= one.length){
            one = i[1]
        }
        if(i[2].length >= two.length){
            two = i[2]
        }
    });
    console.log("Nombre más largo :"+one);
    console.log("Descripcion más larga :"+two);
};

// variables
var motor = setInterval(function(){rooting();if(parameters.debug){coordenadas()}},25);
let hook = document.getElementById("gancho");

setInterval(function(){
    console.log();
},100);

function rooting(){
    // Calculo de la Acceleración

    if(parameters.XinAction && (parameters.X > parameters.Xini && parameters.X < parameters.Xlimit )){
        if(parameters.Xspeed < parameters.maxspeed && parameters.Xspeed > parameters.minspeed ){
            parameters.Xspeed += parameters.acceleration;
        }else{
            parameters.Xspeed = parameters.maxspeed*(Math.sign(parameters.acceleration));
        }
        
    }else{
        parameters.Xspeed = 0;
    };
    
    if(parameters.YinAction && (parameters.Y > parameters.Yini && parameters.Y < parameters.Ylimit )){
        if(parameters.Yspeed < parameters.maxspeed && parameters.Yspeed > parameters.minspeed ){
            parameters.Yspeed += parameters.acceleration;
        }else{
            parameters.Yspeed = parameters.maxspeed*(Math.sign(parameters.acceleration));
        }
        
    }else{
        parameters.Yspeed = 0;
    }

    //  Aplicación de Velocidad
    parameters.X += parameters.Xspeed;
    parameters.Y += parameters.Yspeed;

    hook.style.top = (parameters.X)+"%";
    hook.style.left = (parameters.Y)+"%";
}

function coordenadas(){
    var stat = "";
    Object.keys(parameters).forEach(i => {
        stat += i+" : "+parameters[i]+"<br>";
    });
     document.getElementById("stats").innerHTML = stat;
    
}

const music = new Audio("assets/audio/poyo1.mp3");
music.loop = true;
music.pause();
const musicA = new Audio("assets/audio/poyo2.mp3");
musicA.loop = true;
musicA.pause();
const musicW = new Audio("assets/audio/win.mp3");
musicW.pause();

// INICIO
function sig(){
    document.getElementById("presentacion").innerHTML = "<p class='titulo'>INSTRUCCIONES</p><p>PUCHALE y MANTEN PRESIONADO el BOTON ROJO y ESPERA a ver que PELUSHE ganas </p><p class='titulo'><br>Diviertete :³</p>";
    document.getElementById("next").textContent = "DIVERTIRSE";  
    document.getElementById("next").addEventListener("mousedown",next);
    document.getElementById("next").addEventListener("touchstart",next);
};

function next(){
    document.getElementById("start").style.display = "none";
    music.play();
};

// MAIN

function btnON(event){
    if(!parameters.OnEnable){
        return null;
    }
    perfectLoop(true);
    parameters.OnOk = true;
    parameters.OnEnable = false;
    parameters.acceleration = 0.01;
    document.getElementById("dialogbox").style.backgroundPositionX = "100%";
    parameters.YinAction = true;
    //EVITA QUE EL TOUCH MANTENIDO NO SE TOME COMO CLICK DERECHO

    event.preventDefault();
    //CÓDIGO
    console.log("ACTIVADO");
    parameters.inAction = !parameters.inAction;
}

function btnOFF(){

    if(parameters.OnOk){ 
        parameters.YinAction = false;
        document.getElementById("dialogbox").style.backgroundPositionX = "0%";
        document.oncontextmenu = function(){return false}
        //CÓDIGO
        if(parameters.Y < parameters.stock){
            parameters.OnEnable = true;
                musicA.pause();
                musicA.currentTime = 0;
                music.play();
                music.currentTime = 0;
                alert("Manten presionado el boton hasta que llegue a los peluches");
        }else{
            parameters.OnEnable = true;
            gancho.style.backgroundPositionX = "0%"
            waiting(stepOne,300);
            document.getElementById("dialogbox").removeEventListener("touchstart",btnON);
            document.getElementById("dialogbox").removeEventListener("touchend",btnOFF);
            document.getElementById("dialogbox").removeEventListener("mousedown",btnON);
            document.getElementById("dialogbox").removeEventListener("mouseup",btnOFF);
        }
        console.log("DESACTIVADO");

    }

}
// PASOS de MAQUINA

/*

    PASO 1 - BAJA LA GARRA A RECOGER PELUCHE
    PASO 2 - LEVANTA LA GARRA CON UN PELUCHE
    PASO 3 - LLEVA A LA CASILLA
    PASO 4 - 
    PASO 5 - 

*/
let pick;
function stepOne(){
    if(parameters.Y > parameters.Ylimit){
        parameters.Y = parameters.Ylimit - 0.1;
    }
    console.log("PASO 1");
    parameters.Xspeed = 0;
    parameters.acceleration = 0.01;
    parameters.XinAction = true;
    parameters.YinAction = false;
    pick = setInterval(function(){
        if(parameters.X >= parameters.Xlimit){
            gancho.style.backgroundPositionX = "100%"
            clearInterval(pick);
            waiting(stepTwo,400)
        }
    },100);
};

function stepTwo(){
    console.log("PASO 2");
    selectPlush();
    parameters.acceleration = -0.01;
    parameters.X = -20;
    parameters.Xspeed = 0;
    pick = setInterval(function(){
        if(parameters.X <= parameters.Xini){
            if(parameters.X < parameters.Xini){
                parameters.X = parameters.Xini + 0.1;
                parameters.XinAction = false;
            }
            console.log("PASO 3 al Lag");
            gancho.style.backgroundPositionX = "100%";
            clearInterval(pick);
            waiting(stepThree,400)
        }
    },100);
};

function stepThree(){
    parameters.YinAction = true;

    pick = setInterval(function(){
        if(parameters.Y <= parameters.Yini){
            console.log("PASO 4 al Lag");
            gancho.style.backgroundPositionX = "100%";
            clearInterval(pick);
            waiting(stepFour,400)
        }
    },100);
    
};

function stepFour(){
    parameters.YinAction = false;
    parameters.Y = parameters.Yini + 0.1;
    perfectLoop(false);
    waiting(function(){
        showMsg();
    },1500);
    
}

// EXTRAS

function waiting(fnt,t){
    setTimeout(fnt,t);
}

var m;

function perfectLoop(state){
    music.pause();
    music.currentTime = 0;
    musicA.play();
    musicA.currentTime = 0; 
    if(!state){
        musicA.pause();
        musicW.currentTime = 0;
        musicW.play();
        clearInterval(m);
    }else{
        m = setInterval(function(){
            if(musicA.currentTime > 10.6){
                musicA.currentTime = 0; 
            }
        },10)
    };
}

var listPlush = [];
listPlush.length = plush.length;

function selectPlush(){
    var n;
    var newsito = false;
    while(!newsito) {
        // si EL ESPACIO ESTA VACIO
        // si N ESTA DEFINIDO
        if(listPlush.length == plush.length){
            newsito = true;

            for (let i= 0; i < listPlush.length; i++) {
                if(listPlush[i] === undefined){
                    newsito = false;
                }
                
            }
            if(newsito){
                console.log("Ya se recogieron todos los modelos");
            }
        }
        if(n !== undefined && listPlush[n] === undefined){
            console.log("AÑADIDO "+n);
            listPlush[n] = n;
            parameters.last = n;
            document.getElementById("premiod").style.display = "flex";
            document.getElementById("premio").src = "/img/plush/"+plush[n][0]+".png";
            newsito = true;
        }else{
            console.log("OTRO NUMERO "+n);
            n = Math.floor(Math.random()*plush.length);
            if(parameters.isDakia && !parameters.beyDakia){
                n = 5;
                parameters.beyDakia = true;
                document.getElementById("premiod").style.transform = "rotate(60deg)";
                document.getElementById("premiod").style.top = "88%";
                document.getElementById("premiod").style.left = "25%";
                document.getElementById("premiod").style.width = "55%";
                document.getElementById("premiod").style.height = "16%";

                //             top: 88%;
    // left: 25%;
    // width: 55%;
    // height: 16%;

            }
            if( (n == 5 || n == 6) && parameters.isDakia == false){
                n = 6;
                parameters.isDakia = true;

                document.getElementById("premiod").style.transform = "rotate(0deg)";
                document.getElementById("premiod").style.top = "91%";
                document.getElementById("premiod").style.left = "31%";
                document.getElementById("premiod").style.width = "40%";
                document.getElementById("premiod").style.height = "12%";

                // top: 91%;
                // left: 31%;
                // width: 40%;
                // height: 12%;
            }
            
        }
    }
}

function showMsg(){
    var follow = document.getElementById("followme");
    if(plush[parameters.last][3] != ""){
        follow.style.display = "flex";
        follow.addEventListener("click", () => {
        window.open(plush[parameters.last][3], "_blank");
        });
    }else{
        follow.style.display = "none";
    }
    dating(parameters.last);
}

function dating(m){
    // comprobar
    ifAllPlush();
    var priC = document.getElementById("prize");
    let n = m;
    document.getElementById("msg").style.opacity = 1;
    document.getElementById("msg").style.display = "flex";
    getAnima("boxmsg","fosh");
    document.getElementById("titlemsg").textContent = plush[n][1];
    priC.src = "/img/plush/"+plush[n][0]+".png";
    
    document.getElementById("descripmsg").textContent = plush[n][2];
    
    getAnima("prize","plim");
    
    if(parameters.full){
        document.getElementById("again").removeEventListener("touchstart",game);
        document.getElementById("again").removeEventListener("mousedown",game);
        document.getElementById("again").addEventListener("touchstart",end);
        document.getElementById("again").addEventListener("mousedown",end);
        document.getElementById("again").textContent = "SIGUIENTE"
    }else{
        document.getElementById("again").addEventListener("touchstart",game);
        document.getElementById("again").addEventListener("mousedown",game);
    }
    
}

function game(){
    
    document.getElementById("msg").style.display = "none";
    document.getElementById("dialogbox").addEventListener("touchstart",btnON);
    document.getElementById("dialogbox").addEventListener("mousedown",btnON);
    document.getElementById("dialogbox").addEventListener("touchend",btnOFF);
    document.getElementById("dialogbox").addEventListener("mouseup",btnOFF);
    music.currentTime = 0;
    document.getElementById("premiod").style.display = "none";
    music.play();

}

function end(){
    document.getElementById("titlemsg").textContent = "¡FELICIDADES!";
    document.getElementById("titlemsg").style.marginBottom = "5%";
    document.getElementById("prized").style.display = "none";
    document.getElementById("descripmsg").innerHTML= "CONSEGUISTE TODOS LOS MODELOS DE PELUCHES EN LA MAQUINA, ERES MUY PRO :³ <br> Muchas gracias por tomarte la molestia de completarlo<br><br>Eso fue todo, Fue un Honor que llegaras hasta aquí, si me tardé demasiado pensando que terminaria limite 1 día despues de San Valentin. Solo espero que te lo disfrutaras :³";
    document.getElementById("again").style.display = "none";
    document.getElementById("boxmsg").style.alignContent = "center";
}

function ifAllPlush(){
    var r = true;
    for (let i = 0; i < listPlush.length; i++) {
        if (listPlush[i] != i)  {
          r = false;
        }
    }
    if(r){
    parameters.full = true;
    }
}


function getAnima(e,a){
    var f = document.getElementById(e);
    f.classList.remove(a);
    void f.offsetWidth; 
    f.classList.add(a);
}

var ronchas = new Audio("assets/audio/push.mp3");

function push(){
    if(!parameters.isDakia || parameters.beyDakia)
    {
        ronchas.pause();
        ronchas.currentTime = 0;
        ronchas.play();
    }
}

document.getElementById("prize").addEventListener("touchstart",push);
document.getElementById("prize").addEventListener("mousedown",push);
// var accionTurbo = false;


// var jueguito = setInterval(function(){
    
//     document.getElementById("gancho").style.left = parameters.count+"%";
//     if(accionTurbo){
        
//         if(!pel){
//             if(parameters.count < 70){
//                 if(parameters.vel < 1){
//                     parameters.vel += 0.005;
//                 }

//                 parameters.count += parameters.vel;
//             }
//             music.pause();
//             music.currentTime = 0;
//             musicA.play();
//             console.log(parameters.count);
//             console.log(accionTurbo);
//         }else{
//             accionTurbo = false;
//             alert("Los sentimos, la maquina esta presentando fallos :'³ ¡AYUDA, SE ATORÓ!");
            
//         }
//     }
// },30);


// function boton(event){
    
//     document.getElementById("dialogbox").style.backgroundPositionX = "100%";
//     parameters.vel = 0;
//     parameters.velY= 0;
//     parameters.count = 13;
    
//     //EVITA QUE EL TOUCH MANTENIDO NO SE TOME COMO CLICK DERECHO

//     event.preventDefault();
//     //CÓDIGO
//     console.log("ACTIVADO");
//     accionTurbo = !accionTurbo;
// }

// function lag(){
//     document.getElementById("dialogbox").style.backgroundPositionX = "0%";
//     document.oncontextmenu = function(){return false}
//     //CÓDIGO
//     if(parameters.count < 32){
//             musicA.pause();
//             musicA.currentTime = 0;
//             music.play();
//             music.currentTime = 0;
//             alert("Manten presionado el boton hasta que llegue a los peluches");
//             parameters.count = 13;
//             parameters.vel = 0;
//     }else{
//         pick();
//         document.getElementById("dialogbox").removeEventListener("touchstart",boton);
//         document.getElementById("dialogbox").removeEventListener("touchend",lag);
//         document.getElementById("dialogbox").removeEventListener("mousedown",boton);
//         document.getElementById("dialogbox").removeEventListener("mouseup",lag);
//     }
//     console.log("DESACTIVADO");
//     accionTurbo = false;
// }

// var gancho;

// function pick(){
    
//     gancho = setInterval(function(){
//         document.getElementById("gancho").style.top = parameters.countY+"%";
//         if(parameters.countY < 60){
//             if(parameters.countY < 80){
//                 if(parameters.velY < 1){
//                     parameters.velY += 0.005;
//                 }
    
//                 parameters.countY += parameters.velY;
//             }
//             console.log(parameters.countY);
//             console.log(accionTurbo);
//         }else{
//             clearInterval(gancho);
//             parameters.velY = 0;
//             waiting(win,1000);
//         }
//     },30);
// }

// function win(){
//     document.getElementById("premio").style.display = "block";
//     gancho = setInterval(function(){
//         document.getElementById("gancho").style.top = parameters.countY+"%";
//         if(parameters.countY >= 20){
//             if(parameters.countY < 80){
//                 if(parameters.velY < 1){
//                     parameters.velY += 0.005;
//                 }
    
//                 parameters.countY -= parameters.velY;
//             }
           
//         }else{
//             clearInterval(gancho);
//             waiting(loot,1000);
//         }
//     },30);
// }

// function loot(){
//     parameters.vel = 0;
//     gancho = setInterval(function(){
//         document.getElementById("gancho").style.left = parameters.count+"%";
//         if(parameters.count > 13){
//             if(parameters.vel < 1){
//                 parameters.vel += 0.005;
//             }
//                 parameters.count -= parameters.vel;
           
//         }else{
//             musicA.pause();
//             musicA.currentTime = 0;
//             musicW.play();
//             document.getElementById("gancho").style.left = "12%";
//             clearInterval(gancho);
//             pel = true;
//             waiting(function(){alert("TE GANASTE UN PELUSHINX :³")},1000);
                        
//             document.getElementById("dialogbox").addEventListener("touchstart",boton);
//             document.getElementById("dialogbox").addEventListener("touchend",lag);
//             document.getElementById("dialogbox").addEventListener("mousedown",boton);
//             document.getElementById("dialogbox").addEventListener("mouseup",lag);
//         }
//     },
//     30);
// }


// }



// var pl;

// function perfectLoop(mp,stt){
//     if(stt){
        
//     }else{
        
//     }
// }






// ASSIGNAR

document.getElementById("dialogbox").addEventListener("touchstart",btnON);
document.getElementById("dialogbox").addEventListener("mousedown",btnON);
document.getElementById("dialogbox").addEventListener("touchend",btnOFF);
document.getElementById("dialogbox").addEventListener("mouseup",btnOFF);

document.getElementById("next").addEventListener("mousedown",sig);
document.getElementById("next").addEventListener("touchstart",sig);
