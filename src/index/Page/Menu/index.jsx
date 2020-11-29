import React, {useState} from 'react';
import { MENUDATA } from '../../Constent/data'
import './index.less'

const Menu = ({onChange}) => {
    const [selectedKey, setSelectedKey] = useState()

    const onMenuItemClick = (key) => {
        setSelectedKey(key)
        onChange(key)
    }

    return <div className='menuContainer'>
        <div className='logo'>
            <span>Tgrowth</span>
        </div>
        {
            MENUDATA.map(v => (
                <div key={v.key} 
                    className='menuItem'
                    data-selected={selectedKey === v.key}
                    onClick={()=>onMenuItemClick(v.key)}
                >
                    {v.name}
                </div>
            ))
        }
    </div>
}

export default Menu