const User = require(".././models/User");

const show = async (req, res) => {
  try {
    res.send("This is User");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  show,
};
