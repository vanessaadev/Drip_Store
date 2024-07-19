import { HomePage } from "./Pages/HomePage/HomePage"
import { ProductListingPage } from "./Pages/ProductListingPage/ProductListingPage"
import { ProductViewPage } from "./Pages/ProductViewPage/ProductViewPage"
import { Footer } from "./Components/Footer/Footer"
import { SectionCard } from "./Components/SectionCard/SectionCard"

function App() {

  return (
    <>
      <HomePage/>
      <SectionCard/>
      <Footer/>
      <ProductListingPage/>
      <ProductViewPage/>
    </>
  )
}

export default App
