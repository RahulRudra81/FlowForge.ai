import React, { useState, useRef, useCallback, useEffect } from 'react'
import ReactFlow, {
    ReactFlowProvider,
    addEdge,
    useNodesState,
    updateEdge,
    useEdgesState,
    Controls,
    Background,
    
} from 'reactflow'
import 'reactflow/dist/style.css'
import Discription from '../components/Discription'
import create from 'zustand'
import VoiceCloneDescription from './VoiceCloneDescription'
import InputTextarea from '../components/InputTextarea'

import Sidebar from './Sidebar'

import './index.css'
import ColorSelectorNode from './CustomNodes/ColorSelectorNode'
import GptNode from './CustomNodes/GptNode'
import TextToAudio from './CustomNodes/TextToAudio'
import VoiceCloning from './CustomNodes/VoiceCloning'
import TextToSpeechDesc from '../components/TextToSpeechDesc'

// import { Description } from '@headlessui/react/dist/components/description/description'

export const useBearStore = create((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
}))


const nodeTypes = {
    selectorNode: ColorSelectorNode,
    gptNode: GptNode,
    TextToAudio: TextToAudio,
    VoiceCloning: VoiceCloning
}

const handleNodeDelete = (nodeId) => {
    const updatedElements = removeElements([{ id: nodeId }], elements);
    setElements(updatedElements);
};


const initialNodes = [
    
    // {
    //     id: '3',
    //     type: 'gptNode',
    //     data: { label: 'h2', tag: 'h2', children: [] },
    //     position: { x: 200, y: 5 },
    // },
    // {
    //     id: '5',
    //     type: 'VoiceCloning',
    //     data: { label: 'VoiceCloning', tag: 'VoiceCloning', children: [] },
    //     position: { x: 50, y: 2 },
    // }
    // {
    //     id: '4',
    //     type: 'TextToAudio',
    //     data: { label: 'textAudio', tag: 'textAudio', children: [] },
    //     position: { x: 50, y: 2 },
    // }
    
]


let id = 0
const getId = () => `${id++}`

const DnDFlow = () => {
    const reactFlowWrapper = useRef(null)
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
    const [edges, setEdges, onEdgesChange] = useEdgesState([])
    const [reactFlowInstance, setReactFlowInstance] = useState(null)

    const onConnect = useCallback(
        (params) =>
            setEdges((eds) =>
                addEdge(
                    {
                        ...params,
                        markerEnd: {
                            type: 'arrowclosed',
                            color: 'blueviolet',
                        },
                        animated: true,
                        type: 'smoothstep',
                        style: { stroke: 'blueviolet' },
                    },
                    eds
                )
            ),
        [setEdges]
    )

    //nodes
    

    useEffect(() => {
        console.log('edges' + JSON.stringify(edges))
        console.log('nodes' + JSON.stringify(nodes))
        
    })
    

    const onDragOver = useCallback((event) => {
        event.preventDefault()
        event.dataTransfer.dropEffect = 'move'
    }, [])

    const onDrop = useCallback(
        (event) => {
            event.preventDefault()

            const reactFlowBounds =
                reactFlowWrapper.current.getBoundingClientRect()
            const type = event.dataTransfer.getData('application/reactflow')

            // check if the dropped element is valid
            if (typeof type === 'undefined' || !type) {
                return
            }

            const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
            })
            const newNode = {
                id: getId(),
                type,
                position,
                data: { label: `${type}`, color: 'hello' },
                sourcePosition: 'right',
                targetPosition: 'left',
            }

            setNodes((nds) => nds.concat(newNode))
        },
        [reactFlowInstance]
    )

    const onEdgeUpdateStart = useCallback(() => {
        reactFlowWrapper.current = false
    }, [])

    const onEdgeUpdate = useCallback((oldEdge, newConnection) => {
        reactFlowWrapper.current = true
        setEdges((els) => updateEdge(oldEdge, newConnection, els))
    }, [])
    
    const onEdgeUpdateEnd = useCallback((_, edge) => {
        if (!reactFlowWrapper.current) {
            setEdges((eds) => eds.filter((e) => e.id !== edge.id))
        }
        
        reactFlowWrapper.current = true
    }, [])

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleClose = () => {
        setIsMenuOpen(true);
    };
    //right menu bar settings

    //closing right menu bar
    const handleChane = (e) => {
        setIsMenuOpen(e.target.value);
    };

    //mapping different right menu bar with different id
    
    

    const [activeBar, setActiveBar] = useState('');
    const [currentId,setCurrentId]=useState()
    const changeDiscription=(event,node)=>{
        
        if(node.type==='gptNode'){
            setActiveBar('gptDesc');
            
        }
        else if(node.type==='VoiceCloning'){
            setActiveBar('voiceCloneDesc');
        }
        else if(node.type==='TextToAudio'){
            setActiveBar('textAudioDesc');
        }
        // else if(node.type==="input"){
        //     setActiveBar('InputTextarea')
        // }
        else{
            setActiveBar("other")
        }
        setCurrentId(node.id);
    }

        //setting firebase
        // const [Description, setDescription] = useState(" ");
      
        // const postDescription = (event) => {
        //     value = event.target.value;
            
        //   setDescription({ ...Description,  value });
        //   console.log(Description)
        // };
      
        // connect with firebase
      

    return (
        <div className='dndflow'>
            <ReactFlowProvider>
            <Sidebar node={nodes} edges={edges} />
                <div
                    className='reactflow-wrapper'
                    ref={reactFlowWrapper}
                    onClick={toggleClose}
                >
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onEdgeUpdate={onEdgeUpdate}
                        onEdgeUpdateStart={onEdgeUpdateStart}
                        onEdgeUpdateEnd={onEdgeUpdateEnd}
                        onConnect={onConnect}
                        onInit={setReactFlowInstance}
                        onDrop={onDrop}
                        connectionLineType='smoothstep'
                        nodeTypes={nodeTypes}
                        onDragOver={onDragOver}
                        fitView
                        onNodeClick={changeDiscription}
                        onElementsRemove={handleNodeDelete}
                    >
                        <Controls />
                        <Background />
                    </ReactFlow>
                </div>
                {/* {nodes.id==='0'&&<Discription />} */}
                {/* {isMenuOpen? <Discription  handleChane={handleChane}/>:""} */}
                
                {
                    activeBar==='gptDesc'&& isMenuOpen ? <Discription  handleChane={handleChane} id={currentId} />:""

                }
                {
                    activeBar==='voiceCloneDesc'&& isMenuOpen ? <VoiceCloneDescription handleChane={handleChane}/>:""
                }   
                {
                    activeBar==='textAudioDesc'&& isMenuOpen ? <TextToSpeechDesc handleChane={handleChane} id={currentId}/>:""
                }
                {/* {
                    activeBar==='InputTextarea' && isMenuOpen ? <InputTextarea handleChane={handleChane} id={currentId}/>:""
                } */}
                {
                    activeBar==='other' &&(<div></div>)
                }
            </ReactFlowProvider>
        </div>
    )
}

export default DnDFlow
