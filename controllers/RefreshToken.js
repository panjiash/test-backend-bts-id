import jwt from "jsonwebtoken";
import Users from "../models/UserModel.js";

export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);
    const user = await Users.findAll({
      where: {
        refresh_token: refreshToken,
      },
    });
    if (!user[0]) return res.sendStatus(403);
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err) return res.sendStatus(403);
        const username = user[0].username;
        const name = user[0].name;
        const email = user[0].email;
        const accessToken = jwt.sign(
          { username, name, email },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "86400s",
          }
        );
        res.json({ accessToken });
      }
    );
  } catch (error) {
    console.log(error);
  }
};
