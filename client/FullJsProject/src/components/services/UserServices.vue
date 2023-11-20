<script lang="ts">
import type { UserData } from '@/models/app.model';
import type { AxiosInstance } from 'axios';
import axios from 'axios'

export class UserServices {
    private axiosInstance!: AxiosInstance
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://localhost:3000'
        })
    }

    public getUserById(id: number): Promise<UserData> {
        return this.axiosInstance.get(`/api/user/get-user-by-id/${id}`)
    }
}

</script>