// import Hero from "./components/Hero";
import React from "react";
// import Preload3 from "./components/preload3/Preload3";
// import Preload2 from "./components/preload2/Preload2";
// import Preload from "./components/Preload/Preload";
// import "./app.css";
// import Moon from "./components/moon/moon.jsx";
// import Carousel from "./components/carousals/Carousel"
// import Customer from "./components/customer/Customer";
// import Customer2 from "./components/customer2/Customer2";
import ScrollAnimation from './components/ScrollAnimation/ScrollAnimation';
import FeatureDisplay from './components/FeatureDisplay/FeatureDisplay';
import LandingPage from './components/LandingPage/LandingPage';
import LandingPageBootstrap from "./components/LandingPage/LandingPageBootstrap";
import CardPage from './components/CardPage/CardPage';
import FeaturePage from './components/FeaturePage/FeaturePage';

function App() {
  return (
    <>
    {/* <Preload3 /> */}
    {/* <Preload /> */}
    {/* <Preload2 /> */}
      {/* <Hero/> */}
      {/* <Moon /> */}

      {/* <Carousel />/ */}
      {/* <Customer2 />
      <Customer /> */}
      <ScrollAnimation/>
      <FeatureDisplay/>
      <FeaturePage />
      {/* <LandingPage /> */}
      <CardPage />
      <LandingPageBootstrap/>
    
    </>
  );
}

export default App;
