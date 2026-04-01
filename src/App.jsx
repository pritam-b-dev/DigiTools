import "./App.css";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import { useState } from "react";
import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner";
import Dashboard from "./Components/Dashboard";
import Process from "./Components/Process";
import Pricing from "./Components/Pricing";
import JoinUs from "./Components/JoinUs";

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
        <h1 className="font-extrabold text-5xl text-center md:text-left">
          Premium Digital Tools
        </h1>
        <p className="text-[#627382] text-center">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>
      <div className="tabs justify-center bg-transparent ">
        <span className="border border-zinc-200 rounded-full p-2">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab btn btn-ghost rounded-full checked:bg-linear-to-r checked:from-[#4F39F6] checked:to-[#9514FA] checked:rounded-full checked:text-white px-6 py-5 mr-4"
            aria-label="Products"
            defaultChecked
            onClick={() => setActiveTab("product")}
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab btn btn-ghost rounded-full checked:bg-linear-to-r checked:from-[#4F39F6] checked:to-[#9514FA] checked:rounded-full checked:text-white px-6 py-5"
            aria-label={`Cart (${carts.length})`}
            onClick={() => setActiveTab("cart")}
          />
        </span>
      </div>

      {activeTab === "product" && (
        <Product
          productsPromise={productsPromise}
          carts={carts}
          setCarts={setCarts}
        ></Product>
      )}
      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}
      <Process></Process>
      <Pricing></Pricing>
      <JoinUs></JoinUs>
    </>
  );
}

export default App;
