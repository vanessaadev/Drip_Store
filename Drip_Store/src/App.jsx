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
  )
}

export default App
