import { randomUUID } from 'crypto';
import { UserContrat } from './user';
import { UserService } from './user-service';
import { existsSync, readFileSync, writeFileSync } from 'fs';

export class UserJSONService implements UserService {
    private path: string = './src/user/data/user.json';
    private database: UserContrat[];

    constructor() {
        this.database = JSON.parse(readFileSync(this.path, 'utf-8'));
    }

    addUser(userData: UserContrat): void {
        userData.userId = randomUUID();
        if (!existsSync(this.path)) {
            writeFileSync(this.path, JSON.stringify([userData], null, 4), {
                encoding: 'utf-8',
            });
        } else {
            this.database.push(userData);
            writeFileSync(this.path, JSON.stringify(this.database, null, 4), {
                encoding: 'utf-8',
            });
        }
    }

    getUserById(id: string): UserContrat | null {
        let result: any;
        if (!existsSync(this.path)) {
            throw new Error('Aucun fichier trouvé !');
        } else {
            result = this.database.find(
                (user) => user.userId === id.toString(),
            );
        }
        return result;
    }

    deleteUserById(id: string): void {
        const itemIndex = this.database.findIndex(
            (i) => i.userId === id.toString(),
        );
        if (itemIndex !== -1) {
            this.database.splice(itemIndex, 1);
            writeFileSync(this.path, JSON.stringify(this.database, null, 4), {
                encoding: 'utf-8',
            });
        } else {
            throw new Error('ID introuvable');
        }
    }

    updateUserById(id: string, newData: UserContrat): void {
        const itemIndex = this.database.findIndex(
            (i) => i.userId === id.toString(),
            Object.assign(id, newData),
        );
        if (itemIndex !== -1) {
            const userToUpdate = this.database[itemIndex];
            Object.assign(userToUpdate, newData);
            writeFileSync(this.path, JSON.stringify(this.database, null, 4), {
                encoding: 'utf-8',
            });
        } else {
            throw new Error('ID introuvable');
        }
    }
}
