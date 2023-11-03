import { UserContrat } from './user';
import { UserController } from './user-controller';
import { UserService } from './user-service';

describe('UserController', () => {
    let sut: UserController;
    let userService: UserServiceSpy;

    beforeEach(() => {
        userService = new UserServiceSpy();
        sut = new UserController(userService);
    });

    describe('get', () => {
        it('should throw an error when given id is empty', () => {
            const emptyId = ''
            expect(() => sut.getById(emptyId)).toThrow();
        });

        it('should throw an error if typeOf Id is not a string', () => {
            const wrongIdTypes: any[] = [1, new Date()];

            for (const wrongIdType of wrongIdTypes) {
                expect(() => sut.getById(wrongIdType)).toThrow();
            }
            // expect(userService.callsToGetById).toBe(validUsernames.length);
        });
    });
});

class UserServiceSpy implements UserService {
    callsToAdd = 0;
    callsToGetById = 0;
    callsToDeleteById = 0;
    callsToUpdateById = 0;

    private dummyUser = new UserContrat('', '', '');

    addUser(username: UserContrat): UserContrat {
        this.callsToAdd++;
        return this.dummyUser;
    }

    getUserById(id: string): UserContrat | null {
        this.callsToGetById++;
        return this.dummyUser;
    }

    deleteUserById() {
        this.callsToDeleteById++;
        return this.dummyUser;
    }

    updateUserById() {
        this.callsToUpdateById++;
        return this.dummyUser;
    }
}
