import React from 'react';
import NewProdForm from '../../Components/NewProduct/NewProdForm';
import { Link } from 'react-router-dom';

const ProdMgmt = () => {
    return (
        <div className="flex items-center justify-center h-screen text-2xl">           
                <Link to="/admin/new">
                    <h1 className='px-10'>Create New Product</h1>
                </Link>
                <Link to="/admin/index">
                    <h1 className='px-10'>Manage Existing Product</h1>
                </Link>
        </div>
    );
};

export default ProdMgmt;