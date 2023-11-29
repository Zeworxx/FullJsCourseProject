import { AuthService } from "./auth-service";

export class AuthController {
    constructor(private authService: AuthService) { }

    login(email: string, password: string) {
        if (!email || !password) {
            throw new Error('Missing parameters')
        }
        else if (typeof email != 'string' || typeof password != 'string') {
            throw new Error('Wrong types for parameters')
        }
        return this.authService.getLogin(email, password)

    }
}