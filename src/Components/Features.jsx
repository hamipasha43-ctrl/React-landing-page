import React from 'react'
import f1 from "../assets/Logo (4).png"
import f2 from "../assets/Logo (5).png"
import f3 from "../assets/Logo (6).png"
import f4 from "../assets/Logo (7).png"

const Features = () => {
  return (
    <div>



<div className="container px-4 py-5 ">

    <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5  ">
      <div className="col d-flex flex-column align-items-start gap-2 ">
        <h2 className="fw-bold text-body-emphasis font ">Helping a local </h2>
        <h2 className="fw-bold text-body-emphasis textgreen font"> business reinvent itself </h2>
        <p className="text-body-secondary">We reached here with our hard work and dedication</p>
      </div>
      <div className="col ">
        <div className="row row-cols-1 row-cols-sm-2 g-4">
          <div className="col d-flex  gap-4 justify-content-center">
            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center  fs-4 rounded-3">
              <img src={f1} alt="f1" className="mb-4"/>
            </div>
            <div>
              <h4 className="fw-semibold mb-0 text-body-emphasis">2,245,341</h4>
              <p>Members</p>
            </div>
          </div>
          <div className="col d-flex  gap-4 justify-content-center">
            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center  fs-4 rounded-3">
              <img src={f2} alt="f2" className="mb-4"/>
           </div>
            <div>
              <h4 className="fw-semibold mb-0 text-body-emphasis">46,328</h4>
              <p>Clubs</p>
            </div>

          </div>
          <div className="col d-flex  gap-4 justify-content-center">
            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center  fs-4 rounded-3">
              <img src={f3} alt="f3" className="mb-4"/>
            </div>

            <div>
              <h4 className="fw-semibold mb-0 text-body-emphasis">828,867</h4>
              <p>Event Bookings</p>
            </div>

          </div>
          <div className="col d-flex  gap-4 justify-content-center">
            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center  fs-4 rounded-3">
              <img src={f4} alt="f4" className="mb-4"/>
            </div>
            <div>
              <h4 className="fw-semibold mb-0 text-body-emphasis">1,926,436</h4>
              <p>Payments</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>




    </div>
  )
}

export default Features