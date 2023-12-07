import { DbServices } from "../infrastructure/db-services"
import { AuthService } from "./auth-service"
import * as JWT from 'jsonwebtoken'

export class AuthJSONService implements AuthService {
    private dbService: DbServices
    private secretKeyJWT: string

    constructor(dbService: DbServices) {
        this.dbService = dbService
        this.secretKeyJWT = process.env.JWT_SECRET
    }

    async getLogin(email: string, password: string): Promise<any> {
        try {
            const sql = `SELECT "user_id", "email", "password" FROM "user" WHERE "email"=$1`;
            const user = (await this.dbService.pg.query(sql, [email])).rows[0];

            if (user && user.password === password) {
                const token = JWT.sign({ user: user.email }, this.secretKeyJWT, { expiresIn: '1h' });
                return token
            } else {
                return null
            }
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

}