import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import'./App.css';

const Links = () => (
    <nav>
        <Link to="/?id=123">Inlineblock</Link>
        <Link to={{ pathname: '/', search: 'id=456&x=1'}}>Object</Link>
    </nav>
);

const App = () => (
<Router>
    <div>
        <Links />
        <Route path="/" render={({match, location}) => (
        <div>
            <div>{JSON.stringify(match)}</div>
            <div>{JSON.stringify(location)}</div>
        </div>
        )}
        />
    </div>
</Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
