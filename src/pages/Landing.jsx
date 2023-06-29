import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import DnDFlow from './DnDFlow'
import robot from '../assets/robot.png'
import ml from '../assets/ml.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Button } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import video1 from '../assets/vid1.gif'
import video2 from '../assets/vid2.gif'
import { IoBuild, IoCreateSharp } from "react-icons/io5";
import bg from '../assets/bg.png'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Footer from '../components/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton '
// import { createTheme ,ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//     palette: {
//       primary: black,
//     }
//   });

const Landing = () => {

    const [darkMode, setDarkMode] = useState(false)
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className='' >


            {/* Navbar */}
            <div className=' md:fixed z-10 h-[70px] align-middle  w-full  bg-opacity-10 hover:bg-opacity-10 backdrop-blur-sm bg-clip-padding'>
                <nav className='relative xl:px-0 sm:px-16 px-6 flex justify-between mt-[8px]'>
                    <div className="">
                        <Link to='/'> <h1 className="text-4xl font-bold  m-2  cursor-pointer "><span className=''>Avid</span><span className='text-[#33bbcf]'>Synth</span></h1></Link>
                    </div>
                    <div className="icons flex justify-between items-center ">
                        {/* <div className='text-md mr-5 text-[#33bbcf] cursor-pointer hover:font-bold hover:underline hover:shadow-black' >
                            LogIn
                        </div> */}
                        <Link to='/signup'>
                            <button className=" text-white justify-center h-8 w-[100px] bg-black p-5 text-md rounded-full flex  items-center  shadow-gray-400 shadow-md hover:shadow-lg hover:shadow-gray-400 hover:bg-gray-800"><LoginIcon sx={{ fontSize: 12, marginRight: 1 }} />SignUp</button>
                        </Link>

                    </div>
                </nav>
            </div>

            {/* Hero Section */}

            <div className=' flex md:flex-row  justify-center flex-col sm:py-16 py-6 ' >
                <div className='mt-32 flex-1 flex-col  flex justify-center items-start '>
                    <div className='flex justify-center m-auto flex-col align-middle' >
                        <h1 className=' text-4xl md:text-5xl font-poppins  mb-12 font-bold'>
                            No-code <span
                                className='text-[#33BBCF] '>
                                Audio/Video </span>
                            AI Apps in seconds
                        </h1>
                        <p className='font-poppins  text-[18px] m-auto text-center mt-5 '>Create AI backends in using drag and drop, which you can connect with no-code <br /> applicatoins or call with an API call</p>
                        <div className='mt-5 flex justify-center'>
                            <Link to='/signup'>
                                <button className="mt-2 text-white justify-center h-6 w-25 bg-black p-5 rounded-full flex  items-center text-lg shadow-gray-400 shadow-md hover:shadow-lg hover:shadow-gray-400 hover:bg-gray-800"><KeyboardArrowRightIcon sx={{ fontSize: 20, marginRight: 0.5 }} />Get Started</button>
                            </Link>
                            <a href='#bottom'>
                                <button className="mt-2 hover:text-white justify-center h-8  w-25 hover:bg-black p-5 rounded-full flex  items-center text-md  ml-5 text-black  hover:shadow-sm hover:shadow-gray-400 border-2 border-black">Try demo</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* <div className={`flex-1 flex justify-center items-center md:my-0 my-10 relative`}>
                    <img src={} alt="" className=" relative  z-[5]" />
                </div> */}
            </div>


            {/* Key Features */}

            <div  className='bg-gray-100 mt-20' >
                <div className='flex justify-center' >
                    <h1 className=' text-4xl md:text-5xl font-poppins  font-bold mt-20'>
                        Key <span
                            className='text-[#33BBCF] '>
                            Features</span>

                    </h1>
                </div>
                <div className=' flex item-center justify-center'>
                    <div className="relative w-3/4  flex py-5 items-center ">
                        <div className="flex-grow border-t border-[#33bbcf]"></div>

                    </div>
                </div>

                {/* cards */}

                <div className='flex justify-center'>
                    <div className='flex md:flex-row justify-center flex-col sm:py-16 py-6 w-full '>
                        <div className='border-2 border-gray-500 h-[300px] flex justify-center p-5 hover:shadow-lg rounded-2xl items-center align-middle text-center w-3/4'>
                            <div className=' '>
                                <IoBuild />
                                <div className='text-5xl font-poppins   '>
                                    <h1> <span className='text-[#33BBCF] '>Build </span><br /> AI backend <br /> in minutes.</h1>
                                </div>
                                <p className='text-gray-500 font-poppins mt-[10px] text-center'> No more deployment. Just drag, drop and get an API</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex md:flex-row justify-center flex-col sm:py-16 py-6 w-full '>
                        <div className='border-2 border-gray-500 h-[300px] flex justify-center p-5 hover:shadow-lg rounded-2xl items-center align-middle text-center w-3/4 '>
                            <div>

                                <IoCreateSharp />
                                <div className='text-5xl font-poppins   '>
                                    <h1> <span className='text-[#33BBCF] '>Customize </span><br /> your pipeline.</h1>
                                </div>
                                <p className='text-gray-500 font-poppins mt-[10px] text-center'> Drag, drop and build end-end customized AI audio or video pipeline  with our 20+ functionalities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Horizontal Line */}

            <div className=' flex item-center justify-center'>
                <div className="relative w-3/4  flex py-5 items-center mt-20">
                    <div className="flex-grow border-t border-[#33bbcf]"></div>
                    <span className="flex-shrink mx-4 text-[#33bbcf]">Preview</span>
                    <div className="flex-grow border-t border-[#33bbcf]"></div>
                </div>
            </div>

            {/* DnDFlow */}
            <a id='bottom'>
                <div className='flex align-middle justify-center' >
                    <div className='mt-20  w-3/4 border-solid border-8 blorder-sky-500 hover:shadow-blue-400 hover:shadow-xl'>
                        <DnDFlow />
                    </div>
                </div>
            </a>
            <ScrollToTopButton/>
            <Footer/>
        </div>
    )
}

export default Landing