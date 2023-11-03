import { UserContrat } from './user';

export interface UserService {
    addUser(username: UserContrat): void;
    getUserById(id: string): UserContrat | null;
    deleteUserById(id: string): void;
    updateUserById(id : string, newData : UserContrat) : void;
}
