import { DbServices } from "../infrastructure/db-services"
import { AuthService } from "./auth-service"
import * as JWT from 'jsonwebtoken'

export class AuthJSONService implements AuthService {
    private dbService: DbServices
    private secretKeyJWT: string

    constructor(dbService: DbServices) {
        this.dbService = dbService
        this.secretKeyJWT = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcxMDUxMjcxNywiaWF0IjoxNzEwNTEyNzE3fQ.iuj0QezXM-bwxiR5ExXMGr61oetrufzNTZTqJN9lEWM"
        console.log(this.secretKeyJWT)
    }

    async getLogin(email: string, password: string): Promise<any> {
        try {
            const sql = `SELECT "user_id", "email", "password" FROM "user" WHERE "email"=$1`;
            const user = (await this.dbService.pg.query(sql, [email])).rows[0];

            if (user && user.password === password) {
                const token = JWT.sign({ user: user.email }, this.secretKeyJWT, { expiresIn: '1h' });
                return { token: token, userId: user.user_id }
            } else {
                return null
            }
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

}