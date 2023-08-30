// var
var hello = "hello";

function sayHello() {
  var hello = "hello hello"; // function스코프를 가지기 때문에.
  // 함수 내에서만 작동함.
  console.log(hello); // hello hello
}
sayHello;
console.log(hello); // hello

var hello1 = "hello";
var hello1 = "hello hello";

console.log(hello1); // hello hello
// 이런 유연한 js 는 문제가 많았다.
// 그래서 ES6 이후 let과 const 가 나왔다.
