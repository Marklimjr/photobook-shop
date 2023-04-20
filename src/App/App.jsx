import React from 'react';
import { BrowserRouter} from 'react-router-dom'
import { Routes, Route } from "react-router-dom";


import MainStore from '../Pages/MainStore/MainStore';



const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
       <Routes>

          <Route path="/" element={<MainStore />} />

        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;