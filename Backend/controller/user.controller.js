import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import createTokenAndSaveCookie from "../jwt/generateToken.js"

export const signup = async (req, res) => {
  try {
    const { name, email, password, confirmpassword } = req.body;
    if (password !== confirmpassword) {
      return res.status(400).json({ message: "Password do not match" });
    }
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "email already exist." });
    }
    // hashing the password
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await new User({
      name,
      email,
      password: hashPassword,
    });

    await newUser.save();
    if (newUser) {
      createTokenAndSaveCookie(newUser._id,res)
      res.status(201).json({ message: "User registered successfully" , newUser });
    }
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Internal server error" });
  }
};
