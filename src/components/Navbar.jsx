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
import Popup from './Popup'

const Navbar = () => {
    const navigate = useNavigate()
    const [darkMode, setDarkMode] = useState(false)
    const [projectName, setProjectName] = useState('Untitled Project')
    const [buttonPopup, setButtonPopup] = useState(false)
     

    //console.log(newProject);

    const addProject = async() => {
      try{
        const docRef = await addDoc(collection(db, 'projects'), {
          projectName: projectName,
          date: new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear(),
      })
      }catch{
        ((error) => {
          alert(error.message)
      })  
    }}

    const handleNewProject = async () => {
       
      await addProject()

      setButtonPopup(false)
      navigate('/dnd')

    }
    const handleLogout = ()=>{
      signOut(auth).then(() => {
        navigate('/')
      }).catch((error) => {
        alert(error.message)
      })
    }
    const view=()=>{
      setButtonPopup(true)
    }

    const handleChange = (e) => {
      setProjectName(e.target.value)
    }

  return (
    <div className='flex justify-between items-center p-2 border-b-4 border-gray-200 boder-solid '>
         <div className="logo">
             <Link to='/home'> <h1 className="lg:text-4xl text-2xl text-gray-600 font-bold m-2  cursor-pointer ">AvidSynth</h1></Link>
         </div>

         <div className="add-task md:block hidden">
                <button className=" bg-[#db005b] hover:bg-[#fc0069] text-white lg:p-3 p-1  rounded-md flex justify-between items-center" onClick={view}><span><AiOutlinePlus className='mr-3 text-white font-bold lg:text-xl text-sm'/></span>New Model</button>
         </div>

         <div className="icons flex justify-between items-center">
            <div className='text-2xl mr-3 cursor-pointer' onClick={()=>{setDarkMode(!darkMode)}}>
                {darkMode ? <BsFillMoonStarsFill/> : <FiSun/>}
            </div>
            {/* <Link to='/profile'><img src="https://avatars.githubusercontent.com/u/75154257?v=4" alt="" className='w-8 h-8 rounded-full cursor-pointer mr-3 hover:border-2 border-solid border-gray-500'/></Link> */}
            {/* logout */}
            <Link to='/'><button className="bg-gray-300 text-[black] hidden lg:block hover:bg-gray-400 hover:text-[white]  p-3 mr-3 rounded-md flex justify-between items-center " onClick={handleLogout}>Logout</button></Link>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup} className="flex justify-center items-center  " >
      <div className="h-[300px]  w-[500px] rounded-xl  items-center ">
     
        <div className="flex  flex-col   p-2">
          <div className="intro m-5
          text-gray-600 font-myfont  text-[15px]
          ">
          Introducing the revolutionary way to create APIs: effortlessly build powerful interfaces by simply dragging and dropping models. Streamline your development process today!

          </div>
          <h2 className='text-gray-700  font-semibol font-myfont'>Project Name</h2>
          <input type="text" className="border-solid border-[black] border-[2px] rounded-md p-1"onChange={handleChange} value={projectName} />
        </div>

         <div className="selectModel">
            {/* <h2 className=' text-gray-600 font-myfont  font-bold text-[15px] '>Select Model</h2>
            <div className="flex items-center cursor-pointer h-[200px] rounded-xl overflow-x-scroll border-black border-solid border-4 home">
            
              {modelsName.map((model) => (
                 <div className='flex items-center m-5 border-solid p-4 border-2 rounded-xl hover:bg-gray-200 bg-gray-100 border-black hover:shadow-xl shadow-white'>
                  <div className='text-[#db005b] text-4xl'>
                    {model.icon}
                  </div>
                  <h2 className='text-gray-700 m-5  font-semibol font-myfont'>{model.name}</h2>
                 
                 </div>
              ))}


              
              
            </div> */}
            
            <div className='w-full flex items-center justify-end'>
        <button
         className='bg-[#db005b] hover:bg-[#fc0069] text-white p-1 mt-2 rounded-md flex justify-end items-end right-0 bottom-0 mr-2 mb-2 flex justify-center '  onClick={handleNewProject}
         >Finish</button>
        </div>
            

         </div>
      </div>
      </Popup>
         </div>

    </div>
  )
}

export default Navbar
