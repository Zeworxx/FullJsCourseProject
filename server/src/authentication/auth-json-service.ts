import { DbServices } from "../infrastructure/db-services"
import { AuthService } from "./auth-service"

export class AuthJSONService implements AuthService {
    private dbService: DbServices

    constructor(dbService: DbServices) {
        this.dbService = dbService
    }

    async getLogin(email: string, password: string): Promise<any> {
        try {
            const sql = `SELECT "user_id", "email", "password" FROM "user" WHERE "email"=$1`;
            const user = (await this.dbService.pg.query(sql, [email])).rows[0];

            if(user && user.password === password){
                return user.user_id
            } else {
                return null
            }
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

}