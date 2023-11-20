import { TopicContrat } from "../todolist/todolist";

export function topicsFormatValues(row: any): TopicContrat  {
    return {
        userId: row.user_id,
        topicName: row.topic_name
    };
}