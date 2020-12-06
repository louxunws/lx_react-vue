import React, {useState} from 'react';
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import Box from './Box/index.jsx'
import ChooseList from './ChooseList/index.jsx'
import './index.less'

const data = [
    {
        name: '部门',
        key: 'department',
        isShowModel: false
    },
    {
        name: '战役',
        key: 'battle',
        isShowModel: false
    }
]

const businessTarget = [
    {
        name: '兵力',
        key: 'troops',
        isShowModel: false
    }
]

const DragAndDropPage = () => {
    const [dimensionList, setDimensionList] = useState([])
    const [targetList, setTargetList] = useState([])
    const [isHeight, setIsHeight] = useState({
        dimension:false,
        target:false
    })

    const changeBorderColor = (isStart,type) => {
        if(isStart && type === 'target'){
            setIsHeight(prev => ({...prev, target:true}))
            return
        }
        if(isStart && type === 'dimension'){
            setIsHeight(prev => ({...prev, dimension:true}))
            return
        }
        if(!isStart && type === 'target'){
            setIsHeight(prev => ({...prev, target:false}))
            return
        }
        if(!isStart && type === 'dimension'){
            setIsHeight(prev => ({...prev, dimension:false}))
            return
        }
    }

    const changeChooseList = (data, type) => {
        if(type === 'target'){
            setTargetList(prev => [...prev, data])
            return
        }
        setDimensionList(prev => [...prev, data])
    }

    const deleteChooseList = (key, type) => {
        if(type === 'target'){
            setTargetList(prev => {
                const prevCopy = prev
                prev.forEach((v,i) => {
                    if(v.key === key){
                        prevCopy.splice(i,1)
                    }
                })
                return JSON.parse(JSON.stringify(prevCopy))
            })
            return
        }
        setDimensionList(prev => {
            const prevCopy = prev
            prev.forEach((v,i) => {
                if(v.key === key){
                    prevCopy.splice(i,1)
                }
            })
            return JSON.parse(JSON.stringify(prevCopy))
        })
    }

    return <div className='DragAndDropPageContainer'>
        <DndProvider backend={ HTML5Backend }>
            <div className='wapper'>
                <div className='dimension'>
                    <div>业务维度：</div>
                    <div>
                        {
                            data.map(v => <Box  
                                type='dimension'
                                data={v}
                                chooseList={dimensionList}
                                key={v.key}
                                onchange={changeChooseList}
                                changeBorderColor={changeBorderColor}
                            />)
                        }
                    </div>
                </div>
                <div  className='target'>
                    <div>业务指标：</div>
                    <div>
                        {
                            businessTarget.map(v => <Box
                                type='target'
                                data={v}
                                chooseList={targetList}
                                key={v.key}
                                onchange={changeChooseList}
                                changeBorderColor={changeBorderColor}
                            />)
                        }
                    </div>
                </div>
            </div>
            <div>
                <ChooseList
                    dimensionList={dimensionList}
                    targetList={targetList}
                    dimensionBorderIsHeight={isHeight.dimension}
                    targetBorderIsHeight={isHeight.target}
                    deleteChooseList={deleteChooseList}
                />
            </div>
        </DndProvider>
    </div>
}

export default DragAndDropPage