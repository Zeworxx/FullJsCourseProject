<script lang="ts">
import type { TopicsData } from '@/models/app.model';
import type { AxiosInstance } from 'axios';
import axios from 'axios'

export class TodolistServices {
    private axiosInstance!: AxiosInstance
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://localhost:3000'
        })
    }

    public getTopics(userId: number): Promise<TopicsData> {
        return this.axiosInstance.get(`/api/todolist/get-topics/${userId}`)
    }

    public addTopic(userId: number | undefined): Promise<void> {
        return this.axiosInstance.post(`/api/todolist/add-topic/${userId}`)
    }
}
</script>