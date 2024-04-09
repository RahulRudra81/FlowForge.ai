import React, {useEffect, useState } from 'react'
import { Link, useLocation , useNavigate } from 'react-router-dom'
import { BsArrowCounterclockwise } from 'react-icons/bs'
import { MdExplore, MdToken } from 'react-icons/md'
import TemplateCard from '../components/TemplateCard'
import RecentProject from '../components/RecentProject'
import { AiOutlinePlus } from 'react-icons/ai'
import { auth } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'
import { BiMessageSquareDetail, BiHomeCircle } from 'react-icons/bi'
import { FiHelpCircle } from 'react-icons/fi'
import { BsPlusSquare } from 'react-icons/bs'
import Navbar from '../components/Navbar'
import Rightmenubar from '../components/Rightmenubar'
import Sidebar from '../components/Sidebar'
import {AiFillDollarCircle} from 'react-icons/ai'
import {BsFillBoxFill, BsFillDatabaseFill} from 'react-icons/bs'

const menuItems = [
  { name: 'Home', path: '/', icon: <BiHomeCircle /> },
  { name: 'Get Started', path: '/getstarted', icon: <BiMessageSquareDetail /> },
  { name: 'Templates', path: '/template', icon: <BsPlusSquare /> },
  { name: 'Help & FAQs', path: '/help', icon: <FiHelpCircle /> },

];
const Home = () => {

  const [session, setSession] = useState(null)
  const navigate = useNavigate()

  // useEffect(() => {
  //   if(!auth.currentUser){
  //     navigate('/')
  //   }

  // }, [])

  const [newProject, setNewProject] = useState(0)


   

  // const addProject = async () => {
  //   try {
  //     const docRef = await addDoc(collection(db, 'projects'), {
  //       user: auth.currentUser.uid,
  //       name: `New Project ${newProject + 1}`,
  //       date: new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear(),
  //     })
  //   } catch {
  //     ((error) => {
  //       alert(error.message)
  //     })
  //   }
  // }

  const handleNewProject = async () => {

    setNewProject(newProject + 1)
    //console.log(auth.currentUser.uid)
    //await addProject()

  }


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isCurrentPath = (path) => {
    return pathname === path;
  };
  


  //projects
  const [projects, setProjects] = useState([])
  // const [loading, setLoading] = useState(true)
   
   useEffect(() => {
       const fetchProjects = async () => {
           try {
               const response = await fetch('http://localhost:8000/api/v1/aiModel/getModels',{
                  method: 'GET',
                   headers: {
                       Authorization: `Bearer ${localStorage.getItem('token')}`
                   }

               })
               const datafrombakend = await response.json()
               setProjects(datafrombakend.data)
             //  setLoading(false)
           } catch (error) {
               console.log(error)
           }
       }
       fetchProjects()
   }, [])

   console.log(projects)
  
  return (
    <div className='font-poppins '>
      <Navbar />
      <div className="flex flex-row  ">
        
        <div className='lg:w-full flex flex-col h-screen overflow-y-scroll  home'>
          
          <h1 className='lg:text-3xl text-2xl font-myfont mt-5 ml-5 font-bold text-gray-700'>Welcome Back </h1>
          <h1 className='lg:text-lg text-sm font-myfont mt-3 ml-5 font-bold text-gray-500'>Here's what's happening with your projects today</h1>
          <div className='flex  lg:flex-row lg:justify-between items-center lg:m-5 m-2'>
            <div className='flex flex-col lg:w-[200px] lg:h-[150px] w-[150px] h-[100px] justify-center items-center border-2 border-solid border-gray rounded-2xl p-5 shadow-md hover:shadow-gray-700 m-3'>
              <h1 className='lg:text-2xl text-xl font-myfont font-medium text-gray-600'>
                {projects.length}
              </h1>
              <div className='flex justify-between items-center'>
              <h1 className='text-4xl mr-5'><BsFillDatabaseFill/></h1>
              <h1 className='lg:text-lg text-sm text-center font-myfont font-medium text-gray-600'> Projects</h1>
              </div>
            </div>
            {/* Usage */}
            <div className='flex flex-col justify-center items-center border-2 border-solid border-gray rounded-2xl p-5 shadow-md hover:shadow-gray-700 lg:w-[200px] lg:h-[150px] w-[150px] h-[100px]  m-3'>
              <h1 className='lg:text-2xl text-xl font-myfont font-medium text-gray-600'>0</h1>
              <div className='flex justify-between items-center'>
              <h1 className='text-4xl mr-5'><BsFillBoxFill/></h1>
              <h1 className='lg:text-lg text-sm text-center font-myfont font-medium text-gray-600'> Templates</h1>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center border-2 border-solid border-gray rounded-2xl p-5 shadow-md hover:shadow-gray-700 lg:w-[200px] lg:h-[150px] w-[150px] h-[100px]  m-3'>
              <h1 className='lg:text-2xl text-xl font-myfont font-medium text-gray-600'>0</h1>
              <div className='flex justify-between items-center'>
              <h1 className='text-4xl mr-5'><AiFillDollarCircle/></h1>
              <h1 className='lg:text-lg text-sm text-center font-myfont font-medium text-gray-600'>Total Cost</h1>
              </div>
            </div>
          </div>
          <div className="add-task ml-5 m-3 md:hidden">
            <Link to='/mainpage'> <button className=" bg-[#db005b] hover:bg-[#fc0069] text-white lg:p-3 p-1  rounded-md flex justify-between items-center" onClick={handleNewProject}><span><AiOutlinePlus className='mr-3 text-white font-bold lg:text-xl text-sm' /></span>New Project</button></Link>
          </div>
          <div className="recents m-5">
            <h1 className='lg:text-2xl text-lg font-myfont font-medium text-gray-600 flex items-center'><span><BsArrowCounterclockwise className='mr-2 ' /></span>Recent Projects</h1>
            <RecentProject />

          </div>
          {/* <div className="explore lg:m-5">
            <h1 className='lg:text-2xl text-lg font-myfont font-medium text-gray-600 flex items-center ml-5'><span><MdExplore className='mr-2' /></span>Explore Templates</h1>
            <div className="flex flex-wrap items-center justify-center ">
              <TemplateCard className='m-2' />
              <TemplateCard className='m-2' />
              <TemplateCard className='m-2' />
              <TemplateCard className='m-2' />
            </div>
            <div className="more">
              <Link to='/template'><h1 className='text-lg font-myfont font-bold text-gray-600 flex justify-center items-center'>More Templates ➡</h1></Link>
            </div>
          </div> */}
        </div>
            {/* <Rightmenubar /> */}
      </div>
    </div>
  )
}

export default Home
