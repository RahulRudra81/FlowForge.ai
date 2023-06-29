import React,{useState} from 'react'
import { db } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'

const TemplateCard = () => {

  const addTemplate = async() => {
    try{
      const docRef = await addDoc(collection(db, 'templatesUsed'), {
        name: `Template Name ${name + 1}`,
        
    })
    }catch{
      ((error) => {
        alert(error.message)
    })  
  }}

  const handleEdit = async () => {
    addTemplate()
  }
  return (
    <div className='flex flex-col lg:w-fit rounded-2xl lg:m-5 m-2 p-2 lg:w-2/6 items center border-solid border-2 border-gray-600 shadow-md hover:shadow-gray-900 font-poppins '>
      <div className="flex items-center lg:p-4 justify-between">
      <img src="https://avatars.githubusercontent.com/u/75154257?v=4" alt="" className='w-8 h-8 rounded-full  mr-3 '/>
        <h1 className='text-gray-500 lg:text-lg text-md lg:m-4 flex justify-between items-center '>Template Name</h1>

      </div>
        <div className="flex flex-col p-2 ">
        <h1 className='text-gray-500 lg:text-lg text-sm  lg:m-4 flex justify-between items-center '>Template Description</h1>
        <div className="flex justify-end items-center">
        <button className="text-white justify-center h-8 w-[80px] bg-black p-5 text-sm rounded-full flex  items-center border-solid border-2 border-black  shadow-gray-400 shadow-md hover:shadow-md hover:shadow-gray-400 hover:bg-gray-800 " onClick={handleEdit}>Edit</button>
        <button className="text-black justify-center h-8 w-[80px]  p-5 text-sm rounded-full flex  items-center  shadow-gray-400  hover:shadow-md hover:shadow-black hover:bg-black hover:text-white border-solid border-2 border-black ml-5">Save</button>
        </div>
        {/* <button className="bg-gray-300 text-[black] hover:bg-gray-400 hover:text-[white] hover:underline decoration-[#db005b] p-3 mr-3 rounded-md flex justify-between items-center ">Delete</button> */}
        </div>
    </div>
  )
}

export default TemplateCard
