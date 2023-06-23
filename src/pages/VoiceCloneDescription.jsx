import React,{useState} from 'react'
import { AiOutlineClose } from 'react-icons/ai'

export default (props) => {

   
    const [audioUpload, setAudioUpload] = useState(null)
    const [description, setDescription] = useState('')
    // const [base64, setBase64] = useState(null)
    // const [form,setForm]=useState({
    //     name:'',
    //     prompt:'',
    //     photo:'',
    // })
    // console.log(imageUpload)
  const handleUpload = (e) => {
    const file=e.target.files[0]
    setAudioUpload(file);

    /*Important*/ 

    // if(file && file.type.substr(0,5)==='image'){
    //     const reader=new FileReader()
    //     reader.onloadend=()=>{
    //         setForm({...form,photo:reader.result})
    //     }
    //     reader.readAsDataURL(file)
    // }
    // else{
    //     alert('Please upload animage')
    // }
    }


    const handleFileSubmit = (e) => {
        e.preventDefault()
        console.log(audioUpload)
    }
    

    return (
        <div className='overflow-y-auto rounded-2xl shadow-xl flex flex-col justify-start items-center shadow-gray-200'>
            <span className="mt-5 w-full p-3" onClick={props.handleChane}>
                 <AiOutlineClose  />
            </span>
            <h1 className=' text-xl font-semibold text-gray-500 m-5'>Give Data </h1>
          <form form onSubmit={handleFileSubmit}>
            
            <div className=' p-2 border-solid border-[#dcdcdc] border-2 m-2 rounded-2xl '>
                <div class="max-w-xs w-[200px] rounded overflow-hidden">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Audio</div>
                        <div className="flex-grow mt-5 mb-5  border-t-2 border-solid border-zinc-300"></div>
                       
                       <label htmlFor="data" className="cursor-pointer">
                    <div className='mt-3 text-white bg-[#6469ff] hover:text-[#6469ff] hover:bg-blue-200 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'>Upload</div>
                    <input type="file"   accept="audio/mp3,audio/*;capture=microphone"  name="data" id="data" className="sr-only" onChange={handleUpload} />
                </label>
                       
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center '>

            <button  type='submit' 
            className='bg-[#6469ff] hover:bg-[#6469ff] hover:text-white text-white font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center m-5  '
            >Submit</button>
            </div>
            </form>
        </div>
    )
}
