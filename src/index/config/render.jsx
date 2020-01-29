import React from 'react'
import View from './view.jsx'
import configData from './config.js'

class Index extends React.Component {
    constructor(props){
        super(props)
    }

    selectOnchange() {
        console.log('select 触发')
    }

    inputOnchange() {
        console.log('input 触发')
    }

    render() {
        let configDataUse = configData.call(this)
        return(
            <>
                <div>00</div>
                <View
                    configData = {configDataUse}
                ></View>
            </>
        )
    }
}

export default Index