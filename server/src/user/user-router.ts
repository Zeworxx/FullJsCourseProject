import { Router } from 'express';
import { UserController } from './user-controller';

export class UserRouter {
    router = Router();
    constructor(private userController: UserController) {
        this.configureRoutes();
    }
    private configureRoutes(): void {
        this.router.get('/:id', (req, res, next) => {
            try {
                const result = this.userController.getById(req.params.id);
                res.status(200).json(result);
            } catch (error: unknown) {
                next(error);
            }
        });
        // other routes...

        this.router.post('/new-user', (req, res, next) => {
            try {
                const result = this.userController.add(req.body);
                console.log('a')
                res.status(200).json(result);
            } catch (e: unknown) {
                res.status(404).json(e);
                next(e);
            }
        });

        this.router.get('/get-user-by-id/:id', (req, res, next) => {
            try {
                const id = req.params.id;
                const result = this.userController.getById(id.toString());
                res.status(200).json(result);
            } catch (e: unknown) {
                res.status(404).json(e);
                next(e);
            }
        });

        this.router.delete('/delete-user-by-id/:id', (req, res, next) => {
            try {
                const id = req.params.id;
                this.userController.deleteById(id.toString());
                res.sendStatus(200);
            } catch (e: unknown) {
                res.status(404).json(e);
                next(e);
            }
        });

        this.router.put('/update-user-by-id/:id', (req, res, next) => {
            try {
                const id = req.params.id;
                const newData = req.body
                this.userController.updateById(id.toString(), newData);
                res.sendStatus(200);
            } catch (e: unknown) {
                res.status(404).json(e);
                next(e);
            }
        });
    }
}
