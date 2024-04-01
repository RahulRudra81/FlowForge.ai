import React, {createContext, useState} from 'react'
import {auth, db} from './firebase'
import {addDoc, collection} from 'firebase/firestore'
export const descriptionContext = createContext(null)


const Context = ({children}) => {
    const [userDescription, setUserDescription] = useState("Act as an agent");
    const [userInput,setUserInput]=useState("")
    const [speechDropDown,setSpeechDropDown]=useState("alloy")
    const [projectKaNaam, setProjectKaNaam] = useState('Untitled Project')

    //console.log(speechDropDown)
    // const addData=async()=>{
    //     const docRef=await addDoc(collection(db,'users'),{
    //         description:userDescription
    //     })
    //     console.log('Document written with ID: ', docRef.id);
    // }

    
  return (
    <descriptionContext.Provider value={{userDescription,setUserDescription,speechDropDown,setSpeechDropDown,userInput,setUserInput, projectKaNaam, setProjectKaNaam}}>
      {children}
    </descriptionContext.Provider>
  )
}

export default Context