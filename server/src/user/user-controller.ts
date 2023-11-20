import { UserContrat } from './user';
import { UserService } from './user-service';

export class UserController {
    constructor(private userService: UserService) {}
    add(userData: UserContrat): void {
        if (!userData) {
            throw new Error("Username doesn't exist");
        }
        this.userService.addUser(userData);
    }
    getById(id: string){
        if (!id) {
            throw new Error('id is missing');
        } else if (typeof id !== 'string') {
            throw new Error('id is not a string');
        }
        this.userService.getUserById(id);
    }

    deleteById(id: string) {
        if (!id) {
            throw new Error('id is missing');
        } else if (typeof id !== 'string') {
            throw new Error('id is not a string');
        }
        console.log('r')

        return this.userService.deleteUserById(id);
    }

    updateById(id: string, newData: UserContrat) {
        if (!id || !newData) {
            throw new Error('params are missing');
        } else if (typeof id !== 'string') {
            throw new Error('id is not a string');
        }
        return this.userService.updateUserById(id, newData);
    }
}
