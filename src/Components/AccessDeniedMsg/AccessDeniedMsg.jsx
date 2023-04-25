import React from 'react';
import { Link } from 'react-router-dom';

const AccessDeniedMsg = () => {
    return (
        <div>
            <h1> Access Denied, please log in as admin</h1>
            <Link to={`/users/login`}>
            <h1> Log In</h1>
            </Link>
        </div>
    );
};

export default AccessDeniedMsg;