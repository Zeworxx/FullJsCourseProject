import { AuthJSONService } from "../authentication/auth-json-service";
import { AuthService } from "../authentication/auth-service";
import { TodolistJSONService } from "../todolist/todolist-json-service";
import { TodolistServices } from "../todolist/todolist-service";
import { UserJSONService } from "../user/user-json-service";
import { UserService } from "../user/user-service";
import { DbServices } from "./db-services";
import { ExpressRouter } from "./express-router";
import { ExpressServer } from "./express-server";
import * as dotenv from 'dotenv'

export class ExpressApplication {
    private expressRouter!: ExpressRouter;
    private port!: string;
    private server!: ExpressServer;
    private userService!: UserService;
    private todolistService!: TodolistServices
    private authService!: AuthService
    private dbServices!: DbServices;

    constructor() {
        this.configureApplication();
    }

    bootstrap(): void {
        this.server.bootstrap();
    }

    private configureApplication(): void {
        this.configureEnvironment();
        this.configureDb();
        // this.configureServerPort();
        this.configureServices();
        this.configureExpressRouter();
        this.configureServer();
    }

    private configureEnvironment(): void {
        dotenv.config({
            path: '.env',
        });
    }

    // private configureServerPort(): void {
    //     this.port = this.getPort();
    // }

    private configureServices(): void {
        this.userService = new UserJSONService(this.dbServices);
        this.todolistService = new TodolistJSONService(this.dbServices)
        this.authService = new AuthJSONService(this.dbServices)
    }

    private configureExpressRouter(): void {
        this.expressRouter = new ExpressRouter(this.userService, this.todolistService, this.authService);
    }

    private configureServer(): void {
        this.server = new ExpressServer(this.port, this.expressRouter);
    }

    private configureDb(): void {
        this.dbServices = new DbServices()
        this.dbServices.init()
    }

    // private getPort(): string {
    //     const port = process.env.PORT;
    //     if (!port) {
    //         throw new Error('No port was found in env file.');
    //     }

    //     return port;
    // }
}