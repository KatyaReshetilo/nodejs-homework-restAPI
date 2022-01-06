const express = require("express");

const { validation, ctrlWrapper } = require("../../middlewares");

const { userJoiSchema } = require("../../models/user");
const { users: ctrl } = require("../../controllers");

const router = express.Router();

router.post("/signup", validation(userJoiSchema), ctrlWrapper(ctrl.signup));

module.exports = router;
