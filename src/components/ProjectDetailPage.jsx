import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ModelFlowPreview from './ModelFlowPreview';
import { AiFillLeftCircle } from 'react-icons/ai';
import {MdOutlineContentCopy} from 'react-icons/md'

const ProjectDetailPage = () => {
    const [model, setModel] = useState(null);
    const [modelCoordinates, setModelCoordinates] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchModel = async () => {
            try {
                const response = await fetch(`https://bit-hackathon-1.onrender.com/api/v1/aiModel/getModel?modelId=${id}`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch project');
                }
                const dataFromBackend = await response.json();
                setModel(dataFromBackend.data);
                
            } catch (error) {
                console.log(error);
            }
        };

        if (id) {
            fetchModel();
        }
    }, [id]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`https://bit-hackathon-1.onrender.com/api/v1/aiModel/getModel?modelId=${id}`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch project');
                }
                const dataFromBackend = await response.json();
                setModel(dataFromBackend.data);
                
            } catch (error) {
                console.log(error);
            }
        };

        if (id) {
            fetchUser();
        }
    }, [id]);
   
// console.log(model)
    useEffect(() => {
        if (model && model._id) {
            const fetchModelCoordinates = async () => {
                try {
                    const response = await fetch(`https://bit-hackathon-1.onrender.com/api/v1/aiModel/getModelAxes?modelId=${model._id}`, {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    });
                    if (!response.ok) {
                        throw new Error('Failed to fetch model coordinates');
                    }
                    const dataFromBackend = await response.json();
                    
                    setModelCoordinates(dataFromBackend.data.coordinateObject);
                    
                } catch (error) {
                    console.log(error);
                }
            };
            fetchModelCoordinates();
        }
    }, [model]);
    console.log(model)

    const handleCopy=()=>{
        navigator.clipboard.writeText(model.modelUrl)
        alert("Copied to clipboard")
    }

    return (
        <div className="bg-[#171717] h-screen">
            <div className="flex flex-col bg">
                <button onClick={() => window.history.back()} className="  w-20 mt-4 text-white font-bold py-2 px-4 rounded"><AiFillLeftCircle className='text-4xl'/>
                </button>
                <div className="p-8">
                    {model && modelCoordinates ? (
                        <div className='flex flex-col gap-10'>  
                            <div className="uppercase tracking-wide text-lg text-orange-800 font-semibold">Model Name: {model.modelDescription}</div>
                            <p className="mt-2 text-gray-300">Your API</p>
                            <div onClick={handleCopy} className='border-orange-500 border-2 p-4 flex rounded-lg overflow-hidden justify-between items-start'>
                            <span  className='  text-orange-800 '>{model.modelUrl}</span>
                            <MdOutlineContentCopy className='text-2xl text-orange-800 ml-2 cursor-pointer'/>
                            </div>
                            {modelCoordinates ? (
                                <ModelFlowPreview flow={modelCoordinates} />
                            ) : (
                                <p>No coordinates available</p>
                            )}
                        </div>
                    ) : (
                        <p className='text-3xl text-orange-800'>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
    
};

export default ProjectDetailPage;
