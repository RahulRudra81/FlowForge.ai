import React from 'react'

export default () => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType)
        event.dataTransfer.effectAllowed = 'move'
    }

    return (
        <aside>
            <div className='description'>
                You can drag these nodes to the pane on the left.
            </div>
            <div
                className='dndnode input'
                onDragStart={(event) => onDragStart(event, 'input')}
                draggable
            >
                input
            </div>
            <div
                className='dndnode'
                onDragStart={(event) => onDragStart(event, 'default')}
                draggable
            >
                default
            </div>
            <div
                className='dndnode output'
                onDragStart={(event) => onDragStart(event, 'output')}
                draggable
            >
                output
            </div>
            <div
                className='dndnode selectorNode'
                onDragStart={(event) => onDragStart(event, 'gptNode')}
                draggable
            >
                gptNode
            </div>
        </aside>
    )
}
