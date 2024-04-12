import React, { useState, useEffect, useContext } from 'react'
import { BsInputCursorText, BsFillBookmarkFill } from "react-icons/bs";
import { VscOutput } from "react-icons/vsc";
import { FaRobot } from "react-icons/fa";
import { TfiHandOpen } from "react-icons/tfi";
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom/dist';
import { descriptionContext } from '../Context'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default (props) => {
    //node name and node id
    const [objects, setObjects] = useState();

    //edges source and target

    const [allEdges,setAllEdges]= useState();

    //node id and description

    

    
    // console.log(userDescription)

    //const descriptionArray = Object.entries(userDescription)
    // console.log(descriptionArray)
    
    
    //node id and node name mappping = objects
    

    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType)
        event.dataTransfer.effectAllowed = 'move'
    }

    
    const coordinateFlowObject=JSON.parse(localStorage.getItem("reactFlowState"))

    
    const handleDataBackend=async(idMapObject,edgeConnections)=>{
        if(coordinateFlowObject==null){
            toast("Please save the flow before deploying", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            return
        }
        else{
        try {
            
            const req = await fetch('https://bit-hackathon-1.onrender.com/api/v1/aiModel/deployModel', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                },
                body: JSON.stringify({
                    dropArray: idMapObject,
                    mapArray: edgeConnections,
                    // inputText: "Explain history of the taj mahal",
                    modelDescription:localStorage.getItem("projectName"),
                    coordinateObject:coordinateFlowObject
                
                })
            });
    
            const response = await req.json(); 
            console.log(response); 
            alert("deployed")
            localStorage.removeItem("reactFlowState")
            navigate('/home')
        } catch (error) {
            console.error('Error:', error);
        }
       }
    }

    const isOutputAlertCompulsory = (data) => {
        return data.some(item => item.value === 'output');
      };
    const isInputAlertCompulsory = (data) => {
        return data.some(item => item.value === 'input');
      };
      const navigate=useNavigate()
    const handleHome=()=>{
        localStorage.removeItem("reactFlowState")
        navigate('/home')
    }
    const fetchId = async () => {
        const findObjects =await props.node.map(item => [item.id, item.type,item.data.dataOfNode])
        const idMapObject=findObjects.map(([key, value,data]) => ({ key, value,data }));
        const outputCompulsory = isOutputAlertCompulsory(idMapObject);
        const inputCompulsory=isInputAlertCompulsory(idMapObject)

        if(outputCompulsory === false || inputCompulsory===false){
            alert('Both input and output are compulsory field')
            return;
        }
        
        console.log(idMapObject)
        const findEdges = await props.edges.map(item => [item.source,item.target])
        const edgeConnections=findEdges.map(([key, value]) => ({ key, value }));
        console.log(edgeConnections)
        console.log(localStorage.getItem('projectName'))
         setObjects(findObjects);
         setAllEdges(findEdges);
         handleDataBackend(idMapObject,edgeConnections)
        // localStorage.removeItem("reactFlowState")
         
    }
     
    

    const checkConnectivity=async()=>{
        // console.log(props.checkConnectivity())
        if(!props.checkConnectivity()){
            // console.log("1st");
            return ;
            
        }
        else{
            // console.log("2nd");
            fetchId();
            return ;
        }
    }
    return (

        <div className='shadow-xl p-2'>
            {window.location.pathname=='/'?""
            :
            <button onClick={handleHome}><div className="flex-grow  hover:text-blue-700  font-myfont  border-b-2 mb-5 border-solid border-zinc-300 text-gray-500 cursor-pointer">Return to dashboard</div></button>
            } 

            <h1 className=' text-xl font-semibold text-gray-500 m-5'>{localStorage.getItem("projectName")}</h1>
            <div className='flex items-center justify-evenly cursor-pointer border-solid  border-[#dcdcdc] border-2 rounded p-2'>
                <div><TfiHandOpen /></div>
                <div className='ml-4 text-black '>
                    Drag to choose
                </div>
            </div>
            <div className="flex-grow mt-5  border-t border-zinc-300"></div>
            <div
                className='p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-orange-700'
                onDragStart={(event) => onDragStart(event, 'input')}
                draggable
            >
                <div className=''>
                    <BsInputCursorText />
                </div>
                <div className='ml-4 text-black'>
                    Input
                </div>
            </div>
            <div className="flex-grow mt-5  border-t border-zinc-300"></div>
            {/* <div
                className='p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600'
                onDragStart={(event) => onDragStart(event, 'default')}
                draggable
            >
                <div>
                    <BsFillBookmarkFill />
                </div>
                <div className='ml-4 text-black'>
                    default
                </div>
            </div> */}
            {/* <div className="flex-grow mt-5  border-t border-zinc-300"></div> */}
            <div
                className='p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-orange-700'
                onDragStart={(event) => onDragStart(event, 'output')}
                draggable
            >
                <div>
                    <VscOutput />
                </div>
                <div className='ml-4 text-black'>
                    output
                </div>
            </div>
            <div className="flex-grow mt-5  border-t border-zinc-300"></div>
            <div
                className='p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-orange-700'
                onDragStart={(event) => onDragStart(event, 'gptNode')}
                draggable
            >
                <div>
                    <FaRobot />
                </div>
                <div className='ml-4 text-black'>
                    gptNode
                </div>
            </div>
            <div className="flex-grow mt-5  border-t border-zinc-300"></div>
            <div
                className='p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-orange-700'
                onDragStart={(event) => onDragStart(event, 'TextToAudio')}
                draggable
            >
                <div>
                    <FaRobot />
                </div>
                <div className='ml-4 text-black'>
                    Text-to-Audio
                </div>
            </div>
            <div className="flex-grow mt-5  border-t border-zinc-300"></div>
            {/* <div
                className='p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600'
                onDragStart={(event) => onDragStart(event, 'VoiceCloning')}
                draggable
            >
                <div>
                    <FaRobot />
                </div>
                <div className='ml-4 text-black'>
                    Voice Cloning
                </div>
            </div> */}

           {window.location.pathname=='/'?"":<button
                className="w-full py-2 my-4 text-black bg-orange-400 hover:bg-orange-700 hover:text-[white]  p-3  rounded-md flex justify-between items-center  "
                onClick={checkConnectivity}
            >
                Deploy
            </button>}
        </div>
    )
}
