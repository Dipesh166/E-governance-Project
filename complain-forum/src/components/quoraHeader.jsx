import React, { useState } from 'react'

import { FaHome, FaSearch,  } from "react-icons/fa";
import { MdOutlineFeaturedPlayList, MdOutlineAssignment } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import {Avatar, Input} from "@mui/material"
import "./CSS/quoraHeader.css"
import logo from "../assets/nep-gov.gif"
import Modal from "react-responsive-modal"
import { IoMdClose, IoMdArrowDropdown } from "react-icons/io";
import 'react-responsive-modal/styles.css';
import { MdOutlinePeopleAlt } from "react-icons/md";




const QuoraHeader = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const Close = (<IoMdClose />)
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

             
             <button onClick={() => setIsModalOpen(true)}> Add Complaints</button>
             <Modal
              open={isModalOpen}
              IoMdClose={close}
              onClose={() => setIsModalOpen(false)}

              closeOnEsc
              center
              closeOnOverlayClick={false}

              styles={{
                overlay:{
                  height:"auto",

                }
              }}
             >
              <div className="modal__title">
                <h5>File Complains</h5>
                <h5>Share Link</h5>
                <div className="modal__info">
                  <Avatar className='avatar'/>
                  <div className="modal__scop">
                  <MdOutlinePeopleAlt />
                    <p>Public</p>
                    <IoMdArrowDropdown />
                  </div>
                </div>

              </div>
              <div className="modal__Fiels">
                <Input type='text'  placeholder='Write Your Complain in detail'/>
                <div style={{
                  display:"flex",
                  flexDirection:"column"

                }}>
                  <input  type='text' placeholder='Optional:include a link that give context'/>


                </div>
                <div className="modal__buttons">
                  <button className='cancel'  onClick={()=> setIsModalOpen(false)}>
                    Cancel
                  </button>

                  <button type='submit'   className="add"  >
                   Add Your Complain
                  </button>
                </div>
              </div>
             </Modal>
             
              
            
        </div>
        
    </div>
  )
}

export default QuoraHeader