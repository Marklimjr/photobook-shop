import React from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';
import { useCart } from '../Cart/Cart';
import { logout } from '../../utilities/users-service';

const NavBar = ({cart, setIsShowCart, user, setUser}) => {
    const items = useCart();

    const handleLogout = async (user) => {
        logout();
        setUser(null);
        console.log("user has been logged out successfully.");
      };


    return (
        <div className='NavBar'>
            <h4>Shop All</h4>
            <h4>New In</h4>
            <h4>Sale</h4>
                {user ? ( 
                    <Link to={`/users/logout`}>
                        <h4 onClick={handleLogout}> Log Out </h4>
                    </Link>
                ): 
                <Link to={`/users/login`}>
                    <h4>Log In</h4>
                </Link>
                 }
            
            {user ? (
                <Link to={`/users/favourites`}> 
                     <h4> Favourites </h4>
                </Link>
            ) : <h4></h4> }
            
            <div>
            <h4 className='relative' onClick={() => setIsShowCart(true)}>
            Cart ({items.length})
            </h4>
            </div>
            <h4>Search</h4>
            <h4>WishList</h4>
            <Link to="/admin">
            <h4>ProdManagement</h4>
            </Link>
            
        </div>
    );
};

export default NavBar;