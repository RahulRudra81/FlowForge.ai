import React, { useState } from 'react'
import { BsArrowCounterclockwise } from 'react-icons/bs'
import { MdExplore, MdToken } from 'react-icons/md'
import TemplateCard from '../components/TemplateCard'
import { Link, useLocation } from 'react-router-dom'
import RecentProject from '../components/RecentProject'
import { AiOutlinePlus } from 'react-icons/ai'
import { db } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'
import { BiMessageSquareDetail, BiHomeCircle } from 'react-icons/bi'
import { FiHelpCircle } from 'react-icons/fi'
import { BsPlusSquare } from 'react-icons/bs'
import Navbar from '../components/Navbar'
import Rightmenubar from '../components/Rightmenubar'
import Sidebar from '../components/Sidebar'



const menuItems = [
  { name: 'Home', path: '/', icon: <BiHomeCircle /> },
  { name: 'Get Started', path: '/getstarted', icon: <BiMessageSquareDetail /> },
  { name: 'Templates', path: '/template', icon: <BsPlusSquare /> },
  { name: 'Help & FAQs', path: '/help', icon: <FiHelpCircle /> },

];
const Home = ({token}) => {
  const [newProject, setNewProject] = useState(0)


  //console.log(newProject);

  const addProject = async () => {
    try {
      const docRef = await addDoc(collection(db, 'projects'), {
        name: `New Project ${newProject + 1}`,
        date: new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear(),
      })
    } catch {
      ((error) => {
        alert(error.message)
      })
    }
  }

  const handleNewProject = async () => {

    setNewProject(newProject + 1)
    await addProject()

  }


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isCurrentPath = (path) => {
    return pathname === path;
  };
  
  return (
    <div>
      <Navbar />
      <div className="flex flex-row ">
        <Sidebar />
        <div className='lg:w-3/5 flex flex-col h-screen overflow-y-scroll  home'>
          <div className="flex flex-col md:hidden m-1 p-1 text-xl text-gray-600 font-semibold font-myfont">
            <div
              className=" hover:text-[#f43f5e] cursor-pointer flex items-center"
              onClick={toggleMenu}
            >
              <span className="m-2 text-xl">
                <AiOutlinePlus />
              </span>
              Menu
            </div>

            {isMenuOpen &&
              menuItems.map((item) => (
                <Link to={item.path} key={item.name}>
                  <div
                    className={`m-5 hover:bg-pink-50 cursor-pointer flex items-center text-sm ${isCurrentPath(item.path) ? 'text-[#f43f5e] rounded-xl bg-pink-100' : ''
                      }`}
                  >
                    <span className="m-2">{item.icon}</span>
                    {item.name}
                  </div>
                </Link>
              ))}
          </div>
          <h1 className='lg:text-3xl text-2xl font-myfont mt-5 ml-5 font-bold text-gray-700'>Welcome Back, {token.user.user_metadata.full_name}</h1>
          <h1 className='lg:text-lg text-sm font-myfont mt-3 ml-5 font-bold text-gray-500'>Here's what's happening with your projects today</h1>
          <div className='flex  lg:flex-row lg:justify-between items-center lg:m-5 m-2'>
            <div className='flex flex-col lg:w-[200px] lg:h-[150px] w-[150px] h-[100px] justify-center items-center border-2 border-solid border-gray rounded-lg p-5 shadow-md hover:shadow-gray-700 m-3'>
              <h1 className='lg:text-2xl text-xl font-myfont font-medium text-gray-600'>0</h1>
              <h1 className='lg:text-lg text-sm text-center  font-myfont font-medium text-gray-600'>Total Projects</h1>
            </div>
            <div className='flex flex-col justify-center items-center border-2 border-solid border-gray rounded-lg p-5 shadow-md hover:shadow-gray-700 lg:w-[200px] lg:h-[150px] w-[150px] h-[100px]  m-3'>
              <h1 className='lg:text-2xl text-xl font-myfont font-medium text-gray-600'>0</h1>
              <h1 className='lg:text-lg text-center text-sm font-myfont font-medium text-gray-600'>Total Templates Used</h1>
            </div>
            <div className='flex flex-col justify-center items-center border-2 border-solid border-gray rounded-lg p-5 shadow-md hover:shadow-gray-700 lg:w-[200px] lg:h-[150px] w-[150px] h-[100px]  m-3'>
              <h1 className='lg:text-2xl text-xl font-myfont font-medium text-gray-600'>0</h1>
              <h1 className='lg:text-lg text-sm text-center font-myfont font-medium text-gray-600'>Total Cost</h1>
            </div>
          </div>
          <div className="add-task ml-5 m-3 md:hidden">
            <Link to='/mainpage'> <button className=" bg-[#db005b] hover:bg-[#fc0069] text-white lg:p-3 p-1  rounded-md flex justify-between items-center" onClick={handleNewProject}><span><AiOutlinePlus className='mr-3 text-white font-bold lg:text-xl text-sm' /></span>New Project</button></Link>
          </div>
          <div className="recents m-5">
            <h1 className='lg:text-2xl text-lg font-myfont font-medium text-gray-600 flex items-center'><span><BsArrowCounterclockwise className='mr-2 ' /></span>Recent Projects</h1>
            <RecentProject />

          </div>
          <div className="explore lg:m-5">
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
          </div>
        </div>
            <Rightmenubar />
      </div>
    </div>
  )
}

export default Home
