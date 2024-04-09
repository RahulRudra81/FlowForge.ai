import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ModelFlowPreview from './ModelFlowPreview';

const ProjectDetailPage = () => {
    const [model, setModel] = useState(null);
    const [modelCoordinates, setModelCoordinates] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchModel = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/v1/aiModel/getModel?modelId=${id}`, {
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
        if (model && model._id) {
            const fetchModelCoordinates = async () => {
                try {
                    const response = await fetch(`http://localhost:8000/api/v1/aiModel/getModelAxes?modelId=${model._id}`, {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    });
                    if (!response.ok) {
                        throw new Error('Failed to fetch model coordinates');
                    }
                    const dataFromBackend = await response.json();
                    
                    setModelCoordinates(dataFromBackend.data);
                } catch (error) {
                    console.log(error);
                }
            };
            fetchModelCoordinates();
        }
    }, [model]);

    console.log(modelCoordinates)

    return (
        <div className="">
            <div className="md:flex">
                <button onClick={() => window.history.back()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back</button>
                <div className="p-8">
                    {model && modelCoordinates ? (
                        <>
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{model.modelDescription}</div>
                            <p className="mt-2 text-gray-500">Your API:- {model.modelUrl}</p>
                            {modelCoordinates.coordinateObject ? (
                                <ModelFlowPreview flow={modelCoordinates} />
                            ) : (
                                <p>No coordinates available</p>
                            )}
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
    
};

export default ProjectDetailPage;
