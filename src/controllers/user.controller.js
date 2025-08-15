import { User } from "../models/user.model.js";
import {
  hashPassword,
  comparePassword,
  jwtToken,
} from "../utilies/user.authserivce.js";

// create user with hash password
export const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashpass = await hashPassword(password);

    const user = await User({
      email,
      password: hashpass,
    });
    user.save();

    res.send({ data: "user created successfully" });
    // await User =
  } catch (error) {
    throw new error("api not work");
  }
};

export const getAllUser = async (req, res) => {
  try {
    const getAll = await User.find();
    res.status(200).send({
      data: {
        getAll,
      },
    });
  } catch (error) {
    throw new error("get all user api is not work ");
  }
};

// login controller

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    console.log(user);

    const checkPass = await comparePassword(password, user.password);

    console.log(checkPass);
    if (checkPass) {
      const token = jwtToken({ email, password });

      const data = {
        email,
        // password,
        token,
      };

      res
        .status(200)
        .send({
          data: { message: "user is login successfully", result: data },
        });
    } else {
      res.status(401).send({ data: "Invalid email or password" });
    }
  } catch (error) {
    throw new error("error in login ");
  }
};
