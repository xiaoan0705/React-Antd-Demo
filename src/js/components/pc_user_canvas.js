import React from 'react';
import ReactDOM from 'react-dom';
import { Progress } from 'antd';

export default class PCUserCanvas extends React.Component{
	
	render(){
		return(
			<div>
				<Progress type="circle" percent={75} />
			    <Progress type="circle" percent={70} format={percent => `${percent} Days`}/>
			    <Progress type="circle" percent={100} />
			</div>
		)
	}
}
