import React from 'react'
import Hero2 from "../assets/Illustration.png"
const Unseen = () => {
  return (
    


<div className="container-fluid col-xxl-8 px-4 py-5 bg-hero">
    <div className="container">
      <div className="row align-items-center g-5 py-5">
        <div className="col-12 col-sm-12 col-lg-4"> <img src={Hero2}
            className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/> </div>
        <div className="col-lg-8">
          <h1 className="display-5 fw-bold text-body-emphasis 1h-1 mb-3 font text-center text-lg-start">The unseen of
            spending three
          </h1>
          <h1 className="display-5 fw-bold font text-center text-lg-start"> years at Pixelgrade</h1>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed
            accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam
            vitae, tempus sem. Donec elementum pulvinar odio.</p>


          <div
            className="d-flex gap-2 d-md-flex justify-content-md-center justify-content-lg-start w-100 justify-content-center">
            <button className="btn bggreen text-light size " type="submit">Learn More</button>
          </div>

        </div>
      </div>
    </div>
  </div>



   
  )
}

export default Unseen