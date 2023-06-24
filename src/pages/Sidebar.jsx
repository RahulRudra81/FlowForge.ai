import React, { useState, useEffect, useContext } from 'react'
import { BsInputCursorText, BsFillBookmarkFill } from "react-icons/bs";
import { VscOutput } from "react-icons/vsc";
import { FaRobot } from "react-icons/fa";
import { TfiHandOpen } from "react-icons/tfi";
import { Link } from 'react-router-dom/dist';
import { descriptionContext } from '../Context'
import { auth, db } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'


export default (props) => {
    //node name and node id
    const [objects, setObjects] = useState();

    //edges source and target

    const [allEdges,setAllEdges]= useState();

    //node id and description

    const { userDescription} = useContext(descriptionContext)

    
    // console.log(userDescription)

    const descriptionArray = Object.entries(userDescription)
    // console.log(descriptionArray)
    
    
    //node id and node name mappping = objects
    

    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType)
        event.dataTransfer.effectAllowed = 'move'
    }
    
    
    const fetchId = async () => {
        const findObjects =await props.node.map(item => [item.id, item.type])
        const idMapObject=findObjects.map(([key, value]) => ({ key, value }));
        console.log(idMapObject)
        const findEdges = await props.edges.map(item => [item.source,item.target])
        const edgeConnections=findEdges.map(([key, value]) => ({ key, value }));
        console.log(edgeConnections)
        console.log(userDescription)
         setObjects(findObjects);
        setAllEdges(findEdges);

        const docRef=await addDoc(collection(db,'dataPipeline'),{
            Userid:auth.currentUser.uid,
             idAndNodeMapping: idMapObject,
            edgesConnections: edgeConnections,
            description:userDescription
        })
        alert('Document written with ID: ', docRef.Userid);

        //addDataPipeline()
    }

    // const idMap=props.node.map(item => [item.id, item.type])

    // console.log(idMap)

    // const arrayObjects = idMap.map(([key, value]) => ({ key, value }));

    // console.log(arrayObjects)

   

   
    
    // const addDataPipeline=async()=>{
    //     const docRef=await addDoc(collection(db,'dataPipeline'),{
    //         Userid:auth.currentUser.uid,
    //          idAndNodeMapping: findObjects.map(item => [item[0], item[1]]),
    //         // edgesConnections:allEdges || null,
    //         //idAndNodeMapping:props.node.map(item => [item.id, item.type]),
    //         description:userDescription
    //     })
    //     alert('Document written with ID: ', docRef.Userid);
    // }

      

    useEffect(() => {
        // console.log(objects)
        // console.log(allEdges)
        // console.log(userDescription)
        // const object=Object.assign({}, objects);
        // const allEdge=Object.assign({},allEdges)

        

       // addDataPipeline();
         
    }, [objects])



    return (

        <div className='shadow-xl p-2'>
            <Link to='/home'><div className="flex-grow  hover:text-blue-700  font-myfont  border-b-2 mb-5 border-solid border-zinc-300 text-gray-500 cursor-pointer">Return to dashboard</div></Link>
            <div className='flex items-center justify-evenly cursor-pointer border-solid  border-[#dcdcdc] border-2 rounded p-2'>
                <div><TfiHandOpen /></div>
                <div className='ml-4 text-black '>
                    Drag to choose
                </div>
            </div>
            <div className="flex-grow mt-5  border-t border-zinc-300"></div>
            <div
                className='p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600'
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
            <div
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
            </div>
            <div className="flex-grow mt-5  border-t border-zinc-300"></div>
            <div
                className='p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600'
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
                className='p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600'
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
                className='p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600'
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
            <div
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
            </div>

            <button
                className="w-full py-2 my-4 text-black bg-blue-gradient hover:bg-[#c20051] hover:text-[white]  p-3  rounded-md flex justify-between items-center  "
                onClick={fetchId}
            >
                Deploy
            </button>
        </div>
    )
}
