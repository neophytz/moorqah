import Hero from "./components/Hero";
import React from "react";
import "./app.css";
import Moon from "./components/moon/moon.jsx";
import Carousel from "./components/carousals/Carousel"
import Customer from "./components/customer/Customer";
import Customer2 from "./components/customer2/Customer2";

function App() {
  return (
    <>
      <Hero/>
      <Moon />

      <Carousel />
      <Customer />
      <Customer2 />
    </>
  );
}

export default App;
