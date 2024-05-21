import React from 'react'

import { FaHome, FaSearch,  } from "react-icons/fa";
import { MdOutlineFeaturedPlayList, MdOutlineAssignment } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import {Avatar} from "@mui/material"
import "./CSS/quoraHeader.css"
import logo from "../assets/nep-gov.gif"

const QuoraHeader = () => {
  return (
    <div className='qHeader'>

        <div className="qHeader-content">
            <div className="qHeader_logo">

              <img src={logo} alt="logo" />


              </div>
               <div className="qHeader-icons">
               <div className="qHeader-icon">
                <FaHome/>
                </div>
               <div className="qHeader-icon">
               <MdOutlineFeaturedPlayList />
               </div>
               <div className="qHeader-icon">
               <MdOutlineAssignment />
               </div>
               <div className="qHeader-icon">
               <IoPeople />
               </div>
               <div className="qHeader-icon">
               <IoIosNotifications />
               </div>

            
               </div>

               <div className='qHeader-input'>

                <FaSearch/>
                
                <input type="text" placeholder='search complaints' />
                
               </div>
               <div className="qHeader-Rem">
               <Avatar/>
               </div>

             
             <button > Add Complaints</button>
             
              
            
        </div>
        
    </div>
  )
}

export default QuoraHeader