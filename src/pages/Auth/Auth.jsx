import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { FiLock } from 'react-icons/fi'
import { IoArrowBackCircle } from "react-icons/io5";
import axios from "axios"
import GoogleButton from 'react-google-button'


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
  //google login
  const loginwithgoogle = ()=>{
    window.open("http://localhost:8000/google/callback","_self")
  }
  //github login
  const loginwithgithub = ()=>{
    window.open("http://localhost:8000/github/callback","_self")
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

    <div className='font-poppins min-h-screen bg-[#212121]'>
      <Link to='/'>
        <div className='text-3xl ml-3 p-5  text-orange-800' >
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
            <div className="flex font-poppins items-center justify-center  mt-0 w-full ">
              <div className="px-8 py-6 mx-4 mt-4 text-left  md:w-1/3 lg:w-1/3 sm:w-1/3">
                <div
                  className="flex items-center justify-center mb-4 bg-orange-800 text-white rounded-full h-10 w-10 m-auto text-2xl font-bold"
                > <FiLock /></div>
                <h3 className="text-2xl font-bold text-center text-orange-800">Sign Up</h3>
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
                        className="w-full px-4 py-2 mt-2 border  focus:outline-none focus:ring-1 focus:ring-gray-600 rounded-md"
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
                        className="w-full px-4 py-2 mt-2 border  focus:outline-none focus:ring-1 focus:ring-gray-600 rounded-md"
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
                        className="w-full px-4 py-2 mt-2 border  focus:outline-none focus:ring-1 focus:ring-gray-600 rounded-md"
                      />

                    </div>
                    <div className="flex">

                      <button type="submit"
                        // onClick={handleRegister}
                        className="w-full px-6 py-2 mt-4  text-white  bg-orange-800 rounded-md font-poppins  hover:bg-gray-800 hover:text-orange-800" 
                      >
                        Create Account
                      </button>

                    </div>
                    <div className="mt-6 flex  font-poppins text-white">
                      Already have an account?
                      <Link to='/login'>
                        <div
                          className=" text-orange-800 ml-2 hover:underline"
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
                className="flex items-center justify-center mb-4  bg-orange-800 text-white rounded-full h-10 w-10 m-auto text-2xl font-bold"
              > <FiLock /></div>
              <h3 className="text-2xl font-bold  text-orange-800 text-center">Log In</h3>
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
                      className="w-full px-4 py-2 mt-2 border  focus:outline-none focus:ring-1 focus:ring-gray-600 rounded-md"
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
                      className="w-full px-4 py-2 mt-2 border  focus:outline-none focus:ring-1 focus:ring-gray-600 rounded-md"
                    />

                  </div>

                  <div className="flex flex-col">

                    <button
                      onClick={handleSignIn}
                      className="w-full px-6 py-2 mt-4 text-white  bg-orange-800 rounded-md hover:bg-gray-800 hover:text-orange-800 "
                    >
                      Log In
                    </button>
                    

                  </div>
                  <div className="flex flex-col  ">
                  <button onClick={loginwithgoogle} type="button" className="py-2 px-4  mt-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-md ">
                  <svg width="20" height="20" fill="currentColor" class="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                      <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z">
                      </path>
                  </svg>
                     Sign in with Google
                  </button>
                  <button onClick={loginwithgithub} type="button" className="py-2 px-4 mt-4 flex justify-center items-center  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-md ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="mr-2" viewBox="0 0 1792 1792">
                        <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                        </path>
                    </svg>
                    Sign in with GitHub
                  </button>
                  </div>
                  <div className="mt-6 text-white flex">
                    Don't have an account?
                    <Link to="/signup">
                      <div
                        className=" text-orange-800 ml-2 hover:underline"
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