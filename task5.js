class Character {
    constructor(height = 0, weight = 0, age = 0, health = 0, damage = 0, eyeColor = "", hairColor = "") {
        this.inventory = [];
        this.clothes = [];
    }
    printInfo() {
        console.log('-----------------------------');
        console.log(`Height: ${this.height} cm`);
        console.log(`Weight: ${this.weight} kg`);
        console.log(`Age: ${this.age} years`);
        console.log(`Health: ${this.health}`);
        console.log(`Damage: ${this.damage}`);
        console.log(`Eye Color: ${this.eyeColor}`);
        console.log(`Hair Color: ${this.hairColor}`);
        console.log(`Clothes: ${this.clothes.join(", ")}`);
        console.log(`Inventory: ${this.inventory.join(", ")}`);
    }
}

class CharacterBuilder {
    constructor() {
        this.character = new Character();
    }
    setHeight(height) {
        this.character.height = height;
        return this;
    }
    setWeight(weight) {
        this.character.weight = weight;
        return this;
    }
    setAge(age) {
        this.character.age = age;
        return this;
    }
    setHealth(health) {
        this.character.health = health;
        return this;
    }
    setDamage(damage) {
        this.character.damage = damage;
        return this;
    }
    setEyeColor(eyeColor) {
        this.character.eyeColor = eyeColor;
        return this;
    }
    setHairColor(hairColor) {
        this.character.hairColor = hairColor;
        return this;
    }
    setClothes(clothes) {
        this.character.clothes = clothes;
        return this;
    }
    setInventory(inventory) {
        this.inventory = inventory;
        return this;
    }
}

class Director {
    makeHero(builder) {
        return builder
            .setHeight(190)
            .setWeight(75)
            .setAge(19)
            .setHealth(100)
            .setDamage(20)
            .setEyeColor("blue")
            .setHairColor("blonde")
            .setClothes(["armor", "helmet", "boots"])
            .setInventory(["sword", "shield"])
            .character;
    }
    makeEnemy(builder) {
        return builder
            .setHeight(180)
            .setWeight(80)
            .setAge(30)
            .setHealth(150)
            .setDamage(30)
            .setEyeColor("red")
            .setHairColor("black")
            .setClothes(["robe", "hood"])
            .setInventory(["staff", "spellbook"])
            .character;
    }
}
let director = new Director();
let heroBuilder = new CharacterBuilder();
let enemyBuilder = new CharacterBuilder();

let hero = director.makeHero(heroBuilder);
let enemy = director.makeEnemy(enemyBuilder);

hero.printInfo();
enemy.printInfo();