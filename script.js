const clock = document.querySelector(".clock")

const currDate = document.querySelector(".date")

setInterval(function(){
    const date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
    
    let day
    let month =  date.getMonth();
    if(date.getDay()<9){
        day = "0" + date.getDay()
    }
    if(date.getMonth()<9){
        month ="0" + month
    }
    currDate.innerHTML = day + "/" + month + "/" + date.getFullYear()

},1000)
