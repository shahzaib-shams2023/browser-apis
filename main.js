// Online / Offline APIs

function updateStatus(){
    var status = document.getElementById("status")

    if(navigator.onLine){
        console.log("Online")
        status.innerText = "You are online!"
        status.style.color = "green"
    }else{
        console.log("Offline")
        status.innerText = "You are offline."
        status.style.color = "red"
    }
}

window.addEventListener("online" , updateStatus())

window.addEventListener("offline" , updateStatus())

// Page Visibility API

document.addEventListener("visibilitychange" , function(){
    if(document.hidden){
        document.title = "😒 Come back!"
    }else{
        document.title = "Page Visibility API"
    }
})

// Navigation API

var timing = performance.timing
var pageLoadTime = timing.loadEventEnd - timing.navigationStart 

document.getElementById("timing").innerHTML = `Page Load time: ${pageLoadTime}`

// Device orientation Api

window.addEventListener("deviceorientation" , function(e) {
    var alpha = e.alpha.toFixed(2)
    var beta = e.beta.toFixed(2)
    var gamma = e.gamma.toFixed(2)


    document.getElementById("deviceStatus").innerHTML = 
   `Alpha: ${alpha} , Beta: ${beta} , Gamma: ${gamma}`

})