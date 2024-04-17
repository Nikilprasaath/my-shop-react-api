import { Routes,Route } from "react-router-dom"
import HomeComponent from "../components/HomeComponent"
import ProductsComponent from "../components/ProductsComponent"
import ContactComponent from "../components/ContactComponent"
import AboutComponent from "../components/AboutComponent"

const BodyComponent = () => (
    <Routes>
        <Route path='/' element={<HomeComponent/>}></Route>
        <Route path='/Products' element={<ProductsComponent/>}></Route>
        <Route path='/Contact' element={<ContactComponent/>}></Route>
        <Route path='/About' element={<AboutComponent/>}></Route>
    </Routes>
  )

export default BodyComponent