import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout/Layout.jsx"
import Cart from "./pages/CartPage/Cart.jsx"
import HomePage from "./pages/HomePage/HomePage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
