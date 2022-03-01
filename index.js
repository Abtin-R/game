"use strict"


const $clickArea = document.getElementById("clickArea")
const $amount = document.getElementById("amount")
const $double = document.getElementById("double")
const $plus1 = document.getElementById("plus1")
const $plus3 = document.getElementById("plus3")
const $plus5 = document.getElementById("plus5")
const $easy = document.getElementById("easy")
const $medium = document.getElementById("medium")
const $hard = document.getElementById("hard")
const $difficulty = document.getElementById("difficulty")
const $first= document.getElementById("first")
const $s1 = document.getElementById("s1")
const $s2 = document.getElementById("s2")
const $s3 = document.getElementById("s3")
const $s4 = document.getElementById("s4")
const $boss = document.getElementById("boss")
const $bossBox = document.getElementById("bossBox")
const $startbutton = document.getElementById("startbutton")
const $rules = document.getElementById("rules")
const $body = document.querySelector("body")
const $health = document.getElementById("health")
const $overlay = document.getElementById("overlay")
const $restart = document.getElementById("restart")
const $restar = document.getElementById("restar")
var audio = new Audio('game-music-7408.mp3');
var monaudio = new Audio('moneydrop.wav');
audio.volume = 0.1;


let activeBoss = false
let multiplyer = 1;
let balance = 0;
let addition = 0;
let startamount = 100;
let damage = 1;
let hp = 200;


$restart.onclick = function()
{
    activeBoss = false;
    balance = 0;
    addition = 0;
    multiplyer = 1;
    damage = 1;
    hp = 200;
    $restar.style.display = "none"
    $rules.style.display = "block";
    $amount.innerText = "Balance: " + 0 + "$";
    $plus1.style.display = "flex"
    $plus3.style.display = "flex"
    $plus5.style.display = "flex"
    $double.style.display = "flex"
    $s1.style.display = "flex"
    $s2.style.display = "flex"
    $s3.style.display = "flex"
    $s4.style.display = "flex"
    $boss.style.display = "flex"
    $health.innerText = "200hp"
    $plus1.innerHTML = `<i class="fa-solid fa-lock"></i><p>+1</p><p>1000$</p>`
    $plus1.style.backgroundColor = "rgba(14, 14, 14, 0.603)"
    $plus3.innerHTML = `<i class="fa-solid fa-lock"></i><p>+3</p><p>3000$</p>`
    $plus3.style.backgroundColor = "rgba(14, 14, 14, 0.603)"
    $plus5.innerHTML = `<i class="fa-solid fa-lock"></i><p>+5</p><p>8000$</p>`
    $plus5.style.backgroundColor = "rgba(14, 14, 14, 0.603)"
    $double.innerHTML = `<i class="fa-solid fa-lock"></i><p>x2</p><p>15000$</p>`
    $double.style.backgroundColor = "rgba(14, 14, 14, 0.603)"
    $s1.innerHTML = `<i class="fa-solid fa-lock"></i><p>+1</p><p>1000$</p>`
    $s1.style.backgroundColor = "rgba(14, 14, 14, 0.603)"
    $s2.innerHTML = `<i class="fa-solid fa-lock"></i><p>+3</p><p>3000$</p>`
    $s2.style.backgroundColor = "rgba(14, 14, 14, 0.603)"
    $s3.innerHTML = `<i class="fa-solid fa-lock"></i><p>+5</p><p>8000$</p>`
    $s3.style.backgroundColor = "rgba(14, 14, 14, 0.603)"
    $s4.innerHTML = `<i class="fa-solid fa-lock"></i><p>x2</p><p>15000$</p>`
    $s4.style.backgroundColor = "rgba(14, 14, 14, 0.603)"


}

$startbutton.onclick = function()
{
    $rules.style.display = "none"
    $difficulty.style.display = "flex"
}
$boss.onclick = function()
{

    
        $boss.style.display = "none"
        balance -= 20000
        $amount.innerText = "Balance: " + balance + "$";
        $first.style.display = "none"
        $bossBox.style.display = "flex"
        activeBoss = true
        bossstart()
    
   
}

function bossstart()
{

        if(hp <= 0)
        {
            $bossBox.style.display = "none"
            $restar.style.display = "flex"
        }   
     

}

$bossBox.onclick = function()
{
    bossstart()
    hp -= damage;
    $health.innerText = hp + "hp";
  
}



$easy.onclick = function()
{
    startamount = 10;
    $difficulty.style.display = "none"
    $first.style.display = "flex"
    $body.style.background = "url(background.jpg)"
    audio.play();
    

}

$medium.onclick = function()
{
    startamount = 5;
    $difficulty.style.display = "none"
    $first.style.display = "flex"

}

$hard.onclick = function()
{
    startamount = 1;
    $difficulty.style.display = "none"
    $first.style.display = "flex"

}


$clickArea.onclick = function()
{
    monaudio.play();
    balance = balance + (addition + startamount) * multiplyer;
    $amount.innerText = "Balance: " + balance + "$";
    if(balance >= 1000)
    {
        $plus1.innerHTML = `<i class="fa-solid fa-unlock"></i><p>+1</p><p>1000$</p>`
        $plus1.style.backgroundColor = "rgba(255, 255, 255, 0.404)"
    }
    if(balance >= 3000)
    {
        $plus3.innerHTML = `<i class="fa-solid fa-unlock"></i><p>+3</p><p>3000$</p>`
        $plus3.style.backgroundColor =  "rgba(255, 255, 255, 0.404)"

    }
    if(balance >= 8000)
    {
        $plus5.innerHTML = `<i class="fa-solid fa-unlock"></i><p>+5</p><p>8000$</p>`
        $plus5.style.backgroundColor =  "rgba(255, 255, 255, 0.404)"

    } 
    if(balance >= 15000)
    {
        $double.innerHTML = `<i class="fa-solid fa-unlock"></i><p>x2</p><p>15000$</p>`
        $double.style.backgroundColor =  "rgba(255, 255, 255, 0.404)"

    }
    if(balance >= 20000)
    {
        $s1.innerHTML = `<i class="fa-solid fa-unlock"></i><p>+1</p><p>20000$</p>`
        $s1.style.backgroundColor =  "rgba(255, 255, 255, 0.404)"

    }
    if(balance >= 22500)
    {
        $s2.innerHTML = `<i class="fa-solid fa-unlock"></i><p>+3</p><p>22500$</p>`
        $s2.style.backgroundColor = "rgba(255, 255, 255, 0.404)"

    }
    if(balance >= 25000)
    {
        $s3.innerHTML = `<i class="fa-solid fa-unlock"></i><p>+5</p><p>25000$</p>`
        $s3.style.backgroundColor = "rgba(255, 255, 255, 0.404)"

    }
    if(balance >= 30000)
    {
        $s4.innerHTML = `<i class="fa-solid fa-unlock"></i><p>x2</p><p>30000$</p>`
        $s4.style.backgroundColor = "rgba(255, 255, 255, 0.404)"

    }
    $clickArea.classList.toggle("to")

}


$plus1.onclick = function()
{
    if(balance >= 1000)
    {
        addition += 1;
        $plus1.style.display = "none"
        balance -= 1000;
        $amount.innerText = "Balance: " + balance + "$";
    }
}


$plus3.onclick = function()
{
    if(balance >= 3000)
    {
        addition += 3;
        $plus3.style.display = "none"
        balance -= 3000;
        $amount.innerText = "Balance: " + balance + "$";
    }
}

$plus5.onclick = function()
{
    if(balance >= 8000)
    {
        addition += 5;
        $plus5.style.display = "none"
        balance -= 8000;
        $amount.innerText = "Balance: " + balance + "$";
    }
}

$double.onclick = function()
{
    if(balance >= 15000)
    {
        multiplyer *= 2;
        $double.style.display = "none"
        balance -= 15000;
        $amount.innerText = "Balance: " + balance + "$";
    }
}

$s1.onclick = function()
{
    if(balance >= 20000)
    {
        damage += 1;
        $s1.style.display = "none"
        balance -= 20000
        $amount.innerText = "Balance: " + balance + "$";
    }
}
$s2.onclick = function()
{
    if(balance >= 22500)
    {
        damage += 3;
        $s2.style.display = "none"
        balance -= 22500
        $amount.innerText = "Balance: " + balance + "$";
    }
}
$s3.onclick = function()
{
    if(balance >= 25000)
    {
        damage += 5;
        $s3.style.display = "none"
        balance -= 25000
        $amount.innerText = "Balance: " + balance + "$";
    }
}
$s4.onclick = function()
{
    if(balance >= 30000)
    {
        damage *= 2;
        $s4.style.display = "none"
        balance -= 30000
        $amount.innerText = "Balance: " + balance + "$";
    }
}


