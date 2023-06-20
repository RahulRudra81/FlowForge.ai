import React, {useState} from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { FiSun } from 'react-icons/fi'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { db } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const [darkMode, setDarkMode] = useState(false)
    const [newProject, setNewProject] = useState(0)
     

    //console.log(newProject);

    const addProject = async() => {
      try{
        const docRef = await addDoc(collection(db, 'projects'), {
          name: `New Project ${newProject + 1}`,
          date: new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear(),
      })
      }catch{
        ((error) => {
          alert(error.message)
      })  
    }}

    const handleNewProject = async () => {
       
        setNewProject(newProject + 1)
        await addProject()

    }
    const handleLogout = ()=>{
      signOut(auth).then(() => {
        navigate('/')
      }).catch((error) => {
        alert(error.message)
      })
    }

  return (
    <div className='flex justify-between items-center p-2 border-b-4 border-gray-200 boder-solid '>
         <div className="logo">
             <Link to='/home'> <h1 className="lg:text-4xl text-2xl text-gray-600 font-bold m-2  cursor-pointer ">AvidSynth</h1></Link>
         </div>

         <div className="add-task md:block hidden">
               <Link to='/mainpage'> <button className=" bg-[#db005b] hover:bg-[#fc0069] text-white lg:p-3 p-1  rounded-md flex justify-between items-center" onClick={handleNewProject}><span><AiOutlinePlus className='mr-3 text-white font-bold lg:text-xl text-sm'/></span>New Model</button></Link>
         </div>

         <div className="icons flex justify-between items-center">
            <div className='text-2xl mr-3 cursor-pointer' onClick={()=>{setDarkMode(!darkMode)}}>
                {darkMode ? <BsFillMoonStarsFill/> : <FiSun/>}
            </div>
            <Link to='/profile'><img src="https://avatars.githubusercontent.com/u/75154257?v=4" alt="" className='w-8 h-8 rounded-full cursor-pointer mr-3 hover:border-2 border-solid border-gray-500'/></Link>
            {/* logout */}
            <Link to='/'><button className="bg-gray-300 text-[black] hidden lg:block hover:bg-gray-400 hover:text-[white]  p-3 mr-3 rounded-md flex justify-between items-center " onClick={handleLogout}>Logout</button></Link>
         </div>

    </div>
  )
}

export default Navbar
