class Subscription {
    constructor(monthFee, minPeriod, channels) {
        this.monthFee = monthFee;
        this.minPeriod = minPeriod;
        this.channels = [...channels];
    }

    printInfo() {
        console.log('-----------------------------');
        console.log(`Підписка: ${this.constructor.name}`);
        console.log(`Місячна плата: ${this.monthFee.toFixed(2)} грн`);
        console.log(`Мінімальний період: ${this.minPeriod} місяців`);
        console.log(`Канали: ${this.channels.join(', ')}`);
    }
}

class DomesticSubscription extends Subscription {
    constructor(monthFee, minPeriod, channels, maxDevices = 3) {
        super(monthFee, minPeriod, channels);
        this.maxDevices = maxDevices; // максимум пристроїв
    }

    printInfo() {
        super.printInfo();
        console.log(`Максимум пристроїв: ${this.maxDevices}`);
    }
}

class EducationalSubscription extends Subscription {
    constructor(monthFee, minPeriod, channels, accessToLibrary = true) {
        super(monthFee, minPeriod, channels);
        this.accessToLibrary = accessToLibrary; // доступ до бібліотеки
    }

    printInfo() {
        super.printInfo();
        console.log(`Доступ до бібліотеки: ${this.accessToLibrary ? "Так" : "Ні"}`);
    }
}

class PremiumSubscription extends Subscription {
    constructor(monthFee, minPeriod, channels, has4KResolution = true) {
        super(monthFee, minPeriod, channels);
        this.has4KResolution = has4KResolution; // якість 4K
    }

    printInfo() {
        super.printInfo();
        console.log(`Підтримка 4K: ${this.has4KResolution ? "Так" : "Ні"}`);
    }
}

// Клас творець
class Creator {
    createSubscription() {
        throw new Error("Метод createSubscription() повинен бути реалізований у підкласі");
    }
}

class WebSite extends Creator {
    createSubscription(type, monthFee, minPeriod, channels) {
        switch (type) {
            case "domestic": return new DomesticSubscription(monthFee, minPeriod, channels);
            case "educational": return new EducationalSubscription(monthFee, minPeriod, channels);
            case "premium": return new PremiumSubscription(monthFee, minPeriod, channels);
            default: throw new Error("Невідомий тип підписки");
        }
    }
}

class MobileApp extends Creator {
    createSubscription(type, monthFee, minPeriod, channels) {
        let discountedFee = monthFee * 0.95; // 5% знижка
        let mobileChannels = [...channels, "Bonus mobile channel"]; // Безпечно додаємо канал

        switch (type) {
            case "domestic": return new DomesticSubscription(discountedFee, minPeriod, mobileChannels);
            case "educational": return new EducationalSubscription(discountedFee, minPeriod, mobileChannels);
            case "premium": return new PremiumSubscription(discountedFee, minPeriod, mobileChannels);
            default: throw new Error("Невідомий тип підписки");
        }
    }
}

class ManagerCall extends Creator {
    createSubscription(type, monthFee, minPeriod, channels) {
        let increasedFee = monthFee * 1.20; // 20% націнка

        switch (type) {
            case "domestic": return new DomesticSubscription(increasedFee, minPeriod, channels);
            case "educational": return new EducationalSubscription(increasedFee, minPeriod, channels);
            case "premium": return new PremiumSubscription(increasedFee, minPeriod, channels);
            default: throw new Error("Невідомий тип підписки");
        }
    }
}
const basicChannels = ["channel1", "channel2", "channel3"];

let sub1 = new WebSite().createSubscription("domestic", 100, 12, basicChannels);
sub1.printInfo();

let sub2 = new MobileApp().createSubscription("premium", 200, 24, basicChannels);
sub2.printInfo();

basicChannels.pop();

let sub3 = new ManagerCall().createSubscription("educational", 150, 6, basicChannels);
sub3.printInfo();