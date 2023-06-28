import React,{useState,useEffect} from 'react'
import { MdExplore } from 'react-icons/md'
import { ImSearch } from 'react-icons/im'
import TemplateCard from '../components/TemplateCard'
import Navbar from '../components/Navbar'
import Rightmenubar from '../components/Rightmenubar'
import Sidebar from '../components/Sidebar'
import {auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
const Template = () => {
  const [session, setSession] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if(!auth.currentUser){
      navigate('/')
    }

  }, [])
  return (
    <div>
    <Navbar/>
    <div className="flex flex-row ">
    <Sidebar/>
    <div className='lg:w-full h-[88vh] overflow-y-scroll flex flex-col  home'>
      <div className=" ">
       <div className="flex justify-between items-center  bg-white  p-2   ">
       <h1 className='lg:text-2xl text-sm font-myfont font-bold text-gray-600 flex mr-5 items-center'><span><MdExplore className='lg:mr-2'/></span>Explore Templates</h1>
      
        <div className="flex justify-center items-center border-2 border-solid border-gray rounded-lg p-2 shadow-md hover:shadow-gray-700 m-3 cursor-pointer  text-sm">
          <input type="text" placeholder='Search Templates' className='outline-none bg-transparent'/>
          <button className='outline-none'><ImSearch className='text-gray-700'/></button>
          </div>
       </div>
            <div className="flex flex-wrap items-center justify-center mt-2 ">
            <TemplateCard className='m-2'/>
            <TemplateCard className='m-2'/>
            <TemplateCard className='m-2'/>
            <TemplateCard className='m-2'/>
            <TemplateCard className='m-2'/>
            <TemplateCard className='m-2'/>
            <TemplateCard className='m-2'/>
            <TemplateCard className='m-2'/>
            <TemplateCard className='m-2'/>
            <TemplateCard className='m-2'/>
            </div>
          

      </div>
    </div>
    <Rightmenubar/>
    </div>
    </div>
  )
}

export default Template
