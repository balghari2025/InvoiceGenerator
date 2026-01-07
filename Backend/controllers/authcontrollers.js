const bcrypt = require("bcryptjs");
const UserModel = require("../model/user");

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409).json({
                message: "User already exists, please login",
                success: false,
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const userModel = new UserModel({
            name,
            email,
            password: hashedPassword,
        });

        await userModel.save();

        res.status(201).json({
            message: "Signup successful",
            success: true,
        });

    } catch (err) {
        res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};

module.exports = { signup };
