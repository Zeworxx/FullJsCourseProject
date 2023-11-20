import { DbServices } from '../infrastructure/db-services';
import { userFormatValues } from '../utils/user-format';
import { UserContrat } from './user';
import { UserService } from './user-service';

export class UserJSONService implements UserService {
    private dbService: DbServices

    constructor(dbService: DbServices) {
        this.dbService = dbService
    }

    addUser(userData: UserContrat): void {
    }

    async getUserById(id: string) {
        try {
            const sql = `SELECT "user_id", "email", "firstname", "lastname" FROM "user" WHERE "user_id"=$1`;
            const user = (await this.dbService.pg.query(sql, [id])).rows[0];
            return user;
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    deleteUserById(id: string): void {

    }

    updateUserById(id: string, newData: UserContrat): void {

    }
}
