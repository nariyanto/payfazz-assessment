// /app/routes/index.ts
import {Request, Response} from "express";
import {AuthController} from '../controllers/authController';

export class Routes { 

    studentController: AuthController = new AuthController();

    public routes(app: any): void { 
        app.route('/')
            .get((req: Request, res: Response) => {            
                res.status(200).json('Hello Good World!');
        });  
        
        // Get all students
        app.route('/api/auth')
            .get(this.studentController.signIn);

    }
}