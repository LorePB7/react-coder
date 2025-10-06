import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import ItemDetailPage from "./pages/ItemDetailPage";
import CartView from "./pages/CartView";
import Error404 from "./pages/Error404";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:categoryId" element={<Category />} />
              <Route path="/item/:id" element={<ItemDetailPage />} />
              <Route path="/cart" element={<CartView />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;