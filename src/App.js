import { Navbar } from "./component/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./Page/ShopCategory";
import LoginSignup from "./Page/LoginSignup";
import Product from "./Page/Product";
import Shop from "./Page/Shop";
import Cart from "./Page/Cart";
import Footer from "./component/Footer/Footer";
import men_banner from "./component/Assegts/banner_mens.png"
import women_banner from "./component/Assegts/banner_women.png"
import kid_banner from "./component/Assegts/banner_kids.png"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/product/:productid" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />


        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;