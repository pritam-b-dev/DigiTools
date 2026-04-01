import "./App.css";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import { useState } from "react";
import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner";
import Dashboard from "./Components/Dashboard";

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
      <Banner></Banner>
      <Dashboard></Dashboard>
      <div className="flex flex-col justify-center items-center mb-5 space-y-5">
        <h1 className="font-extrabold text-5xl">Premium Digital Tools</h1>
        <p className="text-[#627382] text-center">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>
      <div className="tabs tabs-box justify-center ">
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
