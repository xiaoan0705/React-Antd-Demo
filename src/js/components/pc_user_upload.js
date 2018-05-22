import React from 'react';
import ReactDOM from 'react-dom';
import { Upload, Icon, Modal } from 'antd';

export default class PCUserLoad  extends React.Component {
  constructor(){
  	super();
  	this.state = {
    previewVisible: false,
    previewImage: '',
    fileList: [{
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: './src/images/carousel_4.jpg',
    }],
  };
  }
  
  handleCancel(){
  	this.setState({
  		previewVisible: false 
  	})
  }

  handlePreview(file){
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

  render() {
    
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className='clearfix'>
		<Upload>
			<Icon type='plus'/>
			<div className='anti-upload-text'>上传照片</div>
		</Upload>
		<Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
			<img alt='预览' src={this.state.previewImage} />
		</Modal>
	</div>
    );
  }
}
