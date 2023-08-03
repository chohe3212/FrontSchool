function add(x, y) {
  return x + y;
}
function sub(x, y) {
  return x - y;
}
function mul(x, y) {
  return x * y;
}
function div(x, y) {
  return x / y;
}

function strToInt(string) {
  // js는 카멜 표기법을 권장한다.
  return parseInt(string.replaceAll(",", ""));
}
console.log(str_to_int("100,000"));

function strSplit(string) {
  console.log(string);
  return string.split("");
}

console.log(strSplit("hello"));
