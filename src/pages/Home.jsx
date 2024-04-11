import React, { useEffect, useState, useContext } from 'react'
import { descriptionContext } from '../Context'
import { Link, useLocation, useNavigate } from 'react-router-dom'
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
import { Button } from '@material-tailwind/react'
import Navbar from '../components/Navbar'
import { BiSearch } from 'react-icons/bi'
import Rightmenubar from '../components/Rightmenubar'
import { AiFillDollarCircle } from 'react-icons/ai'
import { BsFillBoxFill, BsFillDatabaseFill } from 'react-icons/bs'
import Popup from '../components/Popup'
import { signOut } from 'firebase/auth'


const Home = () => {

  const navigate = useNavigate()
 

  // useEffect(() => {
  //   if(!auth.currentUser){
  //     navigate('/')
  //   }

  // }, [])
  //projects
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://bit-hackathon-1.onrender.com/api/v1/aiModel/getModels', {
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
    <div>

      <div>
        <div className='font-poppins flex w-screen h-screen'>
          <Navbar />
          
              
          {/* projects */}
          <div className='flex w-full flex-col p-10  gap-10 bg-[#212121]'>
              <h1 className='text-5xl font-bold text-orange-800'>Projects</h1>
              <div className='flex gap-4'>
                <input className='p-2 bg-[#212121] border-2 text-white focus:border-gray-700 focus:outline-none border-[#323232] rounded-lg' placeholder='Enter to search'/>
                <Button className='bg-black hover:bg-orange-800 hover:text-black'>
                  <BiSearch className='text-lg'/>
                </Button>
              
              </div>
              <span className='text-xl text-orange-800 font-bold'>Recent Projects </span>
              <div><RecentProject/></div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home
