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

const MenuTitle = ({ icon, text }) => {
  return (
    <span>
      <Icon type={ icon } />
      <span>{ text }</span>
    </span>
  );
};

const MenuLink = ({ icon, text, to }) => {
  return (
      <Link to={ to } >
        <Icon type={ icon } />
        <span>{ text }</span>
      </Link>
  );
};

class Index extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      collapsed: false
    };
  }
  toggleSider(collapsed){
    this.setState({ collapsed });
  }
  render() {
    const { collapsed } = this.state;
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }} >
          <Sider 
            width="256"
            className="sider" 
            collapsible
            collapsed={collapsed}
            style={{ position: 'fixed', height: '100vh' }} >
            <div className="logo" >
              <Icon type="home" style={{fontSize:"26px", color: '#fff'}} />
              <h1>Home Server</h1>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} >
              <Menu.Item key="overview">
                <MenuLink icon="dashboard" text="Overview" to="/overview" />
              </Menu.Item>
              <Menu.SubMenu key="network" title={ <MenuTitle icon="global" text="Network" /> } >
                <Menu.Item key="6">
                  <MenuLink icon="user" text="Interface" to="/network/interface" />
                </Menu.Item>
                <Menu.Item>
                  <MenuLink icon="user" text="Firewall" to="/network/iptables" />
                </Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ marginLeft: collapsed ? 80 : 256 }} >
            <Header className="header" style={{ width: `calc(100% - ${collapsed ? 80 : 256}px)` }} >
              <Icon
                className="trigger"
                onClick={ e => this.toggleSider(!collapsed) }
                type={collapsed ? 'menu-unfold' : 'menu-fold'} />
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
