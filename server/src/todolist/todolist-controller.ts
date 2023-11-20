import { TopicContrat } from "./todolist";
import { TodolistServices } from "./todolist-service";

export class TodolistController {
    constructor(private todolistServices: TodolistServices) { }

    addT(topic: TopicContrat) {
        if (!topic) {
            throw new Error("Topic doesn't exist !")
        }
        console.log(topic)
        this.todolistServices.addTopic(topic)
    }
}
