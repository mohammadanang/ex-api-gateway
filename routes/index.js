var express = require('express');
var router = express.Router();
const userRouter = require("./users")
const authRouter = require("./auth-service.route")

router.use((req, res, next) => {
  console.log("Called: ", req.path)
  next()
})

router.use(userRouter)
router.use(authRouter)

module.exports = router;
