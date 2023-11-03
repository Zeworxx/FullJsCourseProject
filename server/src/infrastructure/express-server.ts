import express from "express";
import { ExpressRouter } from "./express-router";
import bodyParser from "body-parser";

export class ExpressServer {
    private express = express();

    constructor(private port: string, private expressRouter: ExpressRouter) {
        this.configureRoutes()
    }
    bootstrap(): void {
        this.express.listen(this.port, () => {
            console.log(`Listening on port ${this.port}`)
        })
    }

    private configureRoutes(): void {
        this.express.use(bodyParser.json())
        this.express.use('/api', this.expressRouter.router)
    }
}