var express = require("express");
var router = express.Router();
const loginCheck = require("../module/loginCheck");
// 미들웨어 파일은 module/loginCheck에 있음.

const upload = require("../module/imageUpload");

// loginCheck 를 체크하고 next() 함수를 만나면 다음 로직으로 이동함.
router.get("/", loginCheck, (req, res) => {
  res.status(200).json({
    message: "login success!",
  });
});

// middleware를 통해 이미지가 저장됨.
router.post("/upload", upload.single("image"), (req, res) => {
  const file = req.file;
  console.log(file);
  res.status(200).json({
    message: "upload success!",
  });
});

///////////////////////////////////////////////////////////

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// 라우팅의 시작은 라우터로부터 시작됨.
router.post("/main", (req, res) => {
  // res.json({
  //   message: "success!",
  // });
  console.log(req.body); // {data : 'data1'}

  const data = req.body.data;
  console.log(data);

  // res.send("문자열이 응답됩니다."); // send는 문자열을 응답할 수 있을때 사용한다.

  // res.json({
  //   message: "json 응답", //json 객체를 응답한다.
  // });

  res.render("index");
  // 사용자들이 볼 수 있는 뷰파일들을 보낸다.
  // postman preview에서 볼 수 있다.
});

// Get, Post, Put ,Delete

// Get method
router.get("/read", (req, res) => {
  res.status(200).json({
    // 200: 정상적으로 응답할 것임을 명시
    message: "read success",
  });
});

// Post method : 데이터베이스에 데이터를 넣을때 사용됨.
let arr = [];
router.post("/create", (req, res) => {
  console.log(req.body);
  //const data = req.body.data; // 아래 코드와 똑같이 동작함.
  const { data } = req.body; // 비구조화할당으로 값을 넣어줌,
  arr.push(data);
  res.status(200).json({
    message: "create success",
    result: arr, // one, two ...  계속 누적으로 들어감
  });
});

// Put method
// update를 하고 싶은데, 몇번째인지 명시를 해주고 싶을때 update/0
router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  arr[id] = data;
  res.status(200).json({
    message: "update success",
    result: arr, // 들어있는 데이터중 id번째 값을 바꿈.
  });
  console.log(id);
});

// Delete method

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  arr.splice(id, 1);
  res.status(200).json({
    message: "delete success",
    result: arr, // id 번째 값이 지워짐.
  });
});

module.exports = router;
