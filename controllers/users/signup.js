const { Conflict } = require("http-errors");
const { User } = require("../../models");

const signup = async (req, res) => {
  const { password, email } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`Email ${email} in use`);
  }
  const newUser = new User({ email });
  newUser.setPassword(password);
  newUser.save();

  res.status(201).json({
    status: "success",
    code: 201,
    data: { user: { email } },
  });
};

module.exports = signup;