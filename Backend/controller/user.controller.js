import User from "../models/user.model.js";

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

    const newUser = await new User({
      name,
      email,
      password,
    });

    newUser
      .save()
      .then(() =>
        res.status(201).json({ message: "User registered successfully" })
      );
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Internal server error" });
  }
};
