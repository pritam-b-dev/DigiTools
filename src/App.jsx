import "./App.css";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import { useState } from "react";

const getProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
};

const productsPromise = getProducts();

function App() {
  const [activeTab, setActiveTab] = useState("product");
  return (
    <>
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
          aria-label="Cart"
          onClick={() => setActiveTab("cart")}
        />
      </div>

      {activeTab === "product" && (
        <Product productsPromise={productsPromise}></Product>
      )}
      {activeTab === "cart" && <Cart></Cart>}
    </>
  );
}

export default App;
