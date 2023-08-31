const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/"); // 경로 명시
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // 파일이름 명시
  },
});
const upload = multer({ storage: storage }); // 경로에 이미지 저장

module.exports = upload;
