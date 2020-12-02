import React, {useState} from 'react';
import './index.less'

const {Provider, Consumer} = React.createContext()

const ThirdCom = () => {

    return <Consumer>
        {(value)=>{ console.log(value);return <div className='ThirdCom' style={{background:value}}></div>}}
    </Consumer>
}

const SecondCom = () => {
    return <div className='SecondComContent'>
        <ThirdCom/>
    </div>
}

const FirstCom = () => {
    const [color, setColor] = useState('red')
    return <div className='container'>
        <div className='FirstComContent' style={{background:color}}>
            <p>context 跨组件传参</p>
            <button onClick={() => {
                setColor('green')
            }}>Click me , change background</button>

            <Provider value={color}>
                <SecondCom/>
            </Provider>
        </div>
    </div>
}

export default FirstCom;