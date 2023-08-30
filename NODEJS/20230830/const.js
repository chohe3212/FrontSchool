const hello = " first hello";
// hello = "second hello"; // error
// const는 재정의가 불가하기에

if (true) {
  const hello = "second hello";
  console.log(hello); // second hello
}

console.log(hello); // first hello

// let 과 const 사용 권장함.
