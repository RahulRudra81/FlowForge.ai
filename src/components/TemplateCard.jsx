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
    <div className='flex flex-col lg:w-fit rounded-lg lg:m-5 m-2 p-2 lg:w-2/6 items center border-solid border-2 border-gray-400 shadow-md hover:shadow-gray-900 '>
      <div className="flex items-center lg:p-4 justify-between">
      <img src="https://avatars.githubusercontent.com/u/75154257?v=4" alt="" className='w-8 h-8 rounded-full  mr-3 '/>
        <h1 className='text-gray-500 lg:text-lg text-md lg:m-4 flex justify-between items-center '>Template Name</h1>

      </div>
        <div className="flex flex-col p-2 ">
        <h1 className='text-gray-500 lg:text-lg text-sm  lg:m-4 flex justify-between items-center '>Template Description</h1>
        <div className="flex justify-end">
        <button className="bg-[#db005b] text-white hover:bg-[#fc0069]  text-sm lg:p-3 p-2 w-fit m-3 rounded-md flex justify-center items-center " onClick={handleEdit}>Edit</button>
        <button className="bg-gray-300 text-[black] hover:bg-gray-400 hover:text-[white]  lg:p-3 p-2 w-fit m-3 rounded-md flex justify-center items-center text-sm ">Save</button>
        </div>
        {/* <button className="bg-gray-300 text-[black] hover:bg-gray-400 hover:text-[white] hover:underline decoration-[#db005b] p-3 mr-3 rounded-md flex justify-between items-center ">Delete</button> */}
        </div>
    </div>
  )
}

export default TemplateCard
