import React from "react";
// import "./app.css";
// import Hero from "./components/Hero";
// import FeatureDisplay from './components/FeatureDisplay/FeatureDisplay';
// import FeaturePage from './components/FeaturePage/FeaturePage';
import CardPage from './components/CardPage/CardPage';
// import LandingPageBootstrap from "./components/LandingPage/LandingPageBootstrap";
import ScrollCard from './components/ScrollCard/ScrollCard'

// import Preload3 from "./components/preload3/Preload3";
// import Preload2 from "./components/preload2/Preload2";
// import Preload from "./components/Preload/Preload";
// import Moon from "./components/moon/moon.jsx";
// import Carousel from "./components/carousals/Carousel"
// import Customer from "./components/customer/Customer";
// import Customer2 from "./components/customer2/Customer2";

import ScrollAnimation from './components/ScrollAnimation/ScrollAnimation';

function App() {
  return (
    <>
      {/* <Hero/>
      <FeatureDisplay/>
      <FeaturePage />
      <LandingPageBootstrap/> */}
      <ScrollAnimation/>
      <ScrollCard />
      <CardPage />
      <CardPage />
      <CardPage />

      {/* <Preload3 /> */}
      {/* <Preload /> */}
      {/* <Preload2 /> */}
      {/* <Moon /> */}
      {/* <Customer2 /> */}
      {/* <Carousel /> */}
      {/* <Customer /> */}

    
    </>
  );
}

export default App;
