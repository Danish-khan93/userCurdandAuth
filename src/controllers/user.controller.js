import { User } from "../models/user.model.js";
import {
  hashPassword,
  comparePassword,
  jwtToken,
} from "../utilies/user.authserivce.js";

// create user with hash password
// const user = new User();
export const createUser = async (req, res) => {
  try {
    const { email, password, role, roleId, firstName, lastName } = req.body;

    const checkDublicate = await User.findOne({ email: { $eq: email } });

    if (checkDublicate) {
      console.log("dublicate");

      res.status(409).send({
        data: { message: "This email is already exist in record" },
      });
    } else {
      console.log("not dublicate");
      const hashpass = await hashPassword(password);
      const user = new User({
        email,
        password: hashpass,
        firstName,
        lastName,
        role,
        roleId,
      });

      const createdUser = await user.save();
      if (createdUser) {
        const resData = {
          email: createdUser.email,
          role: createdUser.role,
          roleId: createdUser.roleId,
          firstName: createdUser.firstName,
          lastName: createdUser.lastName,
        };
        res.status(200).send({
          data: { message: "User created Sucessfully", result: resData },
        });
      } else {
        res.status(500).send({
          data: { message: "Error in create user" },
        });
      }
    }
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
    if (user) {
      const checkPass = await comparePassword(password, user.password);
      console.log(checkPass);
      if (checkPass) {
        const token = jwtToken({ email, password });

        const data = {
          email,
          // password,
          token,
          role: user.role,
          roleId: user.roleId,
          id: user._id,
          fullName: user.firstName + " " + user.lastName,
        };

        res.status(200).send({
          data: { message: "user is login successfully", result: data },
        });
      } else {
        res.status(401).send({ data: "Invalid Password" });
      }
    } else {
      res.status(409).send({ data: "Invalid email " });
    }
  } catch (error) {
    throw new error("error in login ");
  }
};

// delete user

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);
    const findUser = await User.findById(id);
    console.log(findUser);

    if (findUser) {
      await User.findOneAndDelete({ _id: findUser?._id });
      res.status(200).send({ data: "delete successfully" });
    } else {
      res.status(409).send({ data: "id not found" });
    }
  } catch (error) {
    throw new error("delete is not work");
  }
};
