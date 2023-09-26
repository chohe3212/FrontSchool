import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import { createStore } from "redux";
import rootReducer from "./modules";
import { Provider } from "react-redux";

const store = createStore(rootReducer);
console.log(store.getState());

const container = document.getElementById("root");
const root = createRoot(container);

// Provider를 통해 app컴포넌트 안의 모든 컴포넌트가 store에 접근 할 수 있도록 합니다.
root.render(
  <Provider store={store}>
    <App tab="home" />
  </Provider>
);

// react 없이 redux로 만들어보기

// import { createStore } from "redux";

// console.log("hi");
// const plus = document.getElementById("plus");
// const minus = document.getElementById("minus");
// const number = document.getElementById("number");
// const quantity = document.getElementById("quantity");
// const totalPrice = document.getElementById("total");

// const PRICE = 17500;

// function countReducer(state = 0, action) {
//   switch (action.type) {
//     case "ADD":
//       return state + 1;
//     case "SUBSTRACT":
//       return state - 1;
//     default:
//       return state;
//   }
// }

// // 작동은 제대로 한다.
// const store = createStore(countReducer);

// let count = 0;

// // const updateResult = (c) => {
// //   number.textContent = count;
// //   quantity.innerHTML = c;
// //   totalPrice.textContent = c * PRICE;
// // };

// // State Change
// const addNumber = () => {
//   // count += 1;
//   // minus.disabled = false;
//   // updateResult(count);
//   store.dispatch({ type: "ADD" });
// };

// // State Change
// const substractNumber = () => {
//   // count -= 1;
//   // plus.disabled = false;
//   // updateResult(count);
//   store.dispatch({ type: "SUBSTRACT" });
// };

// // Init
// //number.textContent = count;
// //updateResult(count);

// const handleWrite = () => {
//   number.textContent = store.getState();
//   quantity.textContent = store.getState();
//   totalPrice.textContent = store.getState() * PRICE;
// };

// store.subscribe(handleWrite);

// plus.addEventListener("click", addNumber);
// minus.addEventListener("click", substractNumber);
