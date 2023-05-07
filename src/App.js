import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Catalog from "./components/Catalog/Catalog";
import Faq from "./components/Faq/Faq";
import Notfound from "./components/Notfound/Notfound";
import Privacy from "./components/Privacy/Privacy";
import Product from "./components/Product/Product";
import Warranty from "./components/Warranty/Warranty";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/:gameTypeLink/:id" element={<Product />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
