import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Catalog from "./components/Catalog/Catalog";
import Faq from "./components/Faq/Faq";
import Product from "./components/Product/Product";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product" element={<Product />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
