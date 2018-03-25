
class OldSyntax {
    constructor() {
        this.name = 'Mike';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `Hi, This is ${this.name}`;
    }
}
const oldSyntax = new OldSyntax();
console.log(oldSyntax);
console.log(oldSyntax.getGreeting()); // This works but the below can break the this binding.To fix we do - 
const getGreeting2 = oldSyntax.getGreeting;
console.log(getGreeting2());


class NewSyntax {
    name = 'Jen';
    getGreeting = () => {
        return `2.Hi, This is ${this.name}`
    }
}
const newSyntax = new NewSyntax();
console.log(newSyntax);
console.log(newSyntax.getGreeting());
const getGreeting3 = newSyntax.getGreeting;
console.log(getGreeting3());
