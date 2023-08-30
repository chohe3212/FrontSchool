const http = require("http");

http // 서버를 구축할 수 있도록 하는 패키지
  .createServer((req, res) => {
    // request : 요청보낼때 정보가 담기게됨 , require : 응답 정보가 담김
    if (req.url === "/") {
      res.writeHead(200); // 정상적으로 응답을 했을때 200 잘못들어가면 404
      res.end("main url");
    } else if (req.url === "/upload") {
      res.writeHead(200); // 정상적으로 응답을 했을때 200 잘못들어가면 404
      res.end("upload url");
    } else if (req.url === "/delete") {
      res.writeHead(200);
      res.end("delete url");
    } else {
      res.writeHead(404);
      res.end("Not found!");
    }
  })
  .listen(3000, () => {
    // 3000: 포트 번호
    console.log("3000번 포트 접속 완료~!!");
    // 접속이 정상적으로 된다면 실행됨.
  });
