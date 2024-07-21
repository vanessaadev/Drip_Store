
import { HomePage } from "./Pages/HomePage/HomePage"
import { ProductListingPage } from "./Pages/ProductListingPage/ProductListingPage"
import { ProductViewPage } from "./Pages/ProductViewPage/ProductViewPage"
import { Footer } from "./Components/Footer/Footer"
import { SectionCard } from "./Components/SectionCard/SectionCard"
import { SectionOfert } from "./Components/SectionOfert/SectionOfert"
import { Carousel } from "./Components/Carousel/Carousel"
import { DescProduct } from "./Components/DescProduct/DescProduct"  

function App() {
  return (
    <>
      <SectionCard/>
      <SectionOfert/>
      <Footer/>
      <Carousel/>
      <DescProduct/>
    </>
  )
}

export default App
