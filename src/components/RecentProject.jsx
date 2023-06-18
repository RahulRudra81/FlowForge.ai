import React from 'react'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'
const RecentProject = () => {
    
    const getProject = async () => {
        const docRef = doc(db, 'projects', '1')
        const docSnap = await getDoc(docRef)
        if(docSnap.exists()){
            console.log(docSnap.data());
        }else{
            console.log('No such document');
        }
    }
    getProject()
  return (
    <div>
      <div className="flex justify-between items-center border-2 border-solid border-gray rounded-lg p-5 shadow-md hover:shadow-gray-700 m-3 cursor-pointer">
            <h1 className='lg:text-lg text-sm font-myfont  text-gray-600'>Project Name</h1>
            <h1 className='lg:text-lg text-sm font-myfont  text-gray-600'>Date</h1>
      </div>
    </div>
  )
}

export default RecentProject
