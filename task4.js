class Virus {
    constructor(weight, age, name, species, children = []) {
        this.weight = weight;
        this.age = age;
        this.name = name;
        this.species = species;
        this.children = children;
    }
    clone() {
        const clonedChildren = this.children.map(child => child.clone())
        return new Virus(this.weight, this.age, this.name + " Clone", this.species, clonedChildren);
    }
    printInfo(){
        console.log('-----------------------------');
        console.log(`Name: ${this.name}`);
        console.log(`Species: ${this.species}`);
        console.log(`Weight: ${this.weight}`);
        console.log(`Age: ${this.age} days`);
        console.log('-----------------------------');
    }
}

let grandson1 = new Virus(0.5, 10, "grandson1", "SpeciesA");
let grandson2 = new Virus(0.5, 10, "grandson2", "SpeciesB");

let father1 = new Virus(0.3, 5, "Father1", "SpeciesA", [grandson1]);
let father2 = new Virus(0.3, 5, "Father1", "SpeciesA", [grandson2]);

let grandfather = new Virus(0.1, 1, "Grandfather", "SpeciesA", [father1, father2]);

grandfather.printInfo();
console.log(grandfather.clone());
