const express = require("express");

const { validation, ctrlWrapper, auth, upload } = require("../../middlewares");

const { userJoiSсhema, emailSchema } = require("../../models/user");
const { users: ctrl } = require("../../controllers");

const router = express.Router();

router.post("/signup", validation(userJoiSсhema), ctrlWrapper(ctrl.signup));

router.post("/login", validation(userJoiSсhema), ctrlWrapper(ctrl.login));

router.get("/logout", auth, ctrlWrapper(ctrl.logout));

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));

router.post("/verify", validation(emailSchema), ctrlWrapper(ctrl.verify));

module.exports = router;
