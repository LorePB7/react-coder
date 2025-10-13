import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Category from "./components/Category";
import ItemDetailPage from "./components/ItemDetailPage";
import CartView from "./components/CartView";
import Checkout from "./components/Checkout";
import Error404 from "./components/Error404";
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
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;