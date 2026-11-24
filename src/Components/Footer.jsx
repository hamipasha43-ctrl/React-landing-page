import React from 'react'
import i1 from "../assets/3rd icon.png"
import i2 from "../assets/4rth icon.png"
import i3 from "../assets/last logo.png"
import i4 from "../assets/Logo (5).png"
import i5 from "../assets/Logo (7).png"

const Footer = () => {
  return (
    <div>



      <div className="px-4  text-center bg-hero">
        <h1 className="display-5 fw-bold text-body-emphasis">Pellentesque suscipit </h1>
        <h1 className="display-5 fw-bold text-body-emphasis">fringilla libero eu.</h1>
        <div className="btn-size d-flex mx-auto bggreen rounded justify-content-center align-items-center">
          <button className="btn  text-light size " type="submit">Get a Demo</button>
          <div>
            <i className="fa-solid fa-arrow-right-long" style={{ color: "rgb(252, 249, 249)" }}></i>

          </div>
        </div>





        <div className="container-fluid bg-dark">
          <div className="container bg-dark">
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top text-white">
              <div className="col mb-3 text-white distribute"> <a href="/"
                className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none" aria-label="Bootstrap">
                <img src={i3} alt="footer logo" /></a>

                <p className=" text-white text-start">Copyright © 2020 Landify UI Kit.</p>
                <p className=" text-white text-start">All rights reserved</p>


                <ul className="nav col-md-6 justify-content-center list-unstyled d-flex align-items-center gap-1 pt-3">
                  <li className=""><a className="text-body-secondary" href="#" aria-label="instagram">
                    <img src={i1} alt="instagram" />
                  </a></li>
                  <li className="ms-3"><a className="text-body-secondary" href="#" aria-label="instagram">
                    <img src={i2} alt="several icone" />
                  </a></li>
                  <li className="ms-3"><a className="text-body-secondary" href="#" aria-label="instagram">
                    <img src={i1} alt="twitter" />
                  </a></li>
                  <li className="ms-3"><a className="text-body-secondary" href="#" aria-label="instagram">
                    <img src={12} alt="youtub" />
                  </a></li>
                </ul>

              </div>


              <div className="col mb-3 text-start">
                <h5>Company</h5>
                <ul className="nav flex-column ">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About us</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Blog</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Contact us</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">pricing</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">testimonials</a></li>
                </ul>

              </div>
              <div className="col mb-3 text-start bg-dark">
                <h5>Support</h5>
                <ul className="nav flex-column ">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Help center</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Terms of service </a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Legal</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Privacy policyt</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">status</a></li>
                </ul>
              </div>
              <div className="col mb-3  mb-3">
                <form>
                  <div className="d-flex justify-content-start bg-dark">
                    <h5>Stay up to date</h5>
                  </div>

                  <div className="d-flex flex-column flex-sm-row w-100 gap-2 footer-grey align-items-center px-2 rounded bg-dark">
                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label> <input id="newsletter1"
                      type="email" className="form-control footer-grey border-0 text-white" placeholder="Email address" />
                    <i className="fa-regular fa-paper-plane" style={{ color: "rgb(18, 18, 19)" }}></i>
                  </div>
                </form>
              </div>
            </footer>
          </div>
        </div>
      </div>






    </div>
  )
}

export default Footer