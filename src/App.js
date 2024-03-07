import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Componenets/Navbar/Navbar";
import Shop from "../src/Pages/Shop/Shop";
import ShopCategory from "../src/Pages/ShopCategory/ShopCategory";
import Product from "../src/Pages/Product/Product";
import Cart from "./Pages/Cart/Cart";
import RegisterLogin from "./Pages/RegisterLogin/RegisterLogin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route
            path="/mens"
            element={<ShopCategory category="mens" />}
          ></Route>
          <Route
            path="/womens"
            element={<ShopCategory category="womens" />}
          ></Route>
          <Route
            path="/kids"
            element={<ShopCategory category="kids" />}
          ></Route>
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<RegisterLogin />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
