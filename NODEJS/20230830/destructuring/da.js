const object = { a: 1, b: 2 };
const object1 = { a1: 1, b1: 2 };

const a = object.a;
const b = object.b;

console.log(a);
console.log(b);
// 비효율적임.

const { a1, b1 } = object1;
console.log(a1, b1); // 1 2
// 비구조화할당은 변수 안의 값을 쉽게 변수에 할당시킬 수 있게 함.
// 배열에서도 사용가능하다.

const array = [1, 2];
const [one, two] = array;

console.log(one, two); // 1,2
