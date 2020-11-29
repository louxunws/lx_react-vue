import React from 'react';
import './index.less'

const Header = () => {
    const img = require('../../assect/pic.jpg')

    return <div className='headerContainer'>
        <div className='img'>
            <img src={img.default} alt="头像"/>
        </div>
    </div>
}

export default Header;