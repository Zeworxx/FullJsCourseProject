import { Router } from 'express';
import { TodolistController } from './todolist-controller';

export class TodolistRouter {
    router = Router();
    constructor(private todolistController: TodolistController) {
        this.configureRoutes();
    }
    private configureRoutes(): void {
        this.router.post('/add-topic/:id', (req, res, next) => {
            try {
                const userId = parseInt(req.params.id)
                const topicName = 'Sujet'
                this.todolistController.addT({ topicName, userId })
                res.sendStatus(200)
            } catch (e) {
                res.status(404).json(e);
                next(e);
            }
        })

        this.router.get('/get-topics/:id', async (req, res, next) => {
            try {
                const userId = parseInt(req.params.id)
                const result = this.todolistController.getT(userId)
                res.status(200).json(await result)
            } catch (e) {
                res.status(404).json(e);
                next(e);
            }
        })
    }
}
