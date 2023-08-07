// 애러가 발생하지 않는 코드
// data.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0)))

let data = ['a', 'z', 'b', 'e'];
data.sort();

// 사전식 정렬이어서 아래와 같은 값은 정렬이 되지 않습니다!
let data1 = [1, 11, 2, 111, 22];
data1.sort();

// 지금 이해하시라고 드리는 코드는 아니고 실무 DB로 가지고 있으시라고 드리는 코드입니다!
// data.sort((a, b) => (a > b ? -1 : (a < b ? 1 : 0)))
// data.sort((a, b) => (a < b ? -1 : (a > b ? 1 : 0)))

// 여러분들이 자주 사용하는 코드
let data2 = [1, 11, 2, 111, 22];
data2.sort((a, b) => (a - b)); // 오름차순
data2.sort((a, b) => (b - a)); // 내림차순

// 원리
let test = [13, 9, 10];

test.sort(function (a, b) {
    console.log('a: ' + a, 'b: ' + b);
    return a - b;
});