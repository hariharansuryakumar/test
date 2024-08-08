import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, BookingHistory, Menu} from 'antd'

const { Header } = Layout;

function navbar() {
  return (

    <div>
    <Menu theme='dark' mode= 'horizontal' defaultSelectedKeys={['1']}>
<Menu.Item key="1"><Link to="/Home">Home</Link></Menu.Item>
<Menu.Item key="2"><Link to="/Login">login</Link></Menu.Item>
<Menu.Item key="3"><Link to="/register">register</Link></Menu.Item>
</Menu>
</div>

    )
}

export default navbar