// let : 재정의 가능한 변수
// const : 재정의 불가한 상수

let hello2 = "first hello";
hello2 = "second hello"; // 재정의 가능
// let hello2 = "second hello"; // error

console.log(hello2); // second hello

if (true) {
  let hello2 = "third hello";
  console.log(hello2); // third hello
}
console.log(hello2); // secondhello
