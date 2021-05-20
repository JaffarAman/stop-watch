var min = document.getElementById("min")
var sec = document.getElementById("sec")
var msec = document.getElementById("msec")
var minHead = 0;
var secHead = 0;
var msecHead = 0;
var interval ;

function timer(){
        msecHead++
        msec.innerHTML = msecHead
        if(msecHead == 100){
                secHead++
                sec.innerHTML = secHead
                msecHead = 00;
        }
        else if(secHead == 10){
                minHead++
                min.innerHTML = minHead
                secHead = 0
        }
}

function start(){
        interval =  setInterval(timer, 10)
        var startBtn =document.getElementById("startBtn");
        startBtn.disabled = true

}

function stopp(){
        clearInterval(interval)
        var startBtn =document.getElementById("startBtn");
        startBtn.disabled = false
        
}

function restart(){
        minHead = 0
        secHead = 0 
        msecHead = 0
        min.innerHTML = minHead 
        sec.innerHTML = secHead 
        msec.innerHTML = msecHead 
        var startBtn =document.getElementById("startBtn");
        startBtn.disabled = false

}
// console.log()
