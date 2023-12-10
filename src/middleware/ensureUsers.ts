var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

app.use(cors({
  origin: 'http://localhost:5173'
}));

// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';

// export function authenticateAdminToken(req: Request, res: Response, next: NextFunction) {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];

//   if (token == null) return res.sendStatus(401);

//   jwt.verify(token, process.env.SECRET_KEY_JWT as string, (err, user: any) => {
//     if (err) return res.sendStatus(403).json({ error: 'Invalid token' }); 
//     if (!user.isAdmin) return res.sendStatus(403).json({ error: 'Access denied' });
//     req.user = user;
//     next();
//   });
// }

// export function authenticateParticipantToken(req: Request, res: Response, next: NextFunction) {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];

//   if (token == null) return res.sendStatus(401); 

//   jwt.verify(token, process.env.SECRET_KEY_JWT as string, (err, user: any) => {
//     if (err) return res.sendStatus(403).json({ error: 'Invalid token' }); 
//     if (user.isAdmin) return res.sendStatus(403).json({ error: 'Access denied' }); 
//     req.user = user;
//     next(); 
//   });
// }
