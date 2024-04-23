import  { memo, useState } from 'react'
import { Handle } from 'reactflow'
import './styles/gptNode.css'

export default memo(({ data, isConnectable }) => {
  
    return (
        <div className='gpt-node-wrapper'>
            <Handle
                type='target'
                id='textToImageIn'
                position='left'
                style={{ marginTop: 18, background: '#555' }}
                isConnectable={isConnectable}
            /> 
            
            <Handle
                type='source'
                id='textToAudioOut'
                position='right'
                style={{
                    marginTop: 136,
                    background: '#555',
                    
                }}
                isConnectable={isConnectable}
            />
            <div className='node-title'>Text-To-Image</div>
            <div className='node-content-wrapper'>
                <div className='node-description'>
                    Convert your thoughts into visuals
                </div>
              
                <div className='input-section-wrapper'>
                    <div className='input-title'>Input</div>

                   
                    <div className='input-wrapper'>
                        
                            <input type="text" className='border-black border-2 rounded ' placeholder='Enter description' defaultValue={data.dataOfNode} onChange={data.onChange}/>
                        
                    </div>
                    
                </div>
                <div className='output-section-wrapper'>
                    <div className='input-title'>Output</div>
                    <div className='input-wrapper'>
                        <img
                            width='19'
                            height='19'
                            src='https://img.icons8.com/ios-filled/50/pie-chart.png'
                            alt='pie-chart'
                        />
                        <div className='input'>Result</div>
                    </div>
                </div>
            </div>
           
        </div>
    )
})
