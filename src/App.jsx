import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import ItemDetailPage from "./pages/ItemDetailPage";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="/item/:id" element={<ItemDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;