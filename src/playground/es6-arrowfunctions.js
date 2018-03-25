const square = function(x) {
    return x * x;
}

function square2(x) {
    return x * x;
}



// Arrow functions are always anonymous
const squareArrow = (x) => {
    return x * x;
}

// Arrow function expression syntax
const squareArrow2 = (x) => x * x;

console.log(squareArrow2(4));

const getFirstName = (fullName) => {
    return  (fullName) ? fullName.split(' ')[0] : null;
}

const getFirstName2 = (fullName) => (fullName) ? fullName.split(' ')[0] : null;
console.log(getFirstName2('Bino Varghese'));
