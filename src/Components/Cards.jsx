import React from 'react'
import cardp from "../assets/Logo (6).png"

const Cards = () => {
  return (
    <div>


<div className="container">

    <div className="card-group gap-5">
      <div className="card align-items-center customshadow">
        <img src={cardp} className="card-img-top w-25" alt="icone 1"/>
        <div className="card-body">
          <h5 className="card-title  text-center">Membership </h5>
          <h5 className="card-title text-center">Organisations</h5>
          <p className="card-text text-center">Our membership management software provides full automation of membership
            renewals and payments</p>
        </div>

      </div>
      <div className="card align-items-center">
        <img src={cardp} className="card-img-top  w-25" alt="icone 2"/>
        <div className="card-body">
          <h5 className="card-title text-center">National </h5>
          <h5 className="card-title text-center">Associations</h5>
          <p className="card-text text-center">Our membership management software provides full automation of membership
            renewals and payments</p>
        </div>

      </div>
      <div className="card align-items-center">
        <img src={cardp} className="card-img-top  w-25" alt="icone 3"/>
        <div className="card-body">
          <h5 className="card-title text-center">Clubs And </h5>
          <h5 className="card-title text-center">Groups</h5>
          <p className="card-text text-center">Our membership management software provides full automation of membership
            renewals and payments</p>
        </div>

      </div>
    </div>

  </div>



    </div>
  )
}

export default Cards