const multer = require("multer");
const upload = multer({ dest: "uploads/" }); // 경로에 이미지 저장

module.exports = upload;
