import React from 'react'
import {useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Rightmenubar from '../components/Rightmenubar'
import Sidebar from '../components/Sidebar'
import { auth } from '../firebase'

const Billing = () => {
  const [session, setSession] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if(!auth.currentUser){
      navigate('/')
    }

  }, [])
  return (
    <div>
    <Navbar/>
    <div className="flex flex-row">
    <Sidebar/>
    <div className=" mx-auto lg:px-4 px-2 py-4 lg:py-8 w-full">
      <h1>Billing</h1>
    </div>
    <Rightmenubar/>
    </div>
    </div>
  )
}

export default Billing
