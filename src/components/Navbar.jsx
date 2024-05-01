import React, { useContext, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate,useLocation,Link } from 'react-router-dom'
import Popup from './Popup'
import { descriptionContext } from '../Context'
import { Button } from "@material-tailwind/react";
import { AiFillDollarCircle } from 'react-icons/ai'
import { BsFillBoxFill, BsFillDatabaseFill } from 'react-icons/bs'

const Navbar = () => {
  const navigate = useNavigate()
  const [projectName, setProjectName] = useState('Untitled Project')
  const [buttonPopup, setButtonPopup] = useState(false)

  const { setProjectKaNaam } = useContext(descriptionContext)

  //console.log(newProject);

  // const addProject = async() => {
  //   try{
  //     const docRef = await addDoc(collection(db, 'projects'), {
  //       user: auth.currentUser.uid,
  //       projectName: projectName,
  //       date: new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear(),
  //   })
  //   }catch{
  //     ((error) => {
  //       alert(error.message)
  //   })  
  // }}

  const handleNewProject = async () => {

    localStorage.setItem("projectName", projectName)
    setProjectKaNaam(projectName)

    setButtonPopup(false)
    navigate('/dnd')

  }
  const handleLogout = async () => {
   // console.log('Logging out...');
    try {
      const response = await fetch('http://localhost:8000/logout', {
        method: 'POST',
        credentials: 'include' 
      });

      if (!response.ok) {
        throw new Error('Logout request failed');
      }
      
      navigate('/')
    } catch (error) {
      console.error('Logout failed:', error);
      
    }
  };
  const view = () => {
    setButtonPopup(true)
  }

  const handleChange = (e) => {
    setProjectName(e.target.value)
  }
  const { pathname } = useLocation();


  return (
    <>
      <div className='h-screen shadow-2xl bg-[#171717] p-4 gap-4 w-1/3 lg:w-1/6 flex flex-col justify-between'>
        <div className='flex flex-col gap-4'>
          <div>
            <h1 className='text-3xl font-bold text-gray-400'>Flow<span className='text-orange-800'>Forge.ai</span></h1>
          </div>
          <div className='bg-gray-500 h-0.5'></div>

          <div>

            <Button
              onClick={view}
              className='bg-white flex items-center justify-center gap-3 w-full border-solid text-gray-800 hover:bg-orange-800 hover:text-white'>
              <span><AiOutlinePlus className='text-xl' /></span><span className='text-md'>Create Project</span>
            </Button>
          </div>
          <div>
            {/* content of sidebar */}
            <div className='flex flex-col  text-xl text-gray-300 gap-8 mt-6 w-full '>
              <span className='flex gap-3 hover:bg-orange-800 hover:text-black px-4 py-2 rounded-xl cursor-pointer'><BsFillDatabaseFill />Projects</span>
              <span className='flex gap-3 hover:bg-orange-800 hover:text-black px-4 py-2 rounded-xl cursor-pointer'><BsFillBoxFill />Templates</span>
              <span className='flex gap-3 hover:bg-orange-800 hover:text-black px-4 py-2 rounded-xl cursor-pointer'><AiFillDollarCircle />Wallet</span>
            </div>
          </div>
        </div>
        <div>
          <Button
            onClick={handleLogout}
            className='bg-white flex items-center justify-center gap-3 w-full border-solid text-gray-800 hover:bg-orange-800 hover:text-white'>
            LogOut
          </Button>
        </div>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup} className="flex justify-center items-center  " >
        <div className="h-[300px]  w-[500px] rounded-xl  items-center ">

          <div className="flex  flex-col   p-2">
            <div className="intro m-5
          text-gray-600 font-myfont  text-[15px]
          ">
              Introducing the revolutionary way to create APIs: effortlessly build powerful interfaces by simply dragging and dropping models. Streamline your development process today!

            </div>
            <h2 className='text-gray-400  font-semibol font-myfont'>Project Name</h2>
            <input type="text" className="border-solid border-[black] border-[2px] rounded-md p-1" onChange={handleChange} value={projectName} />
          </div>

          <div className="selectModel">

            <div className='w-full flex items-center justify-end'>
              <button
                className='text-white justify-center h-8 w-[80px] bg-orange-800 p-5 text-sm rounded-full flex  items-center border-solid border-2 border-black  hover:bg-orange-900 mt-5 ' onClick={handleNewProject}
              >Finish</button>
            </div>


          </div>
        </div>
      </Popup>
    </>
  )
}

export default Navbar
