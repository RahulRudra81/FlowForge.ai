// import React, { memo, useEffect, useState } from 'react'
// import { Handle } from 'reactflow'
// //import { useBearStore } from '../DnDFlow'

// export default memo(({ data, isConnectable }) => {
//     console.log(data.color)

//     // const [rand, setRand] = useState(Math.random())

//     // const bears = useBearStore((state) => state.bears)
//     // const increasePopulation = useBearStore((state) => state.increasePopulation)

//     // data.color = rand
//     // data.hoohaa = 'hello'
//     // data.myFunc = () => {
//     //     console.log()
//     // }

//     return (
//         <div onClick={increasePopulation}>
//             <Handle
//                 type='target'
//                 style={{ background: 'red' }}
//                 onConnect={(params) => console.log('handle onConnect', params)}
//                 isConnectable={isConnectable}
//             />
//             <div>
//                 <strong>{bears}</strong>
//             </div>
//             <input
//                 className='nodrag'
//                 type='color'
//                 onChange={data.onChange}
//                 defaultValue={data.color}
//             />
//             <div style={{ display: 'flex' }}>
//                 <Handle
//                     type='source'
//                     id='a'
//                     position='bottom'
//                     style={{ marginLeft: -10, background: '#555' }}
//                     isConnectable={isConnectable}
//                 />
//                 <Handle
//                     type='source'
//                     id='b'
//                     position='bottom'
//                     style={{ marginLeft: 10, background: 'red' }}
//                     isConnectable={isConnectable}
//                 />
//             </div>
//         </div>
//     )
// })
import React from 'react'

const ColorSelectorNode = () => {
  return (
    <div>ColorSelectorNode</div>
  )
}

export default ColorSelectorNode
