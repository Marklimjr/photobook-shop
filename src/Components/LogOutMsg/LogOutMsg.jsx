import React from 'react';
import { Link } from 'react-router-dom';

const LogOutMsg = () => {

    return (
        <div>
            <h1>You have logged out successfully</h1>
            <Link to={`/`}>
            <h1>Return to Shop</h1>
            </Link>
        </div>
    );
};

export default LogOutMsg;