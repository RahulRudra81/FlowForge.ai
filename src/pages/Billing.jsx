import React from 'react'
import {useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Rightmenubar from '../components/Rightmenubar'
import { auth } from '../firebase'
import Footer from '../components/Footer'

const Billing = () => {
  const [session, setSession] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if(!auth.currentUser){
      navigate('/')
    }

  }, [])
  return (
    <div className=''>
    <Navbar/>
    <div className="  flex  items-center justify-center">
      <div className="bg-white p-8 mb-20">
        <h1 className="text-3xl text-center font-semibold mb-6">Billing</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 rounded-lg p-6 flex flex-col justify-between">
            <h2 className="text-lg font-semibold mb-4">Basic Plan</h2>
            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="text-white justify-center h-8 w-fit bg-black p-5 text-md rounded-full flex  items-center  shadow-gray-400 shadow-md hover:shadow-lg hover:shadow-gray-400 hover:bg-gray-800">Select</button>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 flex flex-col justify-between">
            <h2 className="text-lg font-semibold mb-4">Pro Plan</h2>
            <p className="text-gray-700 mb-4">Lorem ipsum lorem20 dolor sit amet, consectetur adipiscing elit.</p>
            <button className="text-white justify-center h-8 w-fit bg-black p-5 text-md rounded-full flex  items-center  shadow-gray-400 shadow-md hover:shadow-lg hover:shadow-gray-400 hover:bg-gray-800">Select</button>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 flex flex-col justify-between">
            <h2 className="text-lg font-semibold mb-4">Enterprise Plan</h2>
            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="text-white justify-center h-8 w-fit bg-black p-5 text-md rounded-full flex  items-center  shadow-gray-400 shadow-md hover:shadow-lg hover:shadow-gray-400 hover:bg-gray-800">Select</button>
          </div>
        </div>
      </div>
    </div>
    <Footer className='mt-20'/>
    </div>
  )
}

export default Billing
