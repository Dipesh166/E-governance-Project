import React, { useState } from 'react'
import "./CSS/post.css"
import { RxArrowDown, RxArrowUp, } from 'react-icons/rx'
import { CiRepeat,CiShare2 } from "react-icons/ci";
import { IoMdChatbubbles,IoIosMore,IoMdClose } from "react-icons/io";
import {Avatar} from "@mui/material"
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'

const Post = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const Close = (<IoMdClose />)
  return (
    <div className="post">
        <div className="post__info">
        <Avatar/>
            <h4>User Name</h4>
            <small>TimeStamp</small>
        </div>
        <div className="post__body">
            
            <div className="post__question">
                <p>This is The Complain</p>

            <button 
            onClick={()=> setIsModalOpen(true)}
            className='post__btnAnswer'>Reply</button>
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
                <div className="modal__question">
                    <h1>This is Test Complain</h1>
                    <p>complain by { "  "} <span className='name'>Username</span>on <span  className='name'>timestamp</span> </p>
                </div>

                <div className="modal__answer">
                    <ReactQuill placeholder='Enter your Reply of Complain'/>
                </div>
                <div className="modal__button">
                <button className='cancel'  onClick={()=> setIsModalOpen(false)}>
                    Cancel
                  </button>

                  <button type='submit'   className="add"  >
                   Add Your Complain
                  </button>
                </div>

            </Modal>
            </div>
           
        </div>
        <div className="post__footer">
            <div className="post__footerAction">
                <RxArrowUp/>
                <RxArrowDown/>
            </div>
            <CiRepeat />
            <IoMdChatbubbles />
            <div className="post__footerLeft">
            <CiShare2 />
            <IoIosMore />
            </div>
        </div>

        <p style={{
            color:"rgba(0,0,0,0.5)",
            fontSize:"12px",
            fontWeight:"bold",
            margin:"10px 0",
        }}>1 reply</p>  

        <div  style={{
            margin:"5px 0px 0px 0px",
            padding:"5px 0px 0px 20px",
            borderTop:"1px solid light",

        }} className="post__answer">
            <div 
            style={{
                display:"flex",
                flexDirection:"column",
                width:"100%",
                padding:"10px 5px ",
                borderTop:"1px solid lightgray",



            }}
            className="post-answer-container">
                <div 
                style={{
                    display:"flex",
                    alignItems:"center",
                    marginBottom:"10px",
                    fontSize:"12px",
                    fontWeight:600,
                    color:"#888",
                    
    
    
                }}
                
                className="post-answered">
                    <Avatar/>
                    <div style={{
                        margin:"0px 10px",
                    }} className="post-info">
                        <p>
                            Username
                        </p>
                        <span>TimeStamp</span>
                    </div>
                </div>
                <div className="post-answer">This is the Reply</div>
            </div>
        </div>

    </div>
  )
}

export default Post