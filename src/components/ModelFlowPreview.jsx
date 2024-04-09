import React from 'react';
import ReactFlow from 'reactflow';

const ModelFlowPreview = (props) => {
     console.log(props.flow[0].coordinateObject);
     const nodes=props.flow[0].coordinateObject.nodes;
     const edges=props.flow[0].coordinateObject.edges;

  
    return (
      <div style={{ height: '800px', width: '100%' }}>
        <ReactFlow
        nodes={nodes} 
        edges={edges}
        fitView
         /> 
      </div>
    );
  };
  
  export default ModelFlowPreview;