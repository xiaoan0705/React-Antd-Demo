import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {Button} from 'antd';
import PCIndex from './components/pc_index';
import PCNewsDetails from './components/pc_news_details';
import MobileIndex from './components/mobile_index';
import PCCenter from './components/pc_center';
import PCUserCenter from './components/pc_usercenter';
import PCUserCanvas from './components/pc_user_canvas';
import PCUserLoad from './components/pc_user_upload';

import 'antd/dist/antd.css';


import MediaQuery from 'react-responsive';
export default class Root extends React.Component {
	render() {
		return (
			<div>
				<MediaQuery query='(min-device-width: 1224px)'>
					<Router history={hashHistory}>
						<Route path="/" component={PCIndex}></Route>
						<Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
						<Route path='/personCenter' component={PCCenter}></Route>
						<Route path='/usercenter' component={PCUserCenter}>
							<Route path='/userCanvas' component={PCUserCanvas}></Route>
							<Route path='/userUpload' component={PCUserLoad}></Route>
						</Route>
						
					</Router>
				</MediaQuery>
				<MediaQuery query='(max-device-width: 1224px)'>
					<MobileIndex/>
				</MediaQuery>
			</div>
		);
	};
}
ReactDOM.render(
	<Root/>, document.getElementById('mainContainer'));
