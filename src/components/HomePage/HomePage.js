import React from "react";
import IntelLogo from "../../assets/HomePage/IntelLogo.png";
import HexagoneShape from "../../assets/HomePage/HexagoneShape.png";

const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
         
        <div className="d-flex p-4 mt-5">
          <div className="col-md-4">
        <img className="img-fluid w-75 p-4" src={HexagoneShape} alt=''/>

        </div>

          <div className="col-md-8">

          <div className="row  mt-5 ">
            <div className="col-md-4">
              <h3>100%</h3>
              <p>SaaS technologya</p>
            </div>
            <div className="col-md-4">
              <h3>100%</h3>

              <p>SaaS technology</p>
            </div>
            <div className="col-md-4">
              <h3> 100%</h3>

              <p>SaaS technology</p>
            </div>
          </div>

          <div className="row  mt-5 ">
            <div className="col-md-4">
              <h3>100%</h3>
              <p>SaaS technologya</p>
            </div>
            <div className="col-md-4">
              <h3>100%</h3>

              <p>SaaS technology</p>
            </div>
            <div className="col-md-4">
              <h3>100%</h3>

              <p>SaaS technology</p>
            </div>
          </div>
          </div>
          </div>

         
        <div className="row mt-5 ps-5 mb-5  d-flex justify-content-center ">
          <div className="col-2 ">
            <img className="d-flex p-1 w-50" src={IntelLogo} alt='_' />
          </div>
          <div className="col-2">
            <img className="d-flex p-1 w-50" src={IntelLogo} alt='' />
          </div>
          <div className="col-2">
            <img className="d-flex p-1 w-50" src={IntelLogo} alt='' />
          </div>
          <div className="col-2">
            <img className="d-flex p-1 w-50" src={IntelLogo} alt='' />
          </div>
          <div className="col-2">
            <img className="d-flex p-1 w-50" src={IntelLogo} alt=''/>
          </div>
          <div className="col-2">
            <img className="d-flex p-1 w-50" src={IntelLogo}  alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;