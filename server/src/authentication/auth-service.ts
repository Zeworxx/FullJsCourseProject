export interface AuthService {
    getLogin(email: string, password: string): void
}