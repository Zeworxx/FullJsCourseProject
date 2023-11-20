import { UserContrat } from './user';
import { UserService } from './user-service';

export class UserJSONService implements UserService {


    constructor() {
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
