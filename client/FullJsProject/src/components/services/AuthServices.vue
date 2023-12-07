<script lang="ts">
import type { LoginData, TopicsData } from '@/models/app.model';
import router from '@/router';
import type { AxiosInstance } from 'axios';
import axios from 'axios'

export class AuthServices {
    private axiosInstance!: AxiosInstance
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://localhost:3000'
        })
    }

    public async login(log: LoginData): Promise<void> {
        this.axiosInstance.post(`/api/auth/login`, { email: log.email, password: log.password }).then(response => {
            const token = response.data
            localStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = token;
            router.push('/')
        }).catch(error => {
            console.error('Authentication failed:', error);
        });
    }

    public async logout(): Promise<void> {
        this.axiosInstance.post(`/api/auth/logout`).then(response => {
            localStorage.removeItem('token')
            router.push('/login')
        })
    }
}
</script>