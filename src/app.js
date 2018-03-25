import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css'
import './styles/styles.scss'



// We can pass JSX into a component and that can access it via props.children
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
