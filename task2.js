// Базовий клас
class Device {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    printInfo() {
        console.log(`Пристрій: ${this.constructor.name} | Бренд: ${this.brand} | Модель: ${this.model}`);
    }
}

// Категорії продуктів
class Laptop extends Device {
    constructor(brand, model, screenSize) {
        super(brand, model);
        this.screenSize = screenSize; // діагональ екрана
    }
    printInfo() {
        super.printInfo();
        console.log(`   -> Діагональ екрану: ${this.screenSize} дюймів`);
    }
}

class Smartphone extends Device {
    constructor(brand, model, cameraMegapixels) {
        super(brand, model);
        this.cameraMegapixels = cameraMegapixels; // мегапікселі камери
    }
    printInfo() {
        super.printInfo();
        console.log(`   -> Камера: ${this.cameraMegapixels} МП`);
    }
}

class Netbook extends Device {
    constructor(brand, model, weight) {
        super(brand, model);
        this.weight = weight; // Унікальне поле: вага в кг
    }
    printInfo() {
        super.printInfo();
        console.log(`   -> Вага: ${this.weight} кг`);
    }
}

class EBook extends Device {
    constructor(brand, model, hasBacklight) {
        super(brand, model);
        this.hasBacklight = hasBacklight; // Унікальне поле: наявність підсвітки
    }
    printInfo() {
        super.printInfo();
        console.log(`   -> Підсвітка екрану: ${this.hasBacklight ? "Є" : "Немає"}`);
    }
}


// Конкретні продукти IPhone
class IPhoneLaptop extends Laptop { constructor() { super("IPhone", "AirBook 13", 13.3); } }
class IPhoneSmartphone extends Smartphone { constructor() { super("IPhone", "Phony 15", 48); } }
class IPhoneNetbook extends Netbook { constructor() { super("IPhone", "AirNet 11", 0.9); } }
class IPhoneEBook extends EBook { constructor() { super("IPhone", "iRead", true); } }

// Конкретні продукти Kiaomi
class KiaomiLaptop extends Laptop { constructor() { super("Kiaomi", "Mi Notebook", 15.6); } }
class KiaomiSmartphone extends Smartphone { constructor() { super("Kiaomi", "Redmi Note 12", 108); } }
class KiaomiNetbook extends Netbook { constructor() { super("Kiaomi", "Mi Net", 1.2); } }
class KiaomiEBook extends EBook { constructor() { super("Kiaomi", "PaperReader", false); } }

// Конкретні продукти Balaxy
class BalaxyLaptop extends Laptop { constructor() { super("Balaxy", "Balaxy Book", 14.0); } }
class BalaxySmartphone extends Smartphone { constructor() { super("Balaxy", "S24 Ultra", 200); } }
class BalaxyNetbook extends Netbook { constructor() { super("Balaxy", "Balaxy Net Mini", 1.05); } }
class BalaxyEBook extends EBook { constructor() { super("Balaxy", "Galaxy Read", true); } }


// Абстрактна фабрика
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
    createNetbook() { return new IPhoneNetbook(); }
    createEBook() { return new IPhoneEBook(); }
}

class KiaomiFactory extends TechFactory {
    createLaptop() { return new KiaomiLaptop(); }
    createSmartphone() { return new KiaomiSmartphone(); }
    createNetbook() { return new KiaomiNetbook(); }
    createEBook() { return new KiaomiEBook(); }
}

class BalaxyFactory extends TechFactory {
    createLaptop() { return new BalaxyLaptop(); }
    createSmartphone() { return new BalaxySmartphone(); }
    createNetbook() { return new BalaxyNetbook(); }
    createEBook() { return new BalaxyEBook(); }
}

// Перевірка роботи
function testing(factory) {
    const laptop = factory.createLaptop();
    const phone = factory.createSmartphone();
    const netbook = factory.createNetbook();
    const ebook = factory.createEBook();

    console.log(`\n--- Виробництво на фабриці: ${factory.constructor.name} ---`);
    laptop.printInfo();
    phone.printInfo();
    netbook.printInfo();
    ebook.printInfo();
    console.log("--------------------------------------------------");
}

// Запускаємо для різних брендів
console.log("Запуск системи виробництва техніки:");

const iphoneFactory = new IProneFactory();
testing(iphoneFactory);

const kiaomiFactory = new KiaomiFactory();
testing(kiaomiFactory);

const balaxyFactory = new BalaxyFactory();
testing(balaxyFactory);