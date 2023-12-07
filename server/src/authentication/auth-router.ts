import { Router } from "express";
import { AuthController } from "./auth-controller";

export class AuthRouter {
    router = Router();
    constructor(private authController: AuthController) {
        this.configureRoutes();
    }
    private configureRoutes(): void {
        this.router.post('/login', async (req, res) => {
            try {
                const email = req.body.email
                const password = req.body.password
                const result = await this.authController.login(email, password)
                if(result === null){
                    res.sendStatus(401)
                } else {
                    res.status(201).json(result)
                }
            } catch (e) {
                res.status(500).json(e)
            }
        })

        this.router.post('/logout', async (req, res) => {
            try {
                res.status(200).json({ message: 'Logout successful' });
            } catch (e) {
                res.status(500).json(e)
            }
        })
    }
}