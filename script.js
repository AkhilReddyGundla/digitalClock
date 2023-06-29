const clock = document.querySelector(".clock")

const currDate = document.querySelector(".date")

setInterval(function(){
    const date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
    currDate.innerHTML = date.getDay()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()
    console.log(date)
},1000)
// const date = new Date()