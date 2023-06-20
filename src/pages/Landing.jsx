import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import DnDFlow from './DnDFlow'
import robot from '../assets/robot.png'
const Landing = () => {
    const [darkMode, setDarkMode] = useState(false)

    return (
        <div className='bg-primary'>


            {/* Navbar */}
            <div className='bg-gray-900 md:fixed z-10 w-full shadow-md bg-opacity-80 hover:bg-opacity-50 backdrop-blur-lg bg-clip-padding'>
            <nav className='relative xl:px-0 sm:px-16 px-6 flex justify-between items-center '>
                <div className=" ">
                    <Link to='/'> <h1 className="text-4xl font-bold hover:text-[#c20051]  m-2  cursor-pointer "><span className='text-white'>Avid</span><span className='text-[#33bbcf]'>Synth</span></h1></Link>
                </div>
                <div className="icons flex justify-between items-center mr-3">
                    {/* <div className='text-2xl mr-3 cursor-pointer' onClick={() => { setDarkMode(!darkMode) }}>
                        {darkMode ? <BsFillMoonStarsFill /> : <FiSun />}
                    </div> */}
                    <a href="/signup"><button className="w-full py-2 my-4 text-black bg-blue-gradient hover:bg-[#c20051] hover:text-[white]  p-3  rounded-md flex justify-between items-center ">Login</button></a>
                </div>
            </nav>
            </div>

            {/* Cotent Area */}

            <div className='flex md:flex-row  flex-col sm:py-16 py-6'>
                <div className='flex-1 flex-col xl:px-0 sm:px-16 px-6 text-white mt-0 flex justify-center items-start w-full'>
                    <div>
                        <h1 className=' text-4xl md:text-6xl font-serif font-bold mb-12'>
                            No-code<br /> <span className='text-gradient'>Audio/Video AI Apps </span><br />in seconds
                        </h1>
                        <p className='font-serif font-bold text-[18px] max-w-[470px] mt-5 text-dimWhite'>Create AI backends in using drag and drop, which you can connect with no-code applicatoins or call with an API call</p>
                    </div>
                </div>
                <div className={`flex-1 flex justify-center items-center md:my-0 my-10 relative`}>
                    <img src={robot} alt="" className="w-[100%] h-[100%] relative z-[5]" />

                    {/* gradient start */}
                    <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                    <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                    <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                    {/* gradient end */}
                </div>
            </div>

            {/* Horizontal Line */}

            <div className='flex item-center justify-center'>
                <div className="relative w-3/4  flex py-5 items-center mt-20">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-gray-400">Preview</span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>
            </div>


            {/* DnDFlow */}

            <div className='flex align-middle justify-center mt-20'>
                <div className=' hover:scale-110 w-3/4 border-solid border-8 blorder-sky-500 hover:shadow-blue-400 hover:shadow-xl'>
                    <DnDFlow />
                </div>
            </div>
        </div>
    )
}

export default Landing