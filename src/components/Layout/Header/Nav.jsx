import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom/dist';

const Nav = () => {
    return (
        <div className='Nav'>
            <Link to={`/`}>Home</Link>
            <Link to={`/register`}>SignUp</Link>
            <Link to={`login`}>SignIn</Link>
            <Link >SignOut</Link>
        </div>
    );
};

export default Nav;