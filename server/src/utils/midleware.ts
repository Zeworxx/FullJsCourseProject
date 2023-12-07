import * as JWT from 'jsonwebtoken'

export function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
      return res.status(403).json({ message: 'Token not provided' });
    }
  
    JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      }
  
      req.decoded = decoded;
      next();
    });
  }