import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import pool from "../database.js";

export const signUp = async (req, res) => {
  const user_id = uuidv4();
  const {
    user_username,
    user_fullname,
    user_cedula,
    user_email,
    hash_password,
    user_phone,
    role_id,
    department_name,
  } = req.body;
  try {
    const findDepartment = await pool.query(
      `SELECT department_id FROM department WHERE department_name = $1;`,
      [department_name]
    );
    if (!findDepartment) return res.status(400).json("cannot find department");
    const department_id = findDepartment.rows[0];
    await pool.query(
      `INSERT INTO users(
        user_id, user_username, user_fullname, user_cedula, user_email, hash_password, user_phone, role_id, department_id)
        VALUES ($1,$2,$3, $4, $5, $6, $7, $8, $9);`,
      [
        user_id,
        user_username,
        user_fullname,
        user_cedula,
        user_email,
        hash_password,
        user_phone,
        role_id,
        department_id,
      ]
    );

    res.status(201).json("User has been created!");
  } catch (e) {
    console.log(e);
    res.status(400).json("Username not disponible");
  }
};

export const signIn = async (req, res) => {};
