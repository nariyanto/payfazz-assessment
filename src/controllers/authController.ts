import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

export class AuthController { 

  public signIn (req: Request, res: Response) {
    let username = req.body.username;
    let password = req.body.password;

    let mockedUsername = 'admin';
    let mockedPassword = 'admin';

    if (username && password) {
      if (username === mockedUsername && password === mockedPassword) {
        
        let secret = process.env.JWT_SECRET || 'SecretToken';
        let token = jwt.sign({username: username},
          secret,
          { 
            expiresIn: '24h' // expires in 24 hours
          }
        );
        let data = {"token":token};
        return res.json(data);
      } else {
        return res.status(403).json({ message: 'Incorrect username or password!' });
      }
    } else {
        return res.status(400).json({ message: 'Authentication failed! Please check the request!'});
    }
  }

}