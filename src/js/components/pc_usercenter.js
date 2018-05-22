import React from 'react';
import ReactDOM from 'react-dom';

import { Layout, Menu, Icon } from 'antd';
const {Header,Content,Footer,Sider}=Layout;
const {SubMenu}=Menu;
import PCHeader from './pc_header';
import {Router, Route, Link, browserHistory} from 'react-router'

export default class PCUserCenter extends React.Component{
	constructor(props){
		super(props);
		this.state={
			current:''
		};
	};
	componentDidMount() {
		
	};
	handleClick(e){
		this.setState({
			current:e.key
		});
	}
	render(){
		
		
		return(
			<div>
				<PCHeader/>
				<Layout style={{paddingTop:'50px'}}>
					<Sider breakpoint='lg' 
						   collapsedWidth='0'
						   onCollapse={(collapsed,type)=>{ console.log(collapsed, type); }}   
					>
						<div className='logo'/>
						<Menu theme='dark' mode='inline' defaultOpenKeys={['sub1','sub2']} defaultSelectedKeys={[this.state.current]} onClick={this.handleClick.bind(this)} style={{ height: '100%' }}>
							<SubMenu key='sub1' title={<span><Icon type='user'/>基本信息</span>}>
								<Menu.Item key='1'><Link to={'/userInfo'}>信息表</Link></Menu.Item>
								<Menu.Item key='2'><Link to={'/userUpload'}>上传头像</Link></Menu.Item>
							</SubMenu>
							<SubMenu key='sub2' title={<span><Icon type='video-camera'/>我的足迹</span>}>
								<Menu.Item key='3'>日历</Menu.Item>
								<Menu.Item key='4'>我的评论</Menu.Item>
								<Menu.Item key='5'><Link to={'/userCanvas'}>进度条</Link></Menu.Item>
							</SubMenu>

						</Menu>
					</Sider>
					<Layout>
						
						<Content style={{margin:'0 16px'}}>
							<div style={{padding:24,background:'#fff',minHeight: 360}}>
								{ this.props.children }
							</div>
						</Content>
						<Footer style={{textAlign:'center'}}>
							React News @2018 created by Xiao An
						</Footer>
					</Layout>
				</Layout>
			</div>
		);
	}
}
