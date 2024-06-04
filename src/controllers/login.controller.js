import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import pool from "../database.js";
import * as bcrypt from "../helper/bcrypt.js";
import MYSECRET from "../config.js";

export const signUp = async (req, res) => {
  const user_id = uuidv4();
  const {
    uName,
    name,
    cedula,
    email,
    password,
    tel,
    role_id = '123e4567-e89b-12d3-a456-426614174000',
    department,
  } = req.body;
  
  const data = {
    user_id,
    uName,
    name,
    cedula,
    email,
    password,
    tel,
    role_id,
    department,
  }
  console.log(data);
  try {
    
    const findDepartment = await pool.query(
      `SELECT department_id FROM department WHERE department_name = $1;`,
      [department]
    );
    
    if (!findDepartment) return res.status(400).json("cannot find department");
    const department_id = findDepartment.rows[0];
    const hash_password = await bcrypt.hash_password(password)
    
    await pool.query(
      `INSERT INTO users(
        user_id, user_username, user_fullname, user_cedula, user_email, hash_password, user_phone, role_id, department_id)
        VALUES ($1,$2,$3, $4, $5, $6, $7, $8, $9);`,
        [
          user_id,
          uName,
          name,
          cedula,
          email,
          hash_password,
          tel,
        role_id,
        department_id.department_id,
      ]

    );

    const token = jwt.sign({id: user_id}, MYSECRET, {expiresIn: '20m'})
    res.status(201).json({message: "User has been created!", Token: token, data});
  } catch (e) {
    console.log(e);
    res.status(404).json({Token: null, message: "User Not Disponible"})
  }
};

export const signIn = async (req, res) => {
  const {uName, password} = req.body;
  try {
    const user = await pool.query(
      `SELECT * FROM users WHERE uName = $1;`,
      [uName]
    );
    if (!user) return res.status(400).json("Invalid Credentials");
    const userdata = user.rows[0];
    const validPassword = await bcrypt.comparePassword(password, userdata.hash_password);
    if (!validPassword) return res.status(400).json({message: "Invalid Credentials", Token: null});
    const token = jwt.sign({id: userdata.user_id}, MYSECRET, {expiresIn: '20m'});
    
    res.status(200).json({Token: token})

  } catch (e) {
    console.log(e);
  }
};
