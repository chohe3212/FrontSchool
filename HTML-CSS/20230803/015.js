// arr(*****)

// 배열을 생성하는 방법
// let arr = [];
// let arr = [1, 2, 3];
// let arr2 = new Array(4, 5, 6);
// let arr2 = new Array(3);

const arr = [10, 20, 30]
// mutable, 배열(Array)
arr[0] = 100 // // 변경가능, mutable
// arr = 100
// arr = [10, 20, 30]
// [10, 20, 30] == [10, 20, 30]
// [10, 20, 30] == [10, 20, 30]
// false
// arr == [10, 20, 30]
// false
console.log(arr)
console.dir(arr) // 프러퍼티와 메서를 볼 수 있습니다.
// immutable, 문자열(string)
const s = 'hello world'
console.log(s[0])
s[0] = 'i' // 불변, immutable

// 1. array에 여러가지 형태
let arr1 = []

let arr2 = [1, 2, 3]

let arr3 = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]
arr3[0] // [1, 2, 3]
arr3[1] // [4, 5, 6]
arr3[2] // [7, 8, 9]
arr3[1][2] // 6

let arr4 = ['leehojun', 10, 180] // 이렇게 여러개의 타입이 혼합되어 쓰시는 것을 권하진 않습니다.
arr4[0] // 'leehojun'
arr4[0][3] // 'h'

// 2. array에 길이 출력
let arr11 = [1, 2, 3]
arr11.length // 3
arr11.length = 100
arr11 // [1, 2, 3, empty × 97]
arr11[10] = null
arr11 // [1, 2, 3, empty × 7, null, empty × 89]

let arr12 = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]
arr12.length // 3
arr12.flat().length

// 프로퍼티를 추가하는 것도 가능합니다.
// 가능하다 해서 실무에 사용하지 않습니다.
arr['leehojun'] = 100
arr.hojun = 1000

// 참고로 함수도 프로퍼티는 추가가 가능합니다.
// 가능하다 해서 실무에 사용하지 않습니다.
function test() { }
test.hojun = 1000


// 0차원, 1차원, 2차원, 3차원, 다차원
const a = 10 // 스칼라
const b = [10, 20, 30] // 벡터
const c = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
] // 메트릭스
const d = [
    [[1, 2], [1, 2], [1, 2]],
    [[1, 2], [1, 2], [1, 2]],
    [[1, 2], [1, 2], [1, 2]]
] // 텐서(3차원 이상의 다차원)
// 그렇기에 인공지능 중 가장 유명한 라이브러리 텐서플로우는 결국 다차원 행렬의 연산입니다.


let arr13 = [[[10, 20], [10, [10, 20]], 3],
[[10, 20], [10, [10, 20]], 6],
[[10, 20], [10, [10, 20]], 9]]
arr13.flat()
arr13.flat().flat().flat()
arr13.flat(3)
arr13.flat(Infinity)