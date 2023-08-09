// filter
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter(v => v % 2 === 0);

// filter는 return 값이 true인 것만 모아서 새로운 배열을 만듭니다.
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result1 = arr11.filter(v => {
    return true
})
result1

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result2 = arr2.filter(v => {
    return false
})
result2

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result3 = arr3.filter(v => {
    return v > 5
})
result3

const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result4 = arr4.filter(v => {
    return v % 2 !== 0
})
result4

// reduce
[10, 20, 30, 40, 50].reduce((a, c) => a + c, 0) // 암기코드
[10, 20, 30, 40, 50].reduce((a, c) => a + c) // X
//[].reduce((a, c) => a + c) // X
[10, 20, 30, 40, 50].reduce((a, c) => {
    console.log(a, c)
    return a + c
})

// 파라미터 이름은 자유롭게 지정할 수 있습니다.
// forEach, map, filter, reduce 등의 메서드 모두 마찬가지 입니다.
[10, 20, 30, 40, 50].reduce((ho, jun) => {
    console.log(ho, jun)
    return ho + jun
})

// includes
const arr11 = ['hello', 'world', 'hojun']
arr11.includes('world')

const arr21 = ['hello', 'world', 'hojun']
arr21.includes('leehojun')

const arr31 = ['hello', 'world', 'hojun']
arr31.includes('jun')

// join(***)
let arr12 = ['hello', 'world', 'hojun']
arr12.join('!')

let arr13 = ['hello', 'world', 'hojun']
arr13.join(' ')

let arr14 = ['010', '5044', '2903']
arr14.join('-')

let arr15 = ['안녕하세요.', '제 이름은 이호준입니다.', '저는 제주에 살아요.']
arr15.join('\n')
console.log(arr15.join('\n'))

let arr16 = ['안녕하세요.', '제 이름은 이호준입니다.', '저는 제주에 살아요.']
arr16.join('<br>')
console.log(arr16.join('<br>')) // innerHTML로 하면 <br>이 개행됩니다.
document.write(arr16.join('<br>'))

// reverse
[10, 20, 30].reverse() // [30, 20, 10]