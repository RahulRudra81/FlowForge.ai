import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { FiLock } from 'react-icons/fi'
import { IoArrowBackCircle } from "react-icons/io5";
import axios from "axios"



const Auth = (params) => {


  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",

  });

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token != null){
      navigate('/home')
    }
  }, [])
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const login = await axios.post(
        'https://bit-hackathon-1.onrender.com/api/v1/user/login',
        {
          email : data.email,
          password : data.password
        }
      )
      localStorage.setItem('token' ,login.data.data.accessToken)
      navigate('/home')
    } catch (error) {
      alert(error.message)
    }

  }

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const register = await axios.post(
        'https://bit-hackathon-1.onrender.com/api/v1/user/register',
        {
          fullName : data.name,
          email : data.email,
          password : data.password
        }
      )
      console.log(register);
      localStorage.setItem('token',register.data.data.accessToken)
      navigate('/home')
    } catch (error) {
      console.log(error);
    }
  }

  return (

    <div className='font-poppins min-h-screen'>
      <Link to='/'>
        <div className='text-3xl ml-3 p-5'>
          <IoArrowBackCircle />
        </div>
      </Link>

      {/* <div className='bg-gray-900 md:fixed z-10 w-full shadow-md bg-opacity-90 hover:bg-opacity-50 backdrop-blur-lg bg-clip-padding'>
            <nav className='relative xl:px-0 sm:px-16 px-6 flex justify-between items-center '>
                <div className=" ">
                    <Link to='/'> <h1 className="text-4xl font-bold hover:text-[#c20051]  m-2  cursor-pointer "><span className='text-white'>Avid</span><span className='text-[#33bbcf]'>Synth</span></h1></Link>
                </div>
                <div className="icons flex justify-between items-center mr-3">
                    {/* <div className='text-2xl mr-3 cursor-pointer' onClick={() => { setDarkMode(!darkMode) }}>
                        {darkMode ? <BsFillMoonStarsFill /> : <FiSun />}
                    </div> }
                    <Link to='/login'><button className="w-full py-2 my-4 text-black bg-blue-gradient hover:bg-[#c20051] hover:text-[white]  p-3  rounded-md flex justify-between items-center ">Login</button></Link>
                </div>
            </nav>
            </div> */}
      <form onSubmit={handleRegister}>
        {params.title == "SignUp" ? (
            <div className="flex font-poppins items-center justify-center  mt-0 w-full">
              <div className="px-8 py-6 mx-4 mt-4 text-left  md:w-1/3 lg:w-1/3 sm:w-1/3">
                <div
                  className="flex items-center justify-center mb-4 bg-black text-white rounded-full h-10 w-10 m-auto text-2xl font-bold"
                > <FiLock /></div>
                <h3 className="text-2xl font-bold text-center text-gray-800">Sign Up</h3>
                <div>
                  <div className="mt-4">
                    <div>

                      <input
                        type="text"
                        placeholder="Name"
                        onChange={(e) => handleChange(e)}
                        value={data.name}
                        name="name"
                        required
                        className="w-full px-4 py-2 mt-2 border  focus:outline-none focus:ring-1 focus:ring-gray-600"
                      />

                    </div>
                    <div className="mt-4">

                      <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => handleChange(e)}
                        value={data.email}
                        name="email"
                        required
                        className="w-full px-4 py-2 mt-2 border  focus:outline-none focus:ring-1 focus:ring-gray-600"
                      />

                    </div>
                    <div className="mt-4">

                      <input
                        onChange={(e) => handleChange(e)}
                        value={data.password}
                        name="password"
                        type="Password"
                        required
                        placeholder="Password"
                        className="w-full px-4 py-2 mt-2 border  focus:outline-none focus:ring-1 focus:ring-gray-600"
                      />

                    </div>
                    <div className="flex">

                      <button type="submit"
                        // onClick={handleRegister}
                        className="w-full px-6 py-2 mt-4  text-white bg-[black] rounded-md font-poppins  hover:bg-gray-800"
                      >
                        Create Account
                      </button>

                    </div>
                    <div className="mt-6 flex  font-poppins text-grey-dark">
                      Already have an account?
                      <Link to='/login'>
                        <div
                          className="text-[#33BBCF] ml-2 hover:underline"
                        >
                          Log In
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        ) : (
          <div className="flex font-poppins items-center justify-center  mt-0 w-full">
            <div className="px-8 py-6 mx-4 mt-4 text-left  md:w-1/3 lg:w-1/3 sm:w-1/3">
              <div
                className="flex items-center justify-center mb-4 bg-black text-white rounded-full h-10 w-10 m-auto text-2xl font-bold"
              > <FiLock /></div>
              <h3 className="text-2xl font-bold text-gray-800 text-center">Log In</h3>
              <div>
                <div className="mt-4">

                  <div className="mt-4">

                    <input
                      type="email"
                      placeholder="Email"
                      onChange={(e) => handleChange(e)}
                      value={data.email}
                      name="email"
                      required
                      className="w-full px-4 py-2 mt-2 border  focus:outline-none focus:ring-1 focus:ring-gray-600"
                    />

                  </div>
                  <div className="mt-4">

                    <input
                      onChange={(e) => handleChange(e)}
                      value={data.password}
                      name="password"
                      type="Password"
                      required
                      placeholder="Password"
                      className="w-full px-4 py-2 mt-2 border  focus:outline-none focus:ring-1 focus:ring-gray-600"
                    />

                  </div>

                  <div className="flex">

                    <button
                      onClick={handleSignIn}
                      className="w-full px-6 py-2 mt-4 text-white bg-[black] rounded-xl hover:bg-gray-800 "
                    >
                      Log In
                    </button>

                  </div>
                  <div className="mt-6 text-grey-dark flex">
                    Don't have an account?
                    <Link to="/signup">
                      <div
                        className="text-[#14b8a6] ml-2 hover:underline"
                      >
                        Sign Up
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </form>



    </div>

  );
};

export default Auth;








{/* 
                    <div className="mt-4">
                      <label className="block text-lg text-[#0f766e]">
                        State
                        <label>
                          <input
                            onChange={(e) => handleChange(e)}
                            value={data.state}
                            name="state"
                            type="text"
                            required
                            placeholder="State"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                          />
                        </label>
                      </label>
                    </div>
                    <div className="mt-4">
                      <label className="block text-lg text-[#0f766e]">
                        City
                        <label>
                          <input
                            onChange={(e) => handleChange(e)}
                            value={data.city}
                            name="city"
                            type="text"
                            required
                            placeholder="City"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                          />
                        </label>
                      </label>
                    </div> */}