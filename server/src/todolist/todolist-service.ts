import { TopicContrat } from './todolist';

export interface TodolistServices {
    addTopic(topic: TopicContrat): void
    getTopics(userId: number): Promise<TopicContrat[]>
}
