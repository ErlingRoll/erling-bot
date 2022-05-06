export default class Entity {
    id: string;
    name: string;
    hp: number;
    power: number;

    constructor(id: string, name: string, hp: number, power: number) {
        this.id = id;
        this.name = name;
        this.hp = hp;
        this.power = power;
    }

    rollDamage() {
        return Math.floor(Math.random() * this.power);
    }

    async takeDamage(damage: number): Promise<void> {
        this.hp -= damage;
    }
}
