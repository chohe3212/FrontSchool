const http = require("http");

http
  .createServer((req, res) => {
    // request : 요청보낼때 정보가 담기게됨 , require : 응답 정보가 담김
    res.writeHead(200, { "Content-Type": "text/html" });
    // writeHead(상태코드, { 어떤 타입인지 })
    // 상태코드 : 404 : 해당응답이 정상적으로 이루어지지 않음. 200 :  정상적
    res.end("<p>hello world</p>");
  })
  .listen(3000, () => {
    // 3000: 포트 번호
    console.log("3000번 포트 접속 완료~!!");
    // 접속이 정상적으로 된다면 실행됨.
  });

/*
localhost : 현재 컴퓨터의 내부 주소
  서버개발시 테스트용으로 가장 많이 사용함.
  localhost = 127.0.0.1 같은 의미임. (IP)

포트(port) : 서버내의 프로세스를 구분하는 번호
서버에서는 다양한 일을 처리하는데(http, db등)
, 이를 포트번호로 구분해 실행한다.
ex ) localhost 127.0.0.1 ->  http : 80, https : 443, db : 27017 -> server


*/
