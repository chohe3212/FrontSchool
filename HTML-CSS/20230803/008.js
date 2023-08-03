function add(a, b) {
  let answer = a + b;
}

let result = add(10, 20);

///////////////

function add(a, b) {
  let answer = a + b;
  return;
}

let result4 = add(10, 20);

///////////////

function add(a, b) {
  let answer = a + b;
  return undefined;
}

let result2 = add(10, 20);

///////////////

function test() {
  console.log("hello");
  console.log("hello");
  console.log("hello");
  return;
  console.log("hello");
  console.log("hello");
  console.log("hello");
}

///////////////

function test() {
  console.log("hello");
  console.log("hello");
  console.log("hello");
  return;
  // 이렇게 애러가 나는 코드가 있어도 javascript엔진이 보지 않는 공간에서는 애러를 출력하지 않습니다.
  console.logi("hello");
  console.loghojun("hello");
  console.logjun("hello");
}

///////////////

// 잊으셔도 됩니다!
// 어려운데 심지어 중요하지도 않습니다.
// 단락 평가에서도 마찬가지입니다!
function errorCode() {
  console.loghojun("hello");
}
let value = true;
// errorCode 실행시키지 않았다
let result1 = true || errorCode();

///////////////

// return(반환보다는 종료에 느낌으로 쓰는 코드)
function test() {
  if (true) {
    if (false) {
      console.log("1");
      return;
    }
  }
  console.log("2");
  // 여러 코드...
  return;
}

///////////////

// 함수의 이름은 결국 변수이다!
console.log("hello"); // 'hello'는 아규먼트
let leehojun = console.log;
leehojun("hello");

function test() {
  console.log("hello");
}
test();
let hojun = test;
hojun();

///////////////

// 함수의 이름은 결국 변수이기 때문에 아규먼트로도 전달할 수 있을까요?
// 또는 리턴값으로도 전달할 수 있을까요?
// 답은 '네'입니다!

function addAndMultiply(x, y) {
  // 메모리 효율을 위해 함수를 내부에서 만들어서 사용
  function add(x, y) {
    return x + y;
  }
  let sum = add(x, y) * add(x, y);
  return sum;
}