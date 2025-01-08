




let store=""

let cal=(value)=>{

 let show=document.querySelector("#display")
 store=store+value;
 show.innerHTML=store;

}

let result=()=>{

let show=document.querySelector("#display")
show.innerHTML=eval(store)     //  eval gives number =  "1+2"=3(number)
store=eval(store)    // result is number like 3
store.toString()  // it change number into string

}

let del=()=>{

    let show=document.querySelector("#display")
    store=store.slice(0,-1)
    show.innerHTML=store;

}

let allc=()=>{
  
    let show=document.querySelector("#display")
    store="";
    show.innerHTML=store;
    
}

let squ=()=>{
    let show=document.querySelector("#display")
    store=store*store;
    show.innerHTML=store;
    
}