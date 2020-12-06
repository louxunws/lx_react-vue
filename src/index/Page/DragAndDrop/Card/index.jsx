import React, {useState} from 'react';
import { useDrag } from 'react-dnd'
import {CaretDownOutlined} from '@ant-design/icons'   
import './index.less'

const Card = ({cardData, deleteChooseList, type}) => {
    const [isShowDetailDom, setIsShowDetailDom] = useState(false)
    const [deleteCollect,deleteDrag] = useDrag({
        item: {
            type: 'delete',
            item: cardData
        },
        end(item){
            deleteChooseList(item.item.key, type)
        },
    })

    return <div ref={deleteDrag} className='cardContainer'>
        {cardData.name}
        <span
            onClick={()=>{console.log('11111');setIsShowDetailDom(prev=>!prev)}}
        ><CaretDownOutlined /></span>
        {
            isShowDetailDom && <div className='model'>

            </div>
        }

    </div>
}

export default Card