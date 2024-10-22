

export default async function handler(req, res) {
  if (req.method === "GET") {
    const currentDateTime = new Date().toISOString(); // แปลงเป็น ISO 8601 รูปแบบ UTC

    return res.status(200).json({
      message: "Update successful",
      currentDateTime: currentDateTime // ส่งคืน datetime ปัจจุบัน
    });
  } 
}
