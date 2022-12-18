import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import { createError } from "../utillities/error"


const registrasi = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password_user, salt);
    const createUsers = await req.context.models.users.create({
    //   id_user : req.body.id_user, // saya comment karena id_user sudah auto increment
        name_user : req.body.name_user,
        isadmin: req.body.isadmin,
        password_user: hash,
    });
    return res.status(200).json({ message: "Registrasi is Success" });
  } catch (error) {
    next(error);
  }
  };

// Login
const login = async (req, res, next) => {
  try {
    const user = await req.context.models.users.findOne({
      where: { name_user : req.body.name_user },
    });
    if ( !user ) return next(createError(404, "User Is  Not Found"));
    const isPassword = await bcrypt.compare(
      req.body.password_user,
      user.password_user
    );
    if (!isPassword)
      return next(createError(404, "Password Invalid"));
    const token = jwt.sign(
      {
        id: user.id_user,
        isadmin: user.isadmin,
      },
      process.env.JWT
    );
    const { password_user, isadmin, ...otherDetails } = user.dataValues;
    return res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ data: { ...otherDetails }, message: "Login Success" });
  } catch (error) {
    next(error);
  }
};

export default {
  registrasi,
  login
}