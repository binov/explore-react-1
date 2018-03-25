console.log('utils.js is running');

const square = (x) => x * x;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

// to export the variables
// exports - default export - named export

// named exports
export { square, add , subtract as default} // not object
//this can also be done as :
//export const square = (x) => x * x;

// default export
// each file can export one by default
// with defaults naming is not important while import
// usage : export default subtract; or export { square, add , subtract as default} or  export default (a, b) => a - b;

