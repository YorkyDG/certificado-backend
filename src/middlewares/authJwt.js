import jwt from "jsonwebtoken";
import pool from "../database.js";
import MYSECRET from "../config.js";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token)
      return res
        .status(403)
        .send({ message: "No token provided!" })
        .json({ Token: null, message: "No token provided!" });

    const decoded = jwt.verify(token, MYSECRET);
    req.userId = decoded.id;

    const user = await pool.query(`SELECT * FROM users WHERE user_id = $1`, [
      req.userId,
    ]);
    if (!user) return res.status(404).json({ message: "User Not found." });
    req.user = user.rows[0];

    next();
  } catch (e) {
    console.log(e);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = req.user.find((u) => (u.id = req.user_id));
    const role = await pool.query(`SELECT * FROM roles WHERE role_id = $1`, [
      user.role_id,
    ]);
    if (role.rows[0].role_title !== "admin")
      return res.status(403).json({ message: "You are Unauthorized" });
    next();
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// export const isTeacher = async (req, res, next) => {
//     try {
//       const user = req.user.find((u) => (u.id = req.user_id));
//       //Possible Role (student, teacher, admin)
//       const role = await pool.query(`SELECT * FROM roles WHERE role_id = $1`, [user.role_id]);

//       next();
//       return res.status(403).json({ message: "Require Admin Role!" });
//     } catch (e) {
//       console.log(e);
//       return res.status(500).json({ message: "Internal Server Error" });
//     }
//   }
