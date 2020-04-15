abstract class Item {
    name: string;
    size: number;

    constructor(name: string, size: number) {
        this.name = name;
        this.size = size;
    }
}
class Teleporter extends Item {
    energy: number;

    constructor(name: string, energy: number) {
        super(name, 3);
        this.energy = energy;
    }
}

class Arrow extends Item {
    power: number;

    constructor(name: string, power: number) {
        super(name, 1);
        this.power = power;
    }
}

class Player {
    name: string;
    sizeUsed: number = 0;
    life: number = 3;
    items: Array<Item> = new Array<Item>();

    constructor(name: string) {
        this.life = 3;
        this.name = name;
        this.items = Array<Item>();

    }
    addItems(item: Item) {
        let inventory = this.items;
        if (this.sizeUsed + item.size <= 9) {
            inventory.push(item);
            this.sizeUsed += item.size;
            console.log(item.name + " a été ajouté. Il reste " + (9 - this.sizeUsed) + "emplacements.");
        }
        else {
            console.error(item.name + " n'a pas pu être ajouté");
        }
        return inventory;
    }
}
let phaeryl: Player = new Player('Phaeryl');
let divineArrow: Arrow = new Arrow("Flèches divines", 7);
let pyroArrow: Arrow = new Arrow("Flèche de feu", 1);
let teleportToHeavens: Teleporter = new Teleporter('Portail des Cieux', 10);
let teleportToAbyss: Teleporter = new Teleporter('Portail des Abysses', 10);
let teleportToHome: Teleporter = new Teleporter('Retour au bercail', 50);

phaeryl.addItems(divineArrow);
phaeryl.addItems(teleportToHeavens);
phaeryl.addItems(teleportToAbyss);
phaeryl.addItems(teleportToHome);

console.log(phaeryl.items);