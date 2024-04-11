import React from 'react'

import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { BsFillChatRightTextFill } from 'react-icons/bs'
import { BsFillTelephoneForwardFill } from 'react-icons/bs'
import { SlDocs } from 'react-icons/sl'
const Rightmenubar = () => {
  return (
    <>


      <div className='h-screen bg-[#1E1E1E] p-4 gap-4 sm:w-1/3 lg:w-1/6 flex flex-col'>
        <div>
          <h1 className='text-3xl font-bold text-gray-400'>Flow <span className='text-red-800'>Forge.ai</span></h1>
        </div>
        <div className='bg-gray-500 h-0.5'></div>
        <div>

          <Button
            onClick={handleNewProject}
            className='bg-white flex items-center justify-center gap-3 w-full border-solid text-gray-800 hover:bg-gray-900 hover:text-white'>
            <span><AiOutlinePlus className='text-xl' /></span><span className='text-lg'>Create Project</span>
          </Button>
        </div>
      </div>
      <div>

      </div>
    </>
  )
}

export default Rightmenubar
