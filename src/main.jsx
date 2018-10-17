import React from 'react'; // or 'preact';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router, Route, Link 
} from "react-router-dom";
import Loadable from "react-loadable";
import {
  Icon,
  Menu,
  Layout
} from 'antd';

import './main.css';

const {
  Header,
  Footer,
  Content,
  Sider
} = Layout;

const loading = () => <div />

const routes = [
  {
    path: "/overview",
    component: Loadable({
      loading,
      loader: () => import('./components/Overview')
    })
  },
];

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

class Index extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      collapsed: false
    };
  }
  render() {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }} >
          <Sider collapsible className="sider" >
            <div className="logo" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']} >
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <Link to="/overview" >Overview</Link>
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
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
            </Header>
            <Content className="content" >
              {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
            </Content>
            <Footer></Footer>
          </Layout>
        </Layout>
      </Router>
    )
  }
}

ReactDOM.render(<Index />, 
  document.getElementById('app'));
