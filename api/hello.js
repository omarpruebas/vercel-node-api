export default function handler(req, res) {
  res.status(200).json({
    message: "Hola desde Node.js en Vercel 🚀",
    method: req.method,
    timestamp: new Date().toISOString()
  });
}
