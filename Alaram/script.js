
let rune=()=>{

    let show1=document.querySelector("#inp").value;
   

   let inter= setInterval(()=>{
        
    let war=document.querySelector("#shows")
     war.innerHTML=`Alarm Set For ${show1}`

    let time=new Date()   // time in object form=====

      time=`${time.getHours().toString() .padStart(2,"0")}:${time.getMinutes().toString() .padStart(2,"0")}`   // get hours are in  number form so we use to string to change intt string because padstart take value in strinf format ===== padstart take 2 parameter first is how many digit u want to add and secondly whar u want to add

    if(show1==time){
    war.innerHTML="Alarm Snoozing";
     document.querySelector("#sing").play()
    war.style.color="red"
    war.style.fontSize="50px"

    setTimeout(() => {
      document.querySelector("#sing").pause()
      clearInterval(inter)
    }, 10000);
    }

    else{
      war.innerHTML="Alarm Set";
    }
  },1000)
  }