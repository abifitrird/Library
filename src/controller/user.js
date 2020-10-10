const { User } = require("../../models");

exports.getUsersData = async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: {
        exclude: ["userId", "createdAt", "updatedAt"],
      },
    });
    res.send({
      message: "Data has been successfully loaded",
      data: {
        users: userData,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "SERVER ERROR",
      },
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.destroy({
      where: {
        id,
      },
    });
    res.send({
      message: `Data ${id} has been deleted`,
      data: {
        id: id,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "SERVER ERROR",
      },
    });
  }
};
