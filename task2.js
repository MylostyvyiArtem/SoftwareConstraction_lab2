// Базові класи
class Device {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    printInfo() {
        console.log(`Пристрій: ${this.constructor.name} | Бренд: ${this.brand} | Модель: ${this.model}`);
    }
}

class Laptop extends Device {}
class Netbook extends Device {}
class EBook extends Device {}
class Smartphone extends Device {}

// IPhone
class IPhoneLaptop extends Laptop { constructor() { super("IPhone", "AirBook 13"); } }
class IPhoneSmartphone extends Smartphone { constructor() { super("IPhone", "Phony 15"); } }

// Kiaomi
class KiaomiLaptop extends Laptop { constructor() { super("Kiaomi", "Mi Notebook"); } }
class KiaomiSmartphone extends Smartphone { constructor() { super("Kiaomi", "Redmi Note 12"); } }

// Balaxy
class BalaxyLaptop extends Laptop { constructor() { super("Balaxy", "Balaxy Book"); } }
class BalaxySmartphone extends Smartphone { constructor() { super("Balaxy", "S24 Ultra"); } }


// Абстракна фабрика
class TechFactory {
    createLaptop() { throw new Error("Метод не реалізовано"); }
    createSmartphone() { throw new Error("Метод не реалізовано"); }
    createNetbook() { throw new Error("Метод не реалізовано"); }
    createEBook() { throw new Error("Метод не реалізовано"); }
}

// Конкретні фабрики
class IProneFactory extends TechFactory {
    createLaptop() { return new IPhoneLaptop(); }
    createSmartphone() { return new IPhoneSmartphone(); }
}

class KiaomiFactory extends TechFactory {
    createLaptop() { return new KiaomiLaptop(); }
    createSmartphone() { return new KiaomiSmartphone(); }
}

class BalaxyFactory extends TechFactory {
    createLaptop() { return new BalaxyLaptop(); }
    createSmartphone() { return new BalaxySmartphone(); }
}

//Перевірка роботи
function testing(factory) {
    const laptop = factory.createLaptop();
    const phone = factory.createSmartphone();

    console.log(`--- Виробництво на фабриці ---`);
    laptop.printInfo();
    phone.printInfo();
    console.log("-------------------------------\n");
}

// Запускаємо для різних брендів
console.log("Запуск системи виробництва техніки:\n");

const iphoneFactory = new IProneFactory();
testing(iphoneFactory);

const kiaomiFactory = new KiaomiFactory();
testing(kiaomiFactory);

const balaxyFactory = new BalaxyFactory();
testing(balaxyFactory);