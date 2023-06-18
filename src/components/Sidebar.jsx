import React,{useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BiMessageSquareDetail, BiHomeCircle } from 'react-icons/bi'
import { FiHelpCircle } from 'react-icons/fi'
import { BsPlusSquare } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'



const menuItems = [
  { name: 'Home', path: '/home', icon: <BiHomeCircle /> },
  { name: 'Get Started', path: '/getstarted', icon: <BiMessageSquareDetail /> },
  { name: 'Templates', path: '/template', icon: <BsPlusSquare /> },
  { name: 'Help & FAQs', path: '/help', icon: <FiHelpCircle /> },

];
const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isCurrentPath = (path) => {
    return pathname === path;
  };

  return (
    // <div className='flex lg:block hidden flex-col justify-between   bg-stone-50 border-r-4 border-solid border-gray-500 w-1/4 h-[88vh] '>
    //   <div className='flex flex-col m-3 p-1 text-xl text-gray-600 font-semibold font-myfont '>
    //   {/* <Link to='/'><h1 className={`m-5 hover:text-[#f43f5e]  cursor-pointer  flex items-center`} ><span className='m-2 text-2xl'><BiHomeCircle/></span>Home</h1></Link>
    //   <Link to='/getstarted'><h1 className='m-5 hover:text-[#f43f5e] cursor-pointer  flex items-center '><span className='m-2'><BiMessageSquareDetail/></span>Get Started</h1></Link>
    //   <Link to='/template'><h1 className='m-5 hover:text-[#f43f5e] cursor-pointer  flex items-center '><span className='m-2 text-lg'><BsPlusSquare/></span>Templates</h1></Link>
    //   <Link to='/help'><h1 className='m-5 hover:text-[#f43f5e] cursor-pointer  flex items-center '><span className='m-2 text-2xl'><FiHelpCircle /></span>Help & FAQs</h1></Link>  */}

    //   {menuItems.map((item) => (
    //       <Link to={item.path} key={item.name}>
    //         <div
    //           className={`m-5 hover:bg-pink-50 cursor-pointer  flex items-center ${
    //             isCurrentPath(item.path) ? 'text-[#f43f5e] rounded-xl bg-pink-100' : ''
    //           }`}
    //         >
    //           <span className='m-2'>{item.icon}</span>
    //           {item.name}

    //           </div>
    //       </Link>
    //     ))}
       
     
    //   </div>
    //   <div className="billings m-5 border-solid border-2 p-5 border-gray-700 shadow-2 shadow-gray-300 rounded-lg ">
    //     <h1 className='text-center font-bold  text-lg text-gray-500  '>Billing</h1>
    //     <div className="usage mt-3">
    //     <h1 className='font-bold'>Current Plan</h1>
    //         <div className="flex justify-between items-center border-2 border-gray rounded-2 border-solid">
    //             <h1>Storage</h1>
    //             <h1>0.5GB/5GB</h1>
    //         </div>
    //     </div>
    //     <div className="flex justify-center items-center">  
    //        <Link to='/billing'> <button className="bg-[#db005b] hover:bg-[#fc0069] text-white p-1 mt-2  rounded-md flex justify-between items-center"><span><AiOutlinePlus className='text-white font-bold text-xl'/></span>Upgrade </button></Link>
    //     </div>
    //   </div>
    // </div>
    <div className="flex lg:block hidden flex-col justify-between bg-stone-50 border-r-4 border-solid border-gray-500 w-1/4 h-screen ">
      <div className="flex flex-col m-3 p-1 text-xl text-gray-600 font-semibold font-myfont">
        <div
          className="m-5 hover:text-[#f43f5e] cursor-pointer flex items-center"
          onClick={toggleMenu}
        >
          <span className="m-2 text-2xl">
            <AiOutlinePlus />
          </span>
          Menu
        </div>

        {isMenuOpen &&
          menuItems.map((item) => (
            <Link to={item.path} key={item.name}>
              <div
                className={`m-5 hover:bg-pink-50 cursor-pointer flex items-center ${
                  isCurrentPath(item.path) ? 'text-[#f43f5e] rounded-xl bg-pink-100' : ''
                }`}
              >
                <span className="m-2">{item.icon}</span>
                {item.name}
              </div>
            </Link>
          ))}
      </div>
      <div className="billings m-5 border-solid border-2 p-5 border-gray-700 shadow-2 shadow-gray-300 rounded-lg">

        <h1 className="text-center font-bold text-lg text-gray-500">Billing</h1>
        <div className="usage mt-3">
          <h1 className="font-bold">Current Plan</h1>
          <div className="flex justify-between items-center border-2 border-gray rounded-2 border-solid">
            <h1>Storage</h1>
            <h1>0.5GB/5GB</h1>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Link to="/billing">
            <button className="bg-[#db005b] hover:bg-[#fc0069] text-white p-1 mt-2 rounded-md flex justify-between items-center">
              <span>
                <AiOutlinePlus className="text-white font-bold text-xl" />
              </span>
              Upgrade
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
