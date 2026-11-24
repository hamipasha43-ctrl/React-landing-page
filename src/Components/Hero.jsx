import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Hero1 from "../assets/Illustration.png"


const Hero = () => {
  return (
    <div> 



<div className="container-fluid col-xxl-8 px-4 py-5 "> 
    <div className="container">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-12 col-sm-12 col-lg-4"> <img src={Hero1}
            className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" /> </div>
        <div className="col-lg-8">
          <h1 className="display-5 fw-bold text-body-emphasis 1h-1 mb-3 font text-center text-lg-start">Lessons and insights
          </h1>
          <h1 className="textgreen font text-center text-lg-start">from 8 year</h1>
          <div
            className="d-flex gap-2 d-md-flex justify-content-md-center justify-content-lg-start w-100 justify-content-center">
            <button className="btn bggreen text-light size " type="submit">Register</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>



    
  )
}

export default Hero