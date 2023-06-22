import React from 'react'
import { MdClose } from 'react-icons/md';
import './Popup.css'
function Popup(props) {
  return (props.trigger)?(

    <div className='popup rounded-2xl'>
      <div className="popup-inner">
        <h2 className='font-bold text-[15px] text-center '>Create Your Model Here</h2>
        <span  className='close-btn ' onClick={()=>{props.setTrigger(false)}} ><MdClose/></span>
        <div>{props.children}</div>
       
      </div>
    </div>
    
  ):""
}

export default Popup