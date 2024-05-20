import React from 'react'
import "../components/CSS/sidebarOption.css"
import Electricity from "../assets/Electricity.jpg"
import Agriculture from "../assets/agricultures.jpg"
import Education from "../assets/education.jpg"
import Army from "../assets/army.jpg"
import Infrastructure  from"../assets/infrastructure.jpg"
import GovernmentOfficer from "../assets/governmentofficer.jpg"
import Traffic from "../assets/traffic.jpg"
import Hospital from "../assets/hospital.jpg"

import Service from "../assets/service.jpg"
import Wildlife from "../assets/wildlife.jpg"








const SideBarOption = () => {
  return (
   <div className='sidebarOptions'>
      <div className="sidebarOption">
        <img
          src={Electricity}
          alt=""
        />
        <p>Electricity</p>
      </div>

      <div className="sidebarOption">
        <img
          src={Wildlife}
          alt=""
        />
        <p>Forest</p>
      </div>

      <div className="sidebarOption">
        <img
          src={Agriculture}
          alt=""
        />
        <p>Agriculture</p>
      </div>


      <div className="sidebarOption">
        <img
          src={Education}
          alt=""
        />
        <p>Education</p>
      </div>


      <div className="sidebarOption">
        <img
          src={Army}
          alt=""
        />
        <p>Police & Army</p>
      </div>


      <div className="sidebarOption">
        <img
          src={Infrastructure}
          alt=""
        />
        <p>Infrastructure</p>
      </div>


      <div className="sidebarOption">
        <img
          src={GovernmentOfficer}
          alt=""
        />
        <p>Government Officer</p>
      </div>


      <div className="sidebarOption">
        <img
          src={Traffic}
          alt=""
        />
        <p>Vechile & Traffic</p>
      </div>



      <div className="sidebarOption">
        <img
          src={Hospital}
          alt=""
        />
        <p>Hospital</p>
      </div>


      <div className="sidebarOption">
        <img
          src={Service}
          alt=""
        />
        <p>Government Services</p>
      </div>


   </div>

  )
}

export default SideBarOption