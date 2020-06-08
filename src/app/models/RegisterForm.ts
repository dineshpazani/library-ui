import { IssuedBooks } from './IssuedBooks';

export class RegisterForm{
    constructor(
        public id: string,
        public username: string,
        public issueddate: string,
        public issuedBooks: IssuedBooks
    ) {}
}