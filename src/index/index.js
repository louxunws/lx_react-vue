import React from 'react'
import ReactDom from 'react-dom'

class Index extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <>
                <p>两个礼拜, 磨一剑, 踩了各种坑, 终于弄好了</p>
                <p>本架子的打包功能是模块化的, 踩了各种坑, 支持以下功能</p>
                <p>热更新, 图片/css/less解析, 多页面打包, js/css/html文件内联, 基础包分离, 代码分割, css增强(c3前缀, rem布局), 文件指纹, js/css/html文件压缩, source-map</p>
                <p>现阶段只支持react框架开发, 后面会支持vue开发, 敬请期待</p>
                <p>vue开发上线后, 就会支持vue组件库</p>
            </>
            
        )
    }
}

ReactDom.render(
    <Index/>,
    document.getElementById('root')
)
