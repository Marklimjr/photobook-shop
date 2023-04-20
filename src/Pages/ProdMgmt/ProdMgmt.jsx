import React from 'react';
import NewProdForm from '../../Components/NewProduct/NewProdForm';
import { Link } from 'react-router-dom';

const ProdMgmt = () => {
    return (
        <div>           
                <Link to="/admin/new">
                    <h1>Create New Product</h1>
                </Link>

                <Link to="/admin/edit">
                    <h1>Manage Existing Product</h1>
                </Link>
        </div>
    );
};

export default ProdMgmt;