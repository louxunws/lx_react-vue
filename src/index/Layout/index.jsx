import React, {useState} from 'react';
import Header from '../Page/Header/index.jsx';
import Menu from '../Page/Menu/index.jsx';
import RenderProps from '../Page/RenderProps/index.jsx';
import G6 from '../Page/G6/index.jsx';
import G2 from '../Page/G2/index.jsx';
import Context from '../Page/Context/index.jsx';
import DragAndDrop from '../Page/DragAndDrop/index.jsx';
import './index.less';

const Layout = ({}) => {
    const [selectedCom, setSelectedCom] = useState()

    const renderCom = (selectedKey) => {
        switch(selectedKey){
            case 'RENDER_PROPS':
                return <RenderProps/>
            break;

            case 'G6':
                return <G6/>
            break;

            case 'G2':
                return <G2/>
            break;

            case 'CONTEXT':
                return <Context/>
            break;

            case 'DRAG_AND_DROP':
                return <DragAndDrop/>
            break;
        }
    }

    const onMenuChange = (key) => {
        setSelectedCom(key)
    }
    
    return <div className='container'>
        <div className='menu'>
            <Menu
                onChange={onMenuChange}
            />
        </div>
        <div className='content'>
            <div className='header'>
                <Header/>
            </div>
            <div className='bodyContent'  style={{height: document.body.clientHeight-100}}>
                {renderCom(selectedCom)}
            </div>
        </div>
    </div>
}

export default Layout