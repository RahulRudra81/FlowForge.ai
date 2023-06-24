import React, {createContext, useState} from 'react'
import {auth, db} from './firebase'
import {addDoc, collection} from 'firebase/firestore'
export const descriptionContext = createContext(null)


const Context = ({children}) => {
    const [userDescription, setUserDescription] = useState(" ");

    const addData=async()=>{
        const docRef=await addDoc(collection(db,'users'),{
            description:userDescription
        })
        console.log('Document written with ID: ', docRef.id);
    }

    
  return (
    <descriptionContext.Provider value={{userDescription,setUserDescription ,addData}}>
      {children}
    </descriptionContext.Provider>
  )
}

export default Context