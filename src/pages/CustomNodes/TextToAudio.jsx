import React, { memo, useEffect, useState } from 'react'
import { Handle } from 'reactflow'
//import { useBearStore } from '../DnDFlow'
import './styles/textNode.css'
import { Option, Select } from '@material-tailwind/react'

export default memo(({ data, isConnectable }) => {
    // console.log(data.color)

    // const [rand, setRand] = useState(Math.random())

    // const bears = useBearStore((state) => state.bears)
    // const increasePopulation = useBearStore((state) => state.increasePopulation)

    // data.color = rand
    // data.hoohaa = 'hello'
    // data.myFunc = () => {
    //     console.log()
    // }

    //const [voice, setVoice] = useState('alloy')

    return (
        <div className='text-node-wrapper'>
            <Handle
                type='target'
                id='textToAudioIn'
                position='left'
                style={{ marginTop: 18, background: '#555' }}
                isConnectable={isConnectable}
            />
            
            <Handle
                type='source'
                id='textToAudioOut'
                position='right'
                style={{
                    marginTop: 70,
                    // marginLeft: '70px',
                    background: '#555',
                    // width: 15,
                    // height: 15,
                }}
                isConnectable={isConnectable}
            />
            <div className='node-title'>Text-To-Audio</div>
            <div className='node-content-wrapper'>
                <div className='node-description'>
                    Convert your text to audio.
                </div>
                
                <div className='input-section-wrapper '>
                    <div className='input-title'>Input</div>
                    <div className='input-wrapper'>
                    <div className="">
                        <Select
                            size='sm'
                            label="Select Voice"
                            value={data.dataOfNode}
                            onChange={data.onChange}
                        >
                            <Option value="alloy">Alloy</Option>
                            <Option value="echo">Echo</Option>
                            <Option value="fable">Fable</Option>
                            <Option value="onyx">Onyx</Option>
                            <Option value="nova">Nova</Option>
                            <Option value="shimmer">Shimmer</Option>
                        </Select>
                    </div>
                     
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
