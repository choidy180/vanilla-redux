import { legacy_createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  if(action.type === "ADD"){
    return count + 1;
  } else if(action.type === "MINUS"){
    return count - 1;
  } else {
    return count;
  }
};

const countStore = legacy_createStore(countModifier);

console.log(countStore.dispatch({type: "ADD"}));
console.log(countStore.dispatch({type: "ADD"}));
console.log(countStore.dispatch({type: "ADD"}));
console.log(countStore.dispatch({type: "ADD"}));
console.log(countStore.dispatch({type: "ADD"}));
console.log(countStore.dispatch({type: "MINUS"}));

console.log(countStore.getState());