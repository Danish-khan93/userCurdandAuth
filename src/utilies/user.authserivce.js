import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
// hash password
export const hashPassword = async (password) => {
  const hashPass = await bcrypt.hash(password, 8);
  return hashPass;
};
// hash compare Pasword
export const comparePassword = async (password, hashpass) => {
  console.log(password, hashpass);

  try {
    const compPass = await bcrypt.compare(password, hashpass);
    if (compPass) {
      console.log(compPass, "comppassword");
      return true;
    } else {
      console.log("somthin is worng in function");
      return false;
    }
  } catch (error) {
    console.log(error, "compare pass");
  }
};

//jwt auth

export const jwtToken = (payload) => {
  const val = jwt.sign(payload, process.env.JWT_SECRET);
  console.log(val);
  return val
};
