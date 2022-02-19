import { Layout, Menu } from 'antd';
import {
  UserOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
// import { Redirect } from 'react-router';
import {BrowserRouter as Router ,Route } from "react-router-dom";
// import { useHistory } from 'react-router';
import React, { useEffect, useState } from "react";
import Leave from './Display';
// import Left from './Left';
// import Status from './Status'
import Sforms from './Form';
// import { useDispatch } from 'react-redux';
// import {getPosts} from '../actions/crud';

const { Content, Footer, Sider } = Layout;



const Home = () => {

  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {

    setCollapsed (!collapsed);
  };

    return (
      <Router>
      <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="side" />
        <Menu theme="dark" mode="inline"   >
          <Menu.Item key="1" icon={<UserOutlined />}>
            Form 
            <Link to="/" />
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            View results
            <Link to = "/display/"/>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          {/* <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            
          </div> */}
          <Route path = "/" exact component = {Sforms}/> 
          <Route path = "/display" exact component = {Leave}/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Mahindra University</Footer>
      </Layout>
    </Layout>
      </Router>

    );
}


export default Home;




// defaultSelectedKeys={['1']}
