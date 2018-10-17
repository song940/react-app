import React from 'react'; // or 'preact';
import {
  Icon,
  Menu,
  Layout
} from 'antd';

import './index.css';

const {
  Header,
  Footer,
  Content,
  Sider
} = Layout;

class Index extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }} >
        <Sider collapsible >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']} >
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <Menu.SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>} >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>} >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="header" >
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }} >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Content></Content>
          <Footer></Footer>
        </Layout>
      </Layout>
    )
  }
}

export default Index;
