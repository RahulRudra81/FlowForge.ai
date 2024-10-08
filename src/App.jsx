import React, { useState, useEffect } from 'react';
import {  Home,Landing,DnDFlow,Billing,Getstarted,Help,Mainpage,Template,Sidebar,Profile} from './pages';
import {Routes, Route} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Auth from './pages/Auth/Auth'
import './App.css'
import Header from './pages/Header';
import ProjectDetailPage from './components/ProjectDetailPage';
// import Footer2 from './pages/Footer2';
const App = () => {

 
  return (
    <div className=''>
      <Routes>
        {/* <Route path={'/signup'} element={ <SignUp />} /> */}
        {/* <Route path={'/login'} element={ <Login setToken={setToken}/>} /> */}
        <Route path='/signup' element={<Auth title="SignUp"/>}/>
        <Route path={'/dnd'} element={ <DnDFlow />} />
        {/* <Route path={'/'} element={ <Landing/>} /> */}
        <Route path={'/'} element={ <Header/>} />
        {/* <Route path={'/'} element={ <Footer2/>} /> */}
        <Route path='/login' element={<Auth title="SignIn"/>}/>
        <Route path="/billing" element={<Billing/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/getstarted" element={<Getstarted/>}/>
        <Route path="/template" element={<Template/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/mainpage' element={<Mainpage/>}/>
        <Route path={'/home'} element={ <Home  />} />
        <Route path={'/project/:id'} element={ <ProjectDetailPage  />} />
      </Routes>
    </div>
  )
}

export default App