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
import FavouritesPage from '../Components/FavourtiesPage/FavouritesPage';
import ProductDetail from '../Components/Product/ProductDetail';
import AccessDeniedMsg from '../Components/AccessDeniedMsg/AccessDeniedMsg';


const App = () => {

  const [user, setUser] = useState(getUser());

  return (
    <React.StrictMode>
      <BrowserRouter>
       <Routes>
          <Route path="/" element={<MainStore user={user} setUser={setUser}/>} />

          <Route path="/users/signup" element={<SignUpForm />} />
          <Route path="/users/login" element={<LogInForm setUser={setUser}/>} />
          <Route path="/users/logout" element={<LogOutMsg />} />
          <Route path="/users/favourites" element={<FavouritesPage user={user} setUser={setUser}/>} />

          <Route path="/books/:id" element={<ProductDetail user={user} setUser={setUser}/>} />

          <Route path="/admin" element={user && user.userRole == "admin" ? <ProdMgmt /> : <AccessDeniedMsg />}/>
          <Route path="/admin/index" element={user && user.userRole == "admin" ? <ProductIndex /> : <AccessDeniedMsg />}/>
          <Route path="/admin/new" element={user && user.userRole == "admin" ? <NewProdForm /> : <AccessDeniedMsg />}/>
          <Route path="/admin/:id/edit" element={user && user.userRole == "admin" ? <ModifyProduct /> : <AccessDeniedMsg />} />

        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;