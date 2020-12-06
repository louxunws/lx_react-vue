import React from 'react';
import { useDrop } from 'react-dnd';
import Card from '../Card/index.jsx'
import './index.less'

const ChooseList = ({
    dimensionList, 
    targetList,
    dimensionBorderIsHeight,
    targetBorderIsHeight,
    deleteChooseList
}) => {
    const [dimensionCollectProps, dimensionDroper] = useDrop({
        accept: 'dimensionBox',
        collect: (minoter) => {
            return {
                isOver: minoter.isOver()
            }
        }
    })

    const [targetCollectProps, targetDroper] = useDrop({
        accept: 'targetbox',
        collect: (minoter) => {
            return {
                isOver: minoter.isOver()
            }
        }
    })

    return <div className='ChooseListContainer'>
        <div className='dimension'>
            <div>已选择维度：</div>
            <div 
                ref={ dimensionDroper }  
                className='listItem' 
                style={{border:dimensionBorderIsHeight?'1px solid red':'1px solid black'}}
            >
                {dimensionList.map(v => <Card 
                    key={v.key} 
                    className='ChooseListItem' 
                    cardData={v} 
                    deleteChooseList={deleteChooseList}
                    type='dimension'
                />)}
            </div>
        </div>
        <div className='target'>
            <div>已选择指标：</div>
            <div 
                ref={ targetDroper }  
                className='listItem'
                style={{border:targetBorderIsHeight?'1px solid red':'1px solid black'}}
            >   
                {targetList.map(v => <Card 
                    key={v.key} 
                    className='ChooseListItem' 
                    cardData={v} 
                    deleteChooseList={deleteChooseList}
                    type='target'
                />)}
            </div>
        </div>
       
    </div>
    
}

export default ChooseList 