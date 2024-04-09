import React,{useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BiMessageSquareDetail, BiHomeCircle } from 'react-icons/bi'
import { FiHelpCircle } from 'react-icons/fi'
import { BsPlusSquare } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BiMoneyWithdraw } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'


const menuItems = [
  { name: 'Home', path: '/home', icon: <BiHomeCircle /> },
  { name: 'Get Started', path: '/getstarted', icon: <BiMessageSquareDetail /> },
  { name: 'Templates', path: '/template', icon: <BsPlusSquare /> },
  {name:'Billing',path:'/billing',icon:<BiMoneyWithdraw/>},
  { name: 'Help', path: '/help', icon: <FiHelpCircle /> },

];
const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(true);
  };
  const toggleClose = () => {
    setIsMenuOpen(false);
  };

  const isCurrentPath = (path) => {
    return pathname === path;
  };

  return (
    <>
     {!isMenuOpen && (
      <div className="hamburger lg:block hidden mr-5 text-gray-600">
      <span className="m-2 text-2xl" onClick={toggleMenu}>
        <GiHamburgerMenu />
      </span>
   </div>)}
      

    {isMenuOpen && (
      <div className="flex lg:block  flex-col justify-between bg-stone-50 border-r-4 border-solid border-gray-500 w-1/3 h-screen transition-transform duration-300 ease-in-out transform">
      <div className="flex flex-col m-3 p-1 text-xl text-gray-600 font-semibold font-myfont">
        <div
          className="m-5 hover:text-black cursor-pointer flex items-center justify-end"
          onClick={toggleClose}
        >
          <span className="m-2 text-2xl">
            <AiOutlineClose />
          </span>
          
        </div>

          {menuItems.map((item) => (
            <Link to={item.path} key={item.name}>
              <div
                className={`m-5 hover:bg-gray-500 hover:text-white text-lg rounded-xl cursor-pointer flex items-center ${
                  isCurrentPath(item.path) ? 'text-white rounded-xl bg-gray-500' : ''
                }`}
              >
                <span className="m-2">{item.icon}</span>
                {item.name}
              </div>
            </Link>
          ))}
      </div>
        {/* <div className="billings m-5 border-solid border-2 p-5 border-gray-700 shadow-2 shadow-gray-300 rounded-lg">

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
        </div> */}
    </div>
    )}
    </>
  )
}

export default Sidebar

