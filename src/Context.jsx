import React, {createContext, useState} from 'react'
import {auth, db} from './firebase'
import {addDoc, collection} from 'firebase/firestore'
export const descriptionContext = createContext(null)


const Context = ({children}) => {
    const [userDescription, setUserDescription] = useState(" ");
    const [userInput,setUserInput]=useState("")
    const [speechDropDown,setSpeechDropDown]=useState("")

    //console.log(speechDropDown)
    // const addData=async()=>{
    //     const docRef=await addDoc(collection(db,'users'),{
    //         description:userDescription
    //     })
    //     console.log('Document written with ID: ', docRef.id);
    // }

    
  return (
    <descriptionContext.Provider value={{userDescription,setUserDescription,speechDropDown,setSpeechDropDown,userInput,setUserInput}}>
      {children}
    </descriptionContext.Provider>
  )
}

export default Context