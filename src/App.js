import Hero from "./components/Hero";
import React from "react";
import "./app.css";
import Moon from "./components/moon/moon.jsx";
import Carousel from "./components/carousals/Carousel"
import Customer from "./components/customer/Customer";
import Customer2 from "./components/customer2/Customer2";
// import ScrollAnimation from './components/ScrollAnimation/ScrollAnimation';
// import FeatureDisplay from './components/FeatureDisplay/FeatureDisplay';
// import LandingPage from './components/LandingPage/LandingPage';
// import CardPage from './components/CardPage/CardPage';
// import FeaturePage from './components/FeaturePage/FeaturePage';

function App() {
  return (
    <>
      <Hero/>
      <Moon />

      <Carousel />
      <Customer />
      <Customer2 />
      {/* <ScrollAnimation/>
      <FeatureDisplay/>
      <LandingPage />
      <CardPage />
      <FeaturePage /> */}
    </>
  );
}

export default App;
