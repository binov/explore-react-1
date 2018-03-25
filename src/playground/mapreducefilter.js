// map, reduce, filter examples

const mapExample = function() {
    console.log(arguments);
    const args = Array.from(arguments);
    return args.map((element) => element * 2);
}

const filterExample = function() {
    console.log(arguments);
    const args = Array.from(arguments);
    return args.filter((element) => element < 100);
}

const reduceExample = function() {
    console.log(arguments);
    const args = Array.from(arguments);
    return args.reduce(((prev, current) => prev + current), 0);
}


console.log(reduceExample(55,1,1000));
