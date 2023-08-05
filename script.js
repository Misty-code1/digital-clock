let hrs = document.getElementById('hrs')
let min = document.getElementById('min')
let sec = document.getElementById('sec')

// setInterval(()=>{

//     let currentTime = new Date();
    
//     hrs.innerHTML = currentTime.getHours()
//     min.innerHTML = currentTime.getMinutes()
//     sec.innerHTML = currentTime.getSeconds()
// }),1000




// To make the time show "0" a number is les than 10 .. eg: "06"

setInterval(()=>{

    let currentTime = new Date();
    
    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
}),1000