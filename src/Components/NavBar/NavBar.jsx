import React from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='NavBar'>
            <h4>Shop All</h4>
            <h4>New In</h4>
            <h4>Sale</h4>
            <h4>Log In</h4>
            <h4>Cart</h4>
            <h4>Search</h4>
            <h4>WishList</h4>
            <Link to="/admin">
            <h4>ProdManagement</h4>
            </Link>
            
        </div>
    );
};

export default NavBar;