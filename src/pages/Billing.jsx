import React from 'react'
import {useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
    <div className='w-3/5'>
      Billing
    </div>
  )
}

export default Billing
