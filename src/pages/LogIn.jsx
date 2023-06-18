import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { supabase } from '../client';
import bg from '../assets/pink-bg.jpg'
import logo from '../assets/logo.png'
import ml from '../assets/mlbg.jpg'

const Login = ({setToken}) => {
  let navigate = useNavigate()

  const [formData,setFormData] = useState({
        email:'',password:''
  })

  // console.log(formData)

  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }

    })

  }

  async function handleSubmit(e){
    e.preventDefault()

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
          })
        if (error) throw error
        console.log(data)
        setToken(data)
        navigate('/home')
    //alert('Check your email for verification link')      
    } catch (error) {
      alert(error)
    }
  }




  return (
    <div className='bg-slate-100 w-full h-screen flex '>
      <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
        <div style={{backgroundImage: `url(${bg})`}} className='w-full bg-cover h-[550px] hidden md:block'>
          {/* <img className='w-full h-full' src={ml} alt="/" /> */}
        </div>
        <div className='p-4 flex flex-col justify-around bg-white' >
          <form onSubmit={handleSubmit}>
            <img className='w-32 mx-auto ' src={logo} alt="/" />
            <Link to='/'><h2 className='text-4xl font-bold text-center mb-20 text-[#DB005B]'>AVIDSYNTH</h2></Link>
            <div>
              <input 
                className='border p-2 mr-2' type="text"
                placeholder='Email'
                name='email'
                onChange={handleChange}
              />
              <input 
                className='border p-2 mr-2'
                placeholder='Password'
                name='password'
                type="password"
                onChange={handleChange}
              />
            </div>
            <button 
              type='submit' 
              className='w-full py-2 my-4 text-white bg-[#DB005B] hover:bg-[#c20051]'>
                Submit
            </button>
            <p >Don't have an account? <Link className="text-[#fd006a] font-bold hover:text-[#c20051] hover:underline " to='/signup'>Sign Up</Link> </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login