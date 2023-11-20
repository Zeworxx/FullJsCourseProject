import { TopicContrat } from "./todolist";
import { TodolistServices } from "./todolist-service";

export class TodolistController {
    constructor(private todolistServices: TodolistServices) { }

    addT(topic: TopicContrat) {
        if (!topic) {
            throw new Error("Topic doesn't exist !")
        } else if (isNaN(topic.userId)) {
            throw new Error('ID is not a number')
        }
        console.log(topic)
        this.todolistServices.addTopic(topic)
    }

    getT(userId: number) {
        if (!userId) {
            throw new Error('Missing ID parameter')
        } else if (isNaN(userId)) {
            throw new Error('ID is not a number')
        }
        return this.todolistServices.getTopics(userId)
    }
}
