<<<<<<< HEAD
// import { HomePage } from "./Pages/HomePage/HomePage";
// import { Logo } from './Components/Logo/Logo'
import { DescProduct } from './Components/DescProduct/DescProduct'

function App() {
  return (
    <>
      {/* <HomePage/> */}
      <DescProduct/>
 
      {/* <Logo/> */}
    </>
=======
import { BrowserRouter as Router } from "react-router-dom"
import { AppRoutes } from "./Routes/AppRoutes";
// import { HomePage } from "./Pages/HomePage/HomePage";
// import { ProductViewPage } from "./Pages/ProductViewPage/ProductViewPage"
function App() {
  return (
    <Router>
      <>
      <AppRoutes/>
      </>
    </Router>
>>>>>>> 193d71204d68601363229c3f808eaabb1579b5db
  )
}

export default App
