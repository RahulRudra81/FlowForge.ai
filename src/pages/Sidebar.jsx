import React from 'react'
import { BsInputCursorText, BsFillBookmarkFill } from "react-icons/bs";
import { VscOutput } from "react-icons/vsc";
import { FaRobot } from "react-icons/fa";
import { TfiHandOpen } from "react-icons/tfi";
import { Link } from 'react-router-dom/dist';

export default () => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType)
        event.dataTransfer.effectAllowed = 'move'
    }

    return (

        <div className='shadow-xl p-2'>
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
            <Link to='/home'><div className="flex-grow mt-20 hover:text-blue-700  font-myfont  border-t-2 border-solid border-zinc-300 text-gray-500 cursor-pointer">Return to dashboard</div></Link>
        </div>
    )
}
