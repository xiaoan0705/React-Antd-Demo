import React from 'react';
import ReactDom from 'react-dom';
import {Table,Icon,Divider}from 'antd';
import { Row, Col } from 'antd';
export default class PCUserInfo extends React.Component{
    constructor(){
        super();
        this.state={
            datas:[]
        }
    }
     getData(){
        fetch('./src/data/data.json')
        .then(response=>response.json())
        .then(data=>{this.setState({datas:data.arr})})
        .catch(e=>{console.log("error")})
    }
    render(){
        const datas=this.state.datas;
        const columns=[
	        {
	        	title:'编号',
	        	dataIndex:'id',
	        	key:'id',
	        	render:text=><a href='javascript:;'>{text}</a>
	        },
	        {
	        	title:'姓名',
	        	dataIndex:'name',
	        	key:'name'
	        },
	        {
	        	title:'所在地',
	        	dataIndex:'city',
	        	key:'city'
	        },
	        {
	        	title:'性别',
	        	dataIndex:'sex',
	        	key:'sex'
	        }
        ];
        return (
           <div>
              	<Row>
              		<Col span={10}>
              		</Col>
              		<Col span={7}>
              			<h1>人员信息表</h1>
              		</Col>
              		<Col span={7}>
              			 <button onClick={this.getData.bind(this)}>查询信息</button>
              		</Col>
              	</Row>
              	<Row>
              		<Col span={2}></Col>
              		<Col span={20}>
              			<Table columns={columns} dataSource={datas} />
              		</Col>
              		<Col span={2}></Col>
              	</Row>
              	
           </div>
        )
    }
}
