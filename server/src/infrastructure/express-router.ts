import { Router } from "express";
import { UserService } from "../user/user-service";
import { UserController } from "../user/user-controller";
import { UserRouter } from "../user/user-router";
import { TodolistRouter } from "../todolist/todolist-router";
import { TodolistController } from "../todolist/todolist-controller";
import { TodolistServices } from "../todolist/todolist-service";
import { AuthRouter } from "../authentication/auth-router";
import { AuthController } from "../authentication/auth-controller";
import { AuthService } from "../authentication/auth-service";

export class ExpressRouter {
    router = Router();
    private userController!: UserController
    private userRouter!: UserRouter
    private todolistRouter!: TodolistRouter
    private todolistController!: TodolistController
    private authRouter!: AuthRouter
    private authController!: AuthController

    constructor(
        private userService: UserService,
        private todolistService: TodolistServices,
        private authServices: AuthService
    ) {
        this.configureControllers();
        this.configureRouters();
        this.configureRoutes();
    }

    private configureControllers(): void {
        this.userController = new UserController(this.userService);
        this.todolistController = new TodolistController(this.todolistService);
        this.authController = new AuthController(this.authServices)
    }

    private configureRouters(): void {
        this.userRouter = new UserRouter(this.userController);
        this.todolistRouter = new TodolistRouter(this.todolistController)
        this.authRouter = new AuthRouter(this.authController)
    }

    private configureRoutes(): void {
        this.router.use('/user', this.userRouter.router);
        this.router.use('/todolist', this.todolistRouter.router);
        this.router.use('/auth', this.authRouter.router);
    }

}