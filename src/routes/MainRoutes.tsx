import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import HomeComponent from "../components/HomeComponent"
import ProductsPage from "../pages/ProductsPage/ProductsPage.tsx"
import ContactComponent from "../components/ContactComponent"
import AboutUs from "../pages/AboutUsPage/AboutUs.tsx"
import History from "../pages/AboutUsPage/History.tsx";

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
          <Route path='/' element={<HomeComponent />} />
          <Route path='/Products' element={<ProductsPage />} />
          <Route path='/Contact' element={<ContactComponent />} />
          <Route path='/about-us' element={<AboutUs />}>
            <Route path='history' element={<History />} />   
          </Route>
    
        </Routes>
      </Suspense>
    );
  };
  
  export default MainRoutes;