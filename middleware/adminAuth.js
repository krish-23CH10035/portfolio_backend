import dotenv from 'dotenv';
dotenv.config();

export function adminAuth(req, res, next) {
  const token = req.headers['x-admin-token'];
  if (!token || token !== process.env.ADMIN_TOKEN) {
    return res.status(401).json({ success: false, error: 'Unauthorized: Admin access required.' });
  }
  next();
}
