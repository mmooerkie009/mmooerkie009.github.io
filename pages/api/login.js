import connectDB from "../../helper/connectDB";
import { serialize } from "cookie";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    const [rows] = await connectDB.query('SELECT * FROM userId WHERE username = ? AND password = ?',[username,password]);

    if (rows.length > 0) {
      res.setHeader("Set-Cookie", serialize("token", rows[0].username, {
        httpOnly: false, 
        secure: process.env.NODE_ENV === "production", 
        maxAge: 60 * 60 * 24, 
        path: "/",
      }));
      return res.status(200).json(rows);
    } else {
      return res.status(401).json({ message: 'Unauthorized' }); 
    }
  } 
}
