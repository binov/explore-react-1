import React from 'react';
import ReactDOM from 'react-dom';


const template = <p>Testing React JSX</p>;// will throw error without babel

//const template = React.createElement('p',{},'testing123');

ReactDOM.render(template, document.getElementById('app'));







/***************************Custom imports **************************8 */
//import './utils.js'
// import sub,{ square, add } from './utils.js';
// import isSenior,{ isAdult, canDrink} from './person.js';

// console.log('app.js is running!!');
// console.log(square(4));
// console.log('Add:',add(3,4));
// console.log('Subtract:',sub(10,3));




// console.log('isAdult 20-',isAdult(20));
// console.log('canDrink 22-',canDrink(22));
// console.log('isSenior 22-',isSenior(22));