// 미들웨어 파일을 따로 분리해서 관리함.
const loginCheck = (req, res, next) => {
  const userLogin = true;
  // const userLogin = false;
  if (userLogin) {
    next();
  } else {
    res.status(400).json({
      message: "login fail",
    });
  }
};
module.exports = loginCheck;
