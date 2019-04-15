import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import'./App.css';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;

const isActiveLink = (match, location) => {
    console.log(match, location, location.search);

    if( location.search && /number=(\d+)/.test(location.search)) return true;
    return false;
};

const Links = () => (
    <nav>
        <NavLink replace to="/about/">about</NavLink>
        <NavLink activeStyle={{ color: 'red' }} replace to={{ pathname: '/about'}}>About</NavLink>
        <NavLink isActive={isActiveLink} activeClassName="active" replace to="/contact?number=123">child</NavLink>
    </nav>
);

const App = () => (
<Router>
    <div>
        <Links />
        <Route exact path="/:page/:subpage" render={({match}) => {
            console.log(match);
            return (
            <div>
                <h1>page: {match.params.page}</h1>
                <h1>subpage: {match.params.subpage}</h1>
            </div>
            );
        }}
        />
        <Route path="/:date(\d{4}-\d{2}-\d{2}).:ext(\w+)" render={({match}) => {
            console.log(match);
            return (
            <div>
                <h1>date: {match.params.date}</h1>
                <h1>ext: {match.params.ext}</h1>
            </div>
            );
        }}
         />
         <Route path="/child" children={(prop) => {
             console.log('차일드',prop);
             if( prop.match ) {
                return <div>차일드</div>;    
             }

             return null;
         }} 
         />
    </div>
</Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
