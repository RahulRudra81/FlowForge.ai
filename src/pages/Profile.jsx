import { useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Rightmenubar from '../components/Rightmenubar'
import Sidebar from '../components/Sidebar'
import { auth } from '../firebase'
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';
const Profile = () => {
   
const [activeIndex, setActiveIndex] = useState(null);

 

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [session, setSession] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if(!auth.currentUser){
      navigate('/')
    }

  }, [])

  console.log(auth.currentUser)
  
  return (
    <div >
    <Navbar/>
    <div className="flex  flex-row">
    <Sidebar/>
    <div className="w-full">
    <div className="container mt-10 mx-auto max-w-md bg-white rounded-lg shadow-lg shadow-gray-900 w-full">
        <div className="px-6 py-4">
          <div className="text-center">
            <img
              className="w-24 h-24 rounded-full mx-auto"
              src="https://avatars.githubusercontent.com/u/75154257?v=4"
              alt="Profile Picture"
            />
            <h2 className="text-2xl font-bold mt-4">John Doe</h2>
            <p className="text-gray-600">Front-end Developer</p>
          </div>

          <div className="mt-4">
            <p className="text-gray-700 flex items-center">
              <FaEnvelope className="mr-2" />
              Email: john@example.com
            </p>
            <p className="text-gray-700 flex items-center">
              <FaPhone className="mr-2" />
              Phone: 123-456-7890
            </p>
          </div>
        </div>
      </div>
    </div>
    <Rightmenubar/>
    </div>
    </div>
  );
};


export default Profile
