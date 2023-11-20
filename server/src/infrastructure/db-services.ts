import { readFileSync } from 'fs';
import pg, { Client } from 'pg';


export class DbServices {
    private pgClient!: Client;

    constructor() {
    }

    public async init() {
        this.pgClient = new pg.Client(this.clientConnexion());
        await this.pgClient.connect();
    }

    private clientConnexion() {
        return JSON.parse(readFileSync('./src/data/db-connect.json', { encoding: 'utf-8' }));
    }

    get pg() {
        return this.pgClient
    }
}
