import MenuComponent from "./layout/MenuComponent"
import FooterComponent from "./layout/FooterComponent"
import MainRoutes from "./routes/MainRoutes"

function App() {
  return (
    <>
      <div>
        <MenuComponent></MenuComponent>
        <MainRoutes></MainRoutes>
        <FooterComponent></FooterComponent>
      </div>
    </>
  )
}

export default App
