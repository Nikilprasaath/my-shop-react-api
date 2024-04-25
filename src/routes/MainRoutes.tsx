import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import HomeComponent from "../components/HomeComponent"
import ProductsPage from "../pages/ProductsPage/ProductsPage.tsx"
import ContactComponent from "../components/ContactComponent"
import AboutComponent from "../components/AboutComponent"

const MainRoutes = () => {
    return (
      <Suspense
        fallback={
          <div
            className="text-center spinner-border text-success"
            role="status"
          ></div>
        }
      >
    
        <Routes>
          <Route path='/' element={<HomeComponent/>}></Route>
          <Route path='/Products' element={<ProductsPage/>}></Route>
          <Route path='/Contact' element={<ContactComponent/>}></Route>
          <Route path='/About' element={<AboutComponent/>}></Route>
        </Routes>
      </Suspense>
    );
  };
  
  export default MainRoutes;