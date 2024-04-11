import React, { useEffect, useState } from 'react';
import ReactFlow from 'reactflow';

const ModelFlowPreview = (props) => {
    const [nodes,setNodes]=useState([])
    const [edges,setEdges]=useState([])
    useEffect(()=>{
      setNodes(props.flow.nodes)
      setEdges(props.flow.edges)
    },[props.flow])


    console.log(nodes)
    console.log(edges)
    return (
      <div className='flex flex-col h-96 border-2 border-orange-800 mt-10 shadow-md hover:shadow-orange-800 '>
        <ReactFlow
          nodes={nodes} 
          edges={edges}
          fitView
         /> 
      </div>
    );
  };
  
  export default ModelFlowPreview;6