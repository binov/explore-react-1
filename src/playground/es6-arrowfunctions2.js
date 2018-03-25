// arguments object - no longer bound with arrow functions

const add = function(a, b) {
    console.log(arguments);
    return a + b;
}

const addArrow = (a,b) => {
   // console.log(_arguments); // will throw ReferenceError: arguments is not defined
    return a + b;
}
console.log(addArrow(55, 1));


// this keyword - no longer bound with arrow functions (doesnt bind its own this.It will be parent/enclosing scope)

const user = {
    name: 'Andrew',
    placesLived: ['Philadelphia', 'New York', 'Dublin'],
   // printPlacesLived: function()  {    // We cannot use arrow function here.We can use like this or a better way mas below - method definitions
   printPlacesLived() {
        console.log(this.name);
        console.log(this.placesLived);
        // const that = this;
        // this.placesLived.forEach(function(city) {
        //    // console.log(this.name+ 'lived in '+ city); // Here this wont be accessible.
        //    console.log(that.name+ ' lived in '+ city);
        // })
        this.placesLived.forEach((city) => {
            console.log("Message: "+this.name+ ' lived in '+ city);
        })
    }
}

user.printPlacesLived();

const user1 = {
    name: 'Andrew',
    placesLived: ['Philadelphia', 'New York', 'Dublin'],
   printPlacesLived() {
       return this.placesLived.map(() => this.name+ ' lived in '+ city);
        
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
}

console.log(multiplier.multiply());

