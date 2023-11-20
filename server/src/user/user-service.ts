import { UserContrat } from './user';

export interface UserService {
    addUser(username: UserContrat): void;
    getUserById(id: string): void;
    deleteUserById(id: string): void;
    updateUserById(id : string, newData : UserContrat) : void;
}
