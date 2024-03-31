import React, { useState, useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import  {descriptionContext}  from '../Context'
import { Select, Option } from "@material-tailwind/react";
export default (props) => {


    const {speechDropDown,setSpeechDropDown }=useContext(descriptionContext)
    const [voice, setVoice] = useState('Alloy')
    const handleFileSubmit = (e) => {
        e.preventDefault()
        setSpeechDropDown({ ...speechDropDown, [props.id]: voice });
        console.log(speechDropDown)
    }
    return (
        <>
                    <div className="rounded-2xl shadow-2xl cursor-pointer">
                        <span className="" onClick={props.handleChane}>
                            <AiOutlineClose className="m-5" />
                        </span>
                    <h1 className=' text-xl font-semibold text-gray-500 m-5'>Select Voice</h1>

                    <div className="w-72 p-5">
                        <Select
                            label="Select Version"
                            value={voice}
                            onChange={(val) => setVoice(val)}
                        >
                            <Option value="Alloy">Alloy</Option>
                            <Option value="Echo">Echo</Option>
                            <Option value="Fable">Fable</Option>
                            <Option value="Onyx">Onyx</Option>
                            <Option value="Nova">Nova</Option>
                            <Option value="Nova">Nova</Option>
                            <Option value="Shimmer">Shimmer</Option>
                        </Select>
                    </div>
                    <form form onSubmit={handleFileSubmit}>
                      
                        <div className='flex justify-center items-center '>

                            <button type='submit'
                                className=' text-black bg-blue-gradient hover:bg-[#c20051] hover:text-[white] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center m-5  '
                                onClick={props.postDescription}
                            >Save</button>
                        </div>
                    </form>

                </div>
        </>
    )
}