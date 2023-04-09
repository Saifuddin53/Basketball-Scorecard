let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")

let valHome = 0
let valGuest = 0

function plusoneHome(){
    valHome += 1
    scoreHome.textContent = valHome
}

function plustwoHome(){
    valHome += 2 
    scoreHome.textContent = valHome
}

function plusthreeHome(){
    valHome += 3
    scoreHome.textContent = valHome
}

function plusoneGuest(){
    valGuest += 1
    scoreGuest.textContent = valGuest
}

function plustwoGuest(){
    valGuest += 2
    scoreGuest.textContent = valGuest
}

function plusthreeGuest(){
    valGuest += 3
    scoreGuest.textContent = valGuest
}