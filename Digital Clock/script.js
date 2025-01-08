

setInterval(() => {
    let show=document.querySelector("#display")
    let time= new Date()

    let currenttime=`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
     show.innerHTML=currenttime
   },1000)
