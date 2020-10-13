const { User } = require("../../models");

// hasing or salting credential data such as password
const bycript = require("bcrypt");

// make token for authentication
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    // const { fullName, email, password } = req.body;
    const { email, password, fullName, gender, phone, address } = req.body;

    //   check if email already exist
    const checkEmail = await User.findOne({
      where: {
        email,
      },
    });
    // if email already exist, let user knows
    if (checkEmail) {
      return res.status(400).send({
        error: {
          message: "Operaation failed. Email already exist",
        },
      });
    }

    // if email didn't exist yet
    //  salt strength
    const saltRounds = 10;
    //   salting password
    const hashedPassword = await bycript.hash(password, saltRounds);

    //   hold response body into a temporary variable
    const user = await User.create({
      email,
      password: hashedPassword,
      fullName,
      gender,
      phone,
      address,
    });

    //   key for encrypting token
    const key = "@dumbw4ys!!";
    //   create new jwt after register success
    const token = jwt.sign(
      {
        id: user.id,
      },
      key
    );

    // send response
    res.send({
      message: "You've been registered successfully",
      data: {
        email: user.email,
        token,
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

exports.login = async (req, res) => {
  try {
    // di sini function untuk login
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "SERVER ERROR",
      },
    });
  }
};
