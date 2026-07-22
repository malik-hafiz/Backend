import { User } from "../model/user.model.js";
import bcrypt from "bcrypt";
import { createUserServices } from "../services/userService.js";
export const admin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .send({ status: 400, message: "name,email,password are required" });
    }
    // const hashedPassword = await bcrypt.hash(password, 8);

    const user = await createUserServices({
      name,
      email,
      password
      // password: hashedPassword,
    });
    // for services
    //  const user =await createUserServices({
    //     name,email,password
    //  })
    res.status(201).send({ data: user, message: "user created successfully" });
    console.log("user", user);
  } catch (error) {
    console.log(error);
  }
};
