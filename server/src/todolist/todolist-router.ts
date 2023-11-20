import { Router } from 'express';
import { TodolistController } from './todolist-controller';

export class TodolistRouter {
    router = Router();
    constructor(private todolistController: TodolistController) {
        this.configureRoutes();
    }
    private configureRoutes(): void {

    }
}
