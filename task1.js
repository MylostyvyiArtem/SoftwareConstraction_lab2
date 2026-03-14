class Subscription {
    constructor(monthFee, minPeriod, channels) {
        this.monthFee = monthFee;
        this.minPeriod = minPeriod;
        this.channels = channels;
    }
    printInfo() {
        console.log('-----------------------------');
        console.log(`Підписка: ${this.constructor.name}`);
        console.log(`Місячна плата: ${this.monthFee} грн`);
        console.log(`Мінімальний період: ${this.minPeriod} місяців`);
        console.log(`Канали: ${this.channels}`);
    }
}
class DomesticSubscription extends Subscription {
    constructor(monthFee, minPeriod, channels) {
        super(monthFee, minPeriod, channels);
    }
}
class EducationalSubscription extends Subscription {
    constructor(monthFee, minPeriod, channels) {
        super(monthFee, minPeriod, channels);
    }
}
class PremiumSubscription extends Subscription {
    constructor(monthFee, minPeriod, channels) {
        super(monthFee, minPeriod, channels);
    }
}
class Creator {
    createSubscription(){
        throw new Error("Метод createSubscription() повинен бути реалізований у підкласі");
    }
}
class WebSite extends Creator {
    createSubscription(type, monthFee, minPeriod, channels) {
        switch (type) {
            case "domestic":
                return new DomesticSubscription(monthFee, minPeriod, channels);
            case "educational":
                return new EducationalSubscription(monthFee, minPeriod, channels);
            case "premium":
                return new PremiumSubscription(monthFee, minPeriod, channels);
            default:
                throw new Error("Невідомий тип підписки");
        }
    }
}
class MobileApp extends Creator {
    createSubscription(type, monthFee, minPeriod, channels) {

        monthFee  *= 0.95; // 5% знижка для всіх підписок в мобільному додатку
        channels.push(" Bonus mobile channel"); // Додатковий бонусний канал для мобільних підписок

        switch (type) {
            case "domestic":
                return new DomesticSubscription(monthFee, minPeriod, channels);
            case "educational":
                return new EducationalSubscription(monthFee, minPeriod, channels);
            case "premium":
                return new PremiumSubscription(monthFee, minPeriod, channels);
            default:
                throw new Error("Невідомий тип підписки");
        }
    }
}
class ManagerCall extends Creator {
    createSubscription(type, monthFee, minPeriod, channels) {

        monthFee  *= 1.20; // 20% націнка для всіх підписок, створених через мобільного менеджера

        switch (type) {
            case "domestic":
                return new DomesticSubscription(monthFee, minPeriod, channels);
            case "educational":
                return new EducationalSubscription(monthFee, minPeriod, channels);
            case "premium":
                return new PremiumSubscription(monthFee, minPeriod, channels);
            default:
                throw new Error("Невідомий тип підписки");
        }
    }
}
const basicChannels = [" channel1", " channel2", " channel3"];
let sub1 = new WebSite().createSubscription("domestic", 100, 12, basicChannels);
sub1.printInfo();
let sub2 = new MobileApp().createSubscription("premium", 200, 24, basicChannels);
sub2.printInfo();
basicChannels.pop()
let sub3 = new ManagerCall().createSubscription("educational", 150, 6, basicChannels);
sub3.printInfo();