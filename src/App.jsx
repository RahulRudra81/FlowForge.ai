import React, { useState, useEffect } from 'react';
import { Login, SignUp, Home,Goggle,Landing,DnDFlow,Billing,Getstarted,Help,Mainpage,Template,Sidebar,Profile} from './pages';
import {Routes, Route} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './App.css'
const App = () => {

 const [token, setToken] = useState(false)

  if(token){
    sessionStorage.setItem('token',JSON.stringify(token))
  }

  useEffect(() => {
    if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
    
  }, [])
  
  const navigate=useNavigate()

  if(!token){
    navigate('/landing');
  }
 
  return (
    <div className=''>
      <Routes>
        <Route path={'/signup'} element={ <SignUp />} />
        <Route path={'/dnd'} element={ <DnDFlow />} />
        <Route path={'/login'} element={ <Login setToken={setToken}/>} />
        <Route path={'/'} element={ <Landing />} />
        <Route path="/billing" element={<Billing/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/getstarted" element={<Getstarted/>}/>
        <Route path="/template" element={<Template/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/mainpage' element={<Mainpage/>}/>
        {token?<Route path={'/home'} element={ <Home token={token} />} />:""}
        {/* <Route path='/home' element={<Home token={token} /> }/> */}
      </Routes>
    </div>
  )
}

export default App