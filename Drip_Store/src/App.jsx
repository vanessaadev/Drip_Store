import { HomePage } from "./Pages/HomePage/HomePage"
import { ProductListingPage } from "./Pages/ProductListingPage/ProductListingPage"
import { ProductViewPage } from "./Pages/ProductViewPage/ProductViewPage"
import { Footer } from "./Components/Footer/Footer"

function App() {

  return (
    <>
      <HomePage/>
      <Footer/>
      <ProductListingPage/>
      <ProductViewPage/>
    </>
  )
}

export default App
