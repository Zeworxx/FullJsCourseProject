import { DbServices } from '../infrastructure/db-services';
import { TopicContrat } from './todolist';
import { TodolistServices } from './todolist-service';

export class TodolistJSONService implements TodolistServices {
    private dbService: DbServices

    constructor(dbService: DbServices) {
        this.dbService = dbService
    }

    async addTopic(topic: TopicContrat): Promise<void> {
        try {
            const sql = `INSERT INTO topics (topic_name, user_id) VALUES ($1, $2)`
            await this.dbService.pg.query(sql, [topic.topicName, topic.userId])
        } catch (e) {
            console.error(e)
            throw e
        }
    }

    async getTopics(userId: number): Promise<TopicContrat[]> {
        try {
            const sql = `SELECT * FROM topics WHERE user_id=$1`
            const topicsList: TopicContrat[] = (await this.dbService.pg.query(sql, [userId])).rows.map(row => { return row });
            return topicsList
        } catch (e) {
            console.error(e)
            throw e
        }
    }
}
