import connectDB from "../../helper/connectDB";

export default async function handler(req,res){

    try{
        const [rows] = await connectDB.query('SELECT * FROM schedule')
        res.status(200).json(rows);
    }catch(error){
        console.log(error);
        res.status(500).json({message : error});
    }

}