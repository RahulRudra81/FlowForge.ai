import React, { useState, useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { auth, db } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'
import { doc } from 'firebase/firestore'
import { descriptionContext } from '../Context'

export default (props) => {


    const { userDescription, setUserDescription } = useContext(descriptionContext)



    // console.log(props.status)
    // const toggleClose = () => {
    //     this.props.status(false)
    // };
    // console.log(props.status)
    const [imageUpload, setImageUpload] = useState(null)
    const [description, setDescription] = useState('Act as an agent')
    // const [base64, setBase64] = useState(null)
    // const [form,setForm]=useState({
    //     name:'',
    //     prompt:'',
    //     photo:'',
    // })
    // console.log(imageUpload)
    // const handleUpload = (e) => {
    //     const file = e.target.files[0]
    //     setImageUpload(file);

    //     // /Important/

    //     // if(file && file.type.substr(0,5)==='image'){
    //     //     const reader=new FileReader()
    //     //     reader.onloadend=()=>{
    //     //         setForm({...form,photo:reader.result})
    //     //     }
    //     //     reader.readAsDataURL(file)
    //     // }
    //     // else{
    //     //     alert('Please upload animage')
    //     // }
    // }


    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
    // const [userDescription, setUserDescription] = useState(" ");

    const handleFileSubmit = (e) => {
        e.preventDefault()
        setUserDescription({ ...userDescription, [props.id]: description });
        // console.log(description)
        // console.log(imageUpload)
        console.log(userDescription)
    }

    // const addToDatabase = async () => {
    //     const ref=collection(db,'user')
    //     const userRef=doc(ref,auth.currentUser.uid)
    //     const data= addDoc(collection(userRef,'projects'),{
    //         description:userDescription,
    //     })

    //     alert('Data added to database')

    // }


    return (
        <>

            {/* {isMenuOpen && ( */}

            <div
                className="rounded-2xl shadow-2xl cursor-pointer"

            >
                <span className="" onClick={props.handleChane}>
                    <AiOutlineClose className="m-5" />
                </span>
                <h1 className=' text-xl font-semibold text-gray-500 m-5'>Give Data and Description</h1>
                <form form onSubmit={handleFileSubmit}>
                    <div className='p-2 border-solid border-[#dcdcdc] border-2 m-2 rounded-2xl '>

                        <div class="max-w-xs w-[200px] rounded overflow-hidden">
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Description</div>
                                <div class="flex-grow mt-5 mb-5 border-t-2 border-solid border-zinc-300"></div>
                                <input type="text" placeholder="Briefly describe" class="w-full outline-none border-2 border-solid border-zinc-300 p-2 rounded-md mb-2" value={description} onChange={handleDescription} />
                            </div>
                        </div>
                    </div>
                    {/* <div className=' p-2 border-solid border-[#dcdcdc] border-2 m-2 rounded-2xl '>
                            <div class="max-w-xs w-[200px] rounded overflow-hidden">
                                <div class="px-6 py-4">
                                    <div class="font-bold text-xl mb-2">Data</div>
                                    <div className="flex-grow mt-5 mb-5  border-t-2 border-solid border-zinc-300"></div>

                                    <label htmlFor="data" className="cursor-pointer">
                                        <div className='mt-3 text-white bg-[#6469ff] hover:text-[#6469ff] hover:bg-blue-200 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'>N/A</div>
                                         <input type="file" name="data" id="data" className="sr-only" onChange={handleUpload} /> 
                                    </label>

                                </div>
                            </div>
                        </div> */}
                    <div className='flex justify-center items-center '>

                        <button type='submit'
                            className=' text-black bg-blue-gradient hover:bg-[#c20051] hover:text-[white] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center m-5  '
                            onClick={props.postDescription}
                        >Save description</button>
                    </div>
                </form>

            </div>
            {/* )} */}
        </>
    )
}