import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


function User(props) {
    return <h1>Welcome back!</h1>
}

function Guest(props) {
    return <h1>Sign up, please!</h1>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn) {
        return <User />
    }
    return <Guest />
}

ReactDOM.render(<Greeting isLoggedIn= {true} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
