import React from 'react';
import { BrowserRouter} from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import { getUser } from '../utilities/users-service';
import { useState } from 'react';


import MainStore from '../Pages/MainStore/MainStore';
import ProdMgmt from '../Pages/ProdMgmt/ProdMgmt';
import NewProdForm from '../Components/NewProduct/NewProdForm';
import ModifyProduct from '../Components/ModifyProduct/ModifyProduct';
import ProductIndex from '../Components/ModifyProduct/ProductIndex';
import SignUpForm from '../Components/SignUpForm/SignUpForm';
import LogInForm from '../Components/LoginForm/LogInForm';
import LogOutMsg from '../Components/LogOutMsg/LogOutMsg';
import OrderDetail from '../Components/OrderDetail/OrderDetail';
import { Navigate } from 'react-router-dom';


const App = () => {

  const [user, setUser] = useState(getUser());

  return (
    <React.StrictMode>
      <BrowserRouter>
       <Routes>

          <Route path="/" element={<MainStore user={user} setUser={setUser}/>} />
          <Route path="/*" element={<Navigate to="/" />} />

          <Route path="/users/signup" element={<SignUpForm />} />
          <Route path="/users/login" element={<LogInForm setUser={setUser}/>} />
          <Route path="/users/logout" element={<LogOutMsg />} />

          <Route path="/orders" element={<OrderDetail />} />

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