import React from 'react';
import "./Carousel.css";
// import imga from "./mmm.jpg"
const Carousel = () => {
  return (
 <>
 

 <div className="container  rounded-lg">
  <div  className="display-4 mb-2 " style={{ fontWeight: 'bolder' }} >Popular Art Work </div>
  <p style={{ fontWeight: 'bold' }}>Trending art work for Now</p>
<div className="containerr  ">
  <div className='justify-content-center d-flex trendd'> </div>
  <div className="cardd" style={{ position:'relative', top:'20px' }}>
    <div >
      <div className="  border border-dark imgg" />
    </div>
    <div className="titlee mt-1 container"><h3>Card  </h3>
    <p className="titlee">Lorem ipsum dolor sit amet consectetur adipisicing </p></div>
    <div className="circlee ">
     
    </div>
  </div>
  <div className="cardd" style={{ height:'320px', backgroundImage:'linear-gradient(to bottom left, rgba(252,159,47,255), rgba(255,28,207,255))', }}>
    <div>
    <div className=" border border-dark imgg" />
    </div>
    <div className="titlee mt-1 container"><h3>Card </h3>
    <p className="titlee">Lorem ipsum dolor sit amet consectetur adipisicing </p></div>
   
    <div className="circlee ">
   
    </div>
  </div>
  <div className="cardd" style={{ position:'relative', top:'20px' }}>
    <div>
    <div className=" border border-dark imgg" />
    </div>
    <div className="titlee  mt-1 container"><h3>Card </h3>
    <p className="titlee">Lorem ipsum dolor sit amet consectetur adipisicing </p></div>
  
    <div className="circlee ">
     
    </div>
  </div>
</div>

</div>
 <br />

 
 
 
 </>
  )
}

export default Carousel
