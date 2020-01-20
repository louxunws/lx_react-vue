import React from 'react'
import ReactDom from 'react-dom'
import logo from '../images/logo.png'
import './search.less'

class Search extends React.Component{
    constructor(props) {
        super(props)
        this.state= {
            Text: null
        }
    }
    
    hundle() {
        console.log('22')
        import('./text.js').then((res) => {
            console.log(res)
            this.setState({
                Text: res.default
            })
        })
    }

    render() {
        const { Text } = this.state
        return(
            <>
                <img src={ logo }></img>
                <div>search页面</div>
                {
                    Text? <Text/> : null
                }
                <button onClick = {this.hundle.bind(this)}>click me</button>
            </>
        )
    }   
}

ReactDom.render(
    <Search/>,
    document.getElementById('root')
)