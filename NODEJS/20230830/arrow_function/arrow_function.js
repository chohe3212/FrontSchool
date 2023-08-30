// 화살표 함수.
const foo = () => {
  console.log("arrow function");
};

function foo1() {
  console.log("function");
}

foo(); // arrow function

foo1(); // function

// 매개변수가 있는 화살표 함수
const foo2 = (x) => {
  return x;
};
console.log(foo2("arrow")); // arrow

const foo3 = (x, y) => x + y; // 바로 return을 해주고 싶을때

const foo4 = (x, y) => {
  console.log("두줄 이상", x + y);
  return x + y;
}; // 코드가 두줄 이상일때

console.log(foo3(2, 3)); // 5

console.log(foo4(2, 3));
// 두줄 이상 5
// 5
