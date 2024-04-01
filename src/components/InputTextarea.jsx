import React, { useState, useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { auth, db } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'
import { doc } from 'firebase/firestore'
import { descriptionContext } from '../Context'
import { input } from '@material-tailwind/react'


export default (props) => {


    const { userInput, setUserInput } = useContext(descriptionContext)

    // console.log(userDescription)

    // console.log(props.status)
    // const toggleClose = () => {
    //     this.props.status(false)
    // };
    // console.log(props.status)
    const [inputText, setInputText] = useState('')

    const handleDescription = (e) => {
        setInputText(e.target.value)
    }
    // const [userDescription, setUserDescription] = useState(" ");

    const handleFileSubmit = (e) => {
        e.preventDefault()
        setUserInput({ ...userInput, [props.id]: inputText });
        // console.log(userInput)
    }



    return (
        <>

            <div
                className="rounded-2xl shadow-2xl cursor-pointer"

            >
                <span className="" onClick={props.handleChane}>
                    <AiOutlineClose className="m-5" />
                </span>
                <h1 className=' text-xl font-semibold text-gray-500 m-5'>Give Input Description</h1>
                <form form onSubmit={handleFileSubmit}>
                    <div className='p-2 border-solid border-[#dcdcdc] border-2 m-2 rounded-2xl '>

                        <div class="max-w-xs w-[200px] rounded overflow-hidden">
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Input</div>
                                <div class="flex-grow mt-5 mb-5 border-t-2 border-solid border-zinc-300"></div>
                                <input type="text" placeholder="Enter Input" class="w-full outline-none border-2 border-solid border-zinc-300 p-2 rounded-md mb-2" value={inputText} onChange={handleDescription} />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center '>

                        <button type='submit'
                            className=' text-black bg-blue-gradient hover:bg-[#c20051] hover:text-[white] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center m-5  '
                            onClick={props.postDescription}
                        >Save </button>
                    </div>
                </form>

            </div>
        </>
    )
}


