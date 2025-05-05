let store = "";


let cal = (value) => {
  let show = document.querySelector("#display");
  store = store + value;
  show.value = store;  
}

let result = () => {
  let show = document.querySelector("#display");
  try {
    show.value = eval(store);  
    store = show.value;  
  } catch (e) {
    show.value = "Error";  
  }
}

let del = () => {
  let show = document.querySelector("#display");
  store = store.slice(0, -1);  
  show.value = store;
}

let allc = () => {
  let show = document.querySelector("#display");
  store = ""; 
  show.value = store; 
}

let squ = () => {
  let show = document.querySelector("#display");
  store = Math.pow(store, 2); 
  show.value = store; 
}
