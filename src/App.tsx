import { CartContextProvider } from "./context/CartContext";
import FooterComponent from "./layout/FooterComponent";
import MainRoutes from "./routes/MainRoutes";
import HeaderComponent from "./layout/HeaderComponent";

function App() {
  return (
    <>
      <div>
        <CartContextProvider>
          <HeaderComponent></HeaderComponent>
          <MainRoutes></MainRoutes>
          <FooterComponent></FooterComponent>
        </CartContextProvider>
      </div>
    </>
  );
}

export default App;
