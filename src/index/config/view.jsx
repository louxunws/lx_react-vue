import React from 'react'


class Index extends React.Component {
    constructor(props){
        super(props)
    }

    render() {

        let baseConfig = {
            select(fn) {
                return (
                    <div>
                       <select
                            onChange = {fn}
                       >
                           {

                           }
                       </select>
                    </div>
                )
            },
            input(fn) {
                return (
                    <div>
                        <input
                            onChange = {fn}
                        ></input>
                    </div>
                )
            },
            custom() {
                return (
                    <div>我是自定义组件</div>
                )
            }
        }

        let { configData } = this.props

        return(
            <div>
            <div>99</div>
                {
                    configData.map((item) => {
                        let {fn, type} = item
                        return baseConfig[type](fn)
                    })
                }
            </div>
        )
    }
}

export default Index