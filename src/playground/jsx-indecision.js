console.log('App.js is running');

// JSX - JavaScript XML.This is a JS extension provided by React
// live-server - temporarily
// webpack - development
// express - production

// Babel - Javascript compiler - compiles ES6,ES7 to ES5, JSX to JS
// boolean, null, undefined are ignored by JSX EXPRESSIONS

const app = {
    title: 'Indecision App1',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    console.log('Option submitted:'+option);
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderApp();
}

const onRemoveAll = () => {
   // app.options.splice(0,app.options.length);
   app.options = [];
    renderApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
} 


const appRoot = document.getElementById('app');


const renderApp = () => {
     const template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options && app.options.length > 0 ? 'Here are your options' : 'No options found'}</p> 
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do ? </button>
            <button onClick={onRemoveAll}>Remove All</button>
            {/*
                [97,98,99,false,'Mike',null,undefined,true]
            */}
            <ol>
            {
                app.options.map((option) => <li key={option}>{option}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template,appRoot);
}

renderApp();