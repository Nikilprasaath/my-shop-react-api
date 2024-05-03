import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import ProductsPage from "../pages/ProductsPage/ProductsPage.tsx"
import AboutUs from "../pages/AboutUsPage/AboutUs.tsx"
import History from "../pages/AboutUsPage/History.tsx";
import ContactPage from "../pages/ContactPage/ContactPage.tsx";
import HomePage from "../pages/HomePage/HomePage.tsx";
import ProductDetailsComponent from "../pages/ProductDetailPage/ProductDetailPage.tsx";

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
          <Route path='/' element={<HomePage />} />
          <Route path='/Products' element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsComponent/>}></Route>
          <Route path='/contact-us' element={<ContactPage />} />
          <Route path='/about-us' element={<AboutUs />}>
            <Route path='history' element={<History />} />   
          </Route>
    
        </Routes>
      </Suspense>
    );
  };
  
  export default MainRoutes;