import connectDB from "../../helper/connectDB";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { startDate2, endDate2 } = req.body;

    const [rows] = await connectDB.query('UPDATE schedule SET startdate = ?, enddate = ? WHERE id = ?',[startDate2,endDate2,2]);

    if (rows) {
      return res.status(200).json(rows);
    } else {
      return res.status(401).json({ message: 'Unauthorized' }); 
    }
  } 
}
