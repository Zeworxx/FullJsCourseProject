import express from "express";
import { ExpressRouter } from "./express-router";
import bodyParser from "body-parser";
import cors from 'cors';

export class ExpressServer {
    private express = express();

    constructor(private port: string, private expressRouter: ExpressRouter) {
        this.configureRoutes()
    }
    bootstrap(): void {
        this.express.listen(3000, () => {
            console.log(`Listening on port ${this.port}`)
        })
    }

    private configureRoutes(): void {
        this.express.use(cors())
        this.express.use(bodyParser.json())
        this.express.use('/api', this.expressRouter.router)
    }
}