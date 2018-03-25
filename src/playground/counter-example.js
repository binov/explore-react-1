const user = {
    name: 'Andrew',
    age: 26,
    location: 'London'
}

function getLocation(location) {
    if(location){
        return <p>Location: {location}</p>;
    } 
}
//var userName = 'Mike';
//var userAge = 27;
//var userLocation = 'Philadelphia';
// className transforms to class
let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
}
const minusOne = () =>{
    count--;
    renderCounterApp();
}
const reset = () =>{
    count = 0;
    renderCounterApp();
}
// JSX does not have built in data binding


const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>RESET</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();

