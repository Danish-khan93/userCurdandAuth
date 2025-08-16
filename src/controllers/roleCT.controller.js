import { Role } from "../models/roleCT.model.js";

const role = Role;
export const createRoleCt = async (req, res) => {
  try {
    const { roleType } = req.body;
    const count = await role.countDocuments();

    const findAlreadyCreated = await role.findOne({ roleType: roleType });

    console.log(findAlreadyCreated);
    if (findAlreadyCreated === null) {
      const data = {
        roleType,
        roleTypeId: count + 1,
      };

      const newRole = new Role(data);
      await newRole.save();
      res.status(200).send({
        data: { message: "role is create successfully", result: data },
      });
    } else {
      res.status(409).send({
        data: { message: "role is already exist " },
      });
    }
  } catch (error) {
    throw new error("error in creating role ct");
  }
};

// get role list

export const getRoleCt = async (req, res) => {
  try {
    // $ne is not equal operater 
    const data = await role.find({ roleTypeId: { $ne: 1 } });
    // console.log(data);

    res
      .status(200)
      .send({ data: { message: "list get sucessfully" }, result: { data } });
  } catch (error) {
    throw new error("error to get list ");
  }
};
