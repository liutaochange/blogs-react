import React from 'react'
import { Spin, Icon } from 'antd'
const loadingIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />
const containerStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    textAlign: 'center',
}
const spinStyle = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
}
const Loading = () => (
    <div style={containerStyle}>
        <Spin indicator={loadingIcon} style={spinStyle}></Spin>
    </div>
)
export default Loading
