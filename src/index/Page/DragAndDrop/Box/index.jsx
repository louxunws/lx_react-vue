import React from 'react';
import { useDrag } from 'react-dnd';
import './index.less'

const Box = ({
    data, 
    onchange, 
    chooseList, 
    type, 
    changeBorderColor
}) => {
    // 维度拖拽
    const [,dimensionDrag] = useDrag({
        item: {
            type: 'dimensionBox',
            item: data
        },
        begin(monitor){
            changeBorderColor(true, type)
        },
        end(_,monitor){
            const isInDropBox = monitor.didDrop();
            const isRepeat = chooseList.map(v=>v.name).includes(_.item.name)
            changeBorderColor(false, type)
            if(isInDropBox && !isRepeat){
                onchange(_.item, type)
            }
           
        }
    })

    // 指标拖拽
    const [,targetDrag] = useDrag({
        item: {
            type: 'targetbox',
            item: data
        },
        begin(monitor){
            changeBorderColor(true, type)
        },
        end(_,monitor){
            const isInDropBox = monitor.didDrop();
            const isRepeat = chooseList.map(v=>v.name).includes(_.item.name)
            changeBorderColor(false, type)
            if(isInDropBox && !isRepeat){
                onchange(_.item, type)
            }
           
        }
    })

    return <div ref={type==='target'?targetDrag : dimensionDrag} className='boxContainer'>
        {data.name}
    </div>
}

export default Box