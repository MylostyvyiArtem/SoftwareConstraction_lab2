class Authenticator {
    constructor(id, name, surname, email, password) {
        if (Authenticator.instance) return Authenticator.instance;

        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;

         Authenticator.instance = this;
    }
    printInfo() {
        console.log('-----------------------------');
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Surname: ${this.surname}`);
        console.log(`Email: ${this.email}`);
    }
}
let auth = new Authenticator(1,  "Artem", "Mylostyvyi", "ipz243_mao@student.ztu.edu.ua", "12345678");
auth.printInfo();

let auth2 = new Authenticator(2,  "Vasya", "Vasilevich", "email@student.ztu.edu.ua", "32523523");
auth2.printInfo();