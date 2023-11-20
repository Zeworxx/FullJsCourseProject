import { Router } from 'express';
import { TodolistController } from './user-controller';

export class UserRouter {
    router = Router();
    constructor(private todolistController: TodolistController) {
        this.configureRoutes();
    }
    private configureRoutes(): void {

    }
}
