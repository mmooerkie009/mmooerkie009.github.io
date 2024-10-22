import connectDB from "../../helper/connectDB";

export default async function handler(req, res) {
  if (req.method === "GET") {

    const [rows] = await connectDB.query('SELECT * FROM schedule WHERE id = ?',[2]);

    if (rows) {
      return res.status(200).json(rows);
    } else {
      return res.status(401).json({ message: 'Unauthorized' }); 
    }
  } 
}