import { UserContrat } from "../user/user";

export function userFormatValues(row: any): UserContrat  {
    return {
        userId: row.user_id,
        email: row.email,
        firstname: row.firstname,
        lastname: row.lastname
    };
}