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
        <div>

                <nav class="bg-white border-gray-200">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://deck.sg/" class="flex items-center">
                        <img src="https://deck.sg/wp-content/themes/deck/img/logo.png" class="h-8 mr-3" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <a class="block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 rounded md:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0" aria-current="page">
                                <Link to={`/`}>
                                     Shop All
                                </Link>
                            </a>
                        </li>
                        <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">About</a>
                        </li>
                        <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Services</a>
                        </li>
                        <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Pricing</a>
                        </li>
                        <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>



        <div className='NavBar'>
            <Link to={`/`}><h4>Shop All</h4></Link>
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

            <h4 className='relative' onClick={() => setIsShowCart(true)}>Cart ({items.length})</h4>
            <h4>Search</h4>
        </div>
        </div>
    );
};

export default NavBar;