import React, { memo, useEffect, useState } from 'react'
import { Handle } from 'reactflow'
import { useBearStore } from '../DnDFlow'
import './styles/gptNode.css'

export default memo(({ data, isConnectable }) => {
    // console.log(data.color)

    const [rand, setRand] = useState(Math.random())

    const bears = useBearStore((state) => state.bears)
    const increasePopulation = useBearStore((state) => state.increasePopulation)

    // data.color = rand
    // data.hoohaa = 'hello'
    data.myFunc = () => {
        // console.log()
    }

    return (
        <div className='gpt-node-wrapper'>
            <Handle
                type='target'
                id='a'
                position='left'
                style={{ marginTop: 18, background: '#555' }}
                isConnectable={isConnectable}
            />
            <Handle
                type='target'
                id='b'
                position='left'
                style={{ marginTop: 43, background: '#555' }}
                isConnectable={isConnectable}
            />
            <Handle
                type='target'
                id='c'
                position='left'
                style={{ marginTop: 68, background: '#555' }}
                isConnectable={isConnectable}
            />
            <Handle
                type='source'
                id='d'
                position='right'
                style={{
                    marginTop: 136,
                    // marginLeft: '70px',
                    background: '#555',
                    // width: 15,
                    // height: 15,
                }}
                isConnectable={isConnectable}
            />
            <div className='node-title'>GPT4 Model</div>
            <div className='node-content-wrapper'>
                <div className='node-description'>
                    composes conversational and human-like responses to natural
                    language inputs
                </div>
                <div className='cost-wrapper'>
                    <img
                        width='19'
                        height='19'
                        src='https://img.icons8.com/ios-glyphs/30/money--v1.png'
                        alt='money--v1'
                    />
                    <div className='cost'>
                        costs{' '}
                        <span style={{ color: 'purple', fontWeight: '800' }}>
                            $0.06
                        </span>{' '}
                        per token
                    </div>
                </div>
                <div className='input-section-wrapper'>
                    <div className='input-title'>Input</div>

                    <div className='input-wrapper'>
                        <div className='inner'>
                            <img
                                width='19'
                                height='19'
                                src='https://img.icons8.com/ios-filled/50/align-cell-content-left.png'
                                alt='align-cell-content-left'
                            />
                            <div className='input'>Prompt</div>
                        </div>

                        <img
                            width='19'
                            height='19'
                            src='https://img.icons8.com/ios-glyphs/30/checkmark--v1.png'
                            alt='checkmark--v1'
                        />
                    </div>
                    <div className='input-wrapper'>
                        <div className='inner'>
                            <img
                                width='19'
                                height='19'
                                src='https://img.icons8.com/ios-filled/50/align-cell-content-left.png'
                                alt='align-cell-content-left'
                            />
                            <div className='input'>Description</div>
                        </div>
                        <img
                            width='19'
                            height='19'
                            src='https://img.icons8.com/ios-glyphs/30/checkmark--v1.png'
                            alt='checkmark--v1'
                        />
                    </div>
                    <div className='input-wrapper'>
                        <div className='inner'>
                            <img
                                width='19'
                                height='19'
                                src='https://img.icons8.com/ios-filled/50/pie-chart.png'
                                alt='pie-chart'
                            />
                            <div className='input'>Data</div>
                        </div>
                        <img
                            width='19'
                            height='19'
                            src='https://img.icons8.com/windows/32/delete-sign.png'
                            alt='delete-sign'
                        />
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
                        {/* <button onClick={() => removeNode(node)}>Delete</button> */}
                        <div className='input'>Result</div>
                    </div>
                </div>
            </div>
           
        </div>
    )
})
