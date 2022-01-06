const express = require("express");

const { validation, ctrlWrapper, auth } = require("../../middlewares");

const { userJoiSсhema } = require("../../models/user");
const { users: ctrl } = require("../../controllers");

const router = express.Router();

router.post("/signup", validation(userJoiSсhema), ctrlWrapper(ctrl.signup));

router.post("/login", validation(userJoiSсhema), ctrlWrapper(ctrl.login));

router.get("/logout", auth, ctrlWrapper(ctrl.logout));
router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));
module.exports = router;
