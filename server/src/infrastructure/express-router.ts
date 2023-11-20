import { Router } from "express";
import { UserService } from "../user/user-service";
import { UserController } from "../user/user-controller";
import { UserRouter } from "../user/user-router";
import { TodolistRouter } from "../todolist/todolist-router";
import { TodolistController } from "../todolist/todolist-controller";
import { TodolistServices } from "../todolist/todolist-service";

export class ExpressRouter {
    router = Router();
    private userController!: UserController
    private userRouter!: UserRouter
    private todolistRouter!: TodolistRouter
    private todolistController!: TodolistController

    constructor(
        private userService: UserService,
        private todolistService: TodolistServices
    ) {
        this.configureControllers();
        this.configureRouters();
        this.configureRoutes();
    }

    private configureControllers(): void {
        this.userController = new UserController(this.userService);
        this.todolistController = new TodolistController(this.todolistService);
    }

    private configureRouters(): void {
        this.userRouter = new UserRouter(this.userController);
        this.todolistRouter = new TodolistRouter(this.todolistController)
    }

    private configureRoutes(): void {
        this.router.use('/user', this.userRouter.router);
        this.router.use('/todolist', this.todolistRouter.router);
    }

}