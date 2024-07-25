import { BrowserRouter as Router } from "react-router-dom"
import { AppRoutes } from "./Routes/AppRoutes";


export default function App() {
  return (
    <Router>
      <>
      <AppRoutes/>
      </>
    </Router>
  )
}