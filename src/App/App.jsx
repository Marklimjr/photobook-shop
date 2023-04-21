import React from 'react';
import { BrowserRouter} from 'react-router-dom'
import { Routes, Route } from "react-router-dom";


import MainStore from '../Pages/MainStore/MainStore';
import ProdMgmt from '../Pages/ProdMgmt/ProdMgmt';
import NewProdForm from '../Components/NewProduct/NewProdForm';
import ModifyProduct from '../Components/ModifyProduct/ModifyProduct';
import ProductIndex from '../Components/ModifyProduct/ProductIndex';


const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
       <Routes>
      
          <Route path="/" element={<MainStore />} />

          <Route path="/admin" element={<ProdMgmt />} />
          <Route path="/admin/new" element={<NewProdForm />} />
          <Route path="/admin/:id/edit" element={<ModifyProduct />} />
          <Route path="/admin/index" element={<ProductIndex />} />

        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;