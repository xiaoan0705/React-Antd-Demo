import React from 'react';
import { Row, Col } from 'antd';
import PCNewsBlock from './pc_news_block';
import {Tabs,Carousel} from 'antd';
import PCNewsImageBlock from './pc_news_image_block';
const TabPane=Tabs.TabPane;

export default class PCNewsContainer extends React.Component{
	render(){
		const settings={
			dots:true,
			infinite:true,
			speed:500,
			slidesToShow:1,
			autoplay:true
		};
		
		return(
			<div>
				<Row>
					<Col span={2}></Col>
					<Col span={20} className="container">
						<div className="leftContainer">
							<div className="carousel">
								<Carousel {...settings}>
									<div><img src="./src/images/carousel_1.jpg"/></div>
									<div><img src="./src/images/carousel_2.jpg"/></div>
									<div><img src="./src/images/carousel_3.jpg"/></div>
									<div><img src="./src/images/carousel_4.jpg"/></div>
								</Carousel>
							</div>
							<PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px"/>
							
						</div>
						<Tabs >
							<TabPane tab="头条新闻" key='1' >
								<PCNewsBlock count={27} type="top" width="100%" />
							</TabPane>
							<TabPane tab="国际新闻" key='2'>
								<PCNewsBlock count={27} type="guoji" width="100%" />
							</TabPane>
						</Tabs>
						<div>
							<PCNewsImageBlock count={8} type="guonei" width="100%" cartTitle="国内头条" imageWidth="112px"/>
							<PCNewsImageBlock count={16} type="yule" width="100%" cartTitle="娱乐头条" imageWidth="112px"/>
						</div>
					</Col>
					<Col span={2}></Col>
				</Row>
			</div>
		);
	}

}
