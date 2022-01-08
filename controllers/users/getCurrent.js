const getCurrent = async (req, res) => {
  const { subscription = "starter", email } = req.user;
  res.json({
    status: "success",
    code: 200,
    data: {
      user: {
        subscription,
        email,
      },
    },
  });
};

module.exports = getCurrent;
