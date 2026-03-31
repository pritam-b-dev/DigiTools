import "./App.css";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import { useState } from "react";
import NavBar from "./Components/NavBar";

const getProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
};

const productsPromise = getProducts();

function App() {
  const [activeTab, setActiveTab] = useState("product");
  const [carts, setCarts] = useState([]);
  return (
    <>
      <NavBar carts={carts}></NavBar>
      <div className="tabs tabs-box justify-center">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label="Products"
          defaultChecked
          onClick={() => setActiveTab("product")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab("cart")}
        />
      </div>

      {activeTab === "product" && (
        <Product
          productsPromise={productsPromise}
          carts={carts}
          setCarts={setCarts}
        ></Product>
      )}
      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}
    </>
  );
}

export default App;
