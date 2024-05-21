import React, { useState } from 'react';

import { Avatar, Input } from "@mui/material";
import { FaHome, FaSearch, } from "react-icons/fa";
import { IoIosNotifications, IoMdArrowDropdown, IoMdClose } from "react-icons/io";
import { IoPeople } from "react-icons/io5";
import { MdOutlineAssignment, MdOutlineFeaturedPlayList, MdOutlinePeopleAlt } from "react-icons/md";
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import logo from "../assets/nep-gov.gif";
import "./CSS/quoraHeader.css";




const QuoraHeader = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const Close = (<IoMdClose />)

  const [inputUrl, setInputUrl] = useState("")
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
              <div className="modal__Field">
                <Input type='text'  placeholder='Write Your Complain in detail'/>
                <div style={{
                  display:"flex",
                  flexDirection:"column"

                }}>
                  <input 
                  value={inputUrl}
                  onChange={(e)=> setInputUrl(e.target.value)}
                  style={{
                    margin:"5px 0",
                    border:"1px solid lightgray",
                    padding:"10px",
                    outline:"2px solid #000",



                  }}
                   type='text' 
                  placeholder='Optional:include a link that give context'/>
                  {
                    inputUrl !== "" &&  <img 
                    style={{
                      height:"40vh",
                      objectFit:"contain",

                    }}
                    src={inputUrl} alt="display-image" />
                  }
                 


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