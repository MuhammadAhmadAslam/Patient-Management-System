// server.js or API route (e.g., /api/signature.js)
const crypto = require("crypto");

export default function POST(res) {
    const { timestamp } = req.json();

    const apiSecret = process.env.CLOUDINARY_API_SECRET; // Store in your environment variables
    const signature = crypto
      .createHash("sha1")
      .update(`timestamp=${timestamp}${apiSecret}`)
      .digest("hex");

    return res.status(200).json({ signature });
}
