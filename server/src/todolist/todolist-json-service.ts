import { DbServices } from '../infrastructure/db-services';
import { TodolistServices } from './todolist-service';

export class TodolistJSONService implements TodolistServices {
    private dbService: DbServices

    constructor(dbService: DbServices) {
        this.dbService = dbService
    }
}
