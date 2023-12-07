<script lang="ts">
import type { LoginData } from '@/models/app.model';
import router from '@/router';
import type { AxiosInstance } from 'axios';
import axios from 'axios';

export class AuthServices {
    private axiosInstance!: AxiosInstance
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://localhost:3000'
        })
    }

    public async login(log: LoginData): Promise<void> {
        return new Promise((resolve, reject) => {
            this.axiosInstance.post(`/api/auth/login`, { email: log.email, password: log.password })
                .then(response => {
                    const token = response.data.token;
                    const userId = response.data.userId;
                    localStorage.setItem('token', token);
                    localStorage.setItem('userId', userId);
                    axios.defaults.headers.common['Authorization'] = token;
                    router.push('/')
                    resolve();
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    public async logout(): Promise<void> {
        this.axiosInstance.post(`/api/auth/logout`).then(response => {
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            router.push('/login')
        })
    }

    public getUserId(): number | null {
        const userIdString = localStorage.getItem('userId');

        if (userIdString) {
            const userIdInt = parseInt(userIdString, 10);
            if (!isNaN(userIdInt)) {
                return userIdInt;
            }
        }
        return null

    }
}
</script>