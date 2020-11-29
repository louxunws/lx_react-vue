import React, {useState} from 'react';
import Header from '../Page/Header/index.jsx';
import Menu from '../Page/Menu/index.jsx';
import RenderProps from '../Page/RenderProps/index.jsx';
import G6 from '../Page/G6/index.jsx';
import G2 from '../Page/G2/index.jsx';
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
            <div>
                {renderCom(selectedCom)}
            </div>
        </div>
    </div>
}

export default Layout