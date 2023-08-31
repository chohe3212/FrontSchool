var express = require("express");
var router = express.Router();

const userInfo = {
  lee: {
    password: "123123",
  },
  kim: {
    password: "456456",
  },
};

// main으로 돌아갈 수 있는 코드
router.get("/", (req, res) => {
  const session = req.session;
  res.render("index", {
    username: session.username,
    // session.username에 값이 있다면 이를 보내주고 없으면 null 을 보냄.
  });
});

router.get("/login/:username/:password", (req, res) => {
  const session = req.session;
  const { username, password } = req.params;
  if (!userInfo[username]) {
    // user가 존재하지 않으면
    res.status(400).json({
      message: "user not found",
    });
  }
  if (userInfo[username]["password"] === password) {
    // user 정보가 일치함
    session.username = username; // session에 유저 정보를 담아서 보내줌,
    res.status(200).json({
      message: "user login!!",
    });
  } else {
    // user 정보가 일치하지 않음.
    res.status(400).json({
      message: "user pw incorrect!!",
    });
  }
});

module.exports = router;
