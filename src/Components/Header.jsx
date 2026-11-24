import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Logo from "../assets/1Logo.png"
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const Header = () => {
  return (
    <div> 

         

 <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img src={Logo} alt="logo"/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0 gap-4">
          <li className="nav-item">
            <a className="nav-link active text-center" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item"> <a className="nav-link blackcolor text-center" href="#">service</a>
          </li>
          <li className="nav-item"><a className="nav-link blackcolor text-center" href="#"> Feature</a>
          </li>
          <li className="nav-item"><a className="nav-link blackcolor text-center" href="#">Testimonal</a>
          </li>

          <li className="nav-item">

            <a className="nav-link blackcolor text-center" href="#">Product</a>
          </li>
          <li className="nav-item">
            <a className="nav-link blackcolor text-center" href="#">FAQ</a>

          </li>


        </ul>
        <div className="d-flex gap-2 justify-content-center">
          <button className="btn textgreen " type="submit">login</button>
          <button className="btn bggreen text-light" type="submit">signup</button>
        </div>

      </div>
    </div>
  </nav>





    </div>
  )
}

export default Header