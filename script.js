let quadrado = document.querySelector('body');
let header = document.querySelector('header');
let q1 = document.querySelector('header div[name="q1"]');
let q2 = document.querySelector('header div[name="q2"]');
let q3 = document.querySelector('header div[name="q3"]');
let q4 = document.querySelector('header div[name="q4"]');
let q5 = document.querySelector('header div[name="q5"]');



function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function mudar(){
    quadrado.style.backgroundColor = 'rgb('+aleatorio(0,255)+','+aleatorio(0,255)+','+aleatorio(0,255)+')';
    header.style.backgroundColor = 'rgb('+aleatorio(0,255)+','+aleatorio(0,255)+','+aleatorio(0,255)+')';
    q1.style.backgroundColor = 'rgb('+aleatorio(0,255)+','+aleatorio(0,255)+','+aleatorio(0,255)+')';
    q2.style.backgroundColor = 'rgb('+aleatorio(0,255)+','+aleatorio(0,255)+','+aleatorio(0,255)+')';
    q3.style.backgroundColor = 'rgb('+aleatorio(0,255)+','+aleatorio(0,255)+','+aleatorio(0,255)+')';
    q4.style.backgroundColor = 'rgb('+aleatorio(0,255)+','+aleatorio(0,255)+','+aleatorio(0,255)+')';
    q5.style.backgroundColor = 'rgb('+aleatorio(0,255)+','+aleatorio(0,255)+','+aleatorio(0,255)+')';
}

function automatico(){
    let intervalo = setInterval(function(){
        mudar();
    },0.1);
}

quadrado.onmousemove = mudar;