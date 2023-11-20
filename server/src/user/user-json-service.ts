import { DbServices } from '../infrastructure/db-services';
import { UserContrat } from './user';
import { UserService } from './user-service';

export class UserJSONService implements UserService {
    private dbServices: DbServices;

    constructor(dbServices: DbServices) {
        this.dbServices = dbServices;
    }

    addUser(userData: UserContrat): void {
    }

    getUserById(id: string) {

    }

    deleteUserById(id: string): void {

    }

    updateUserById(id: string, newData: UserContrat): void {

    }
}
