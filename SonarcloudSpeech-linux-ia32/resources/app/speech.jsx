import React from "react";
import ReactDOM from "react-dom";
import { Form, Icon, Input, Button, Modal } from 'antd';
import cookie from 'react-cookie';
import { BinaryClient } from 'binaryjs-client';
import {Pubsub } from 'pubsub-js';
// import { Router, Route, Link, browserHistory } from 'react-router'
import 'antd/dist/antd.css'
const FormItem = Form.Item;



export class Speecher extends React.Component{  
  
  
  
	constructor(props) {
		super(props);
    this.state = {
        userId: cookie.load('userId') ,
        visible: false,
        loading: false
    };
  }
  
  
  
  handleOk() {
    console.log('Clicked OK');
    this.setState({
      visible: false
    });
  }
  
  
  handleCancel(e) {
    console.log(e);
    this.setState({
      visible: false
    });
    e.preventDefault();
  }
  
  
  playIt(){
    
     
    
    
  }
  
  
  
  login(userId){
    
     
    
      cookie.save('userId', userId) 
    
    
  }
  
  
  
  

  
  
  
  componentDidMount(){
    
    this.setState({
        visible: true,
      }); 
      const clienter = new BinaryClient('wss://sonarspeak.s0nr.co');
      
      var mySubscriber = function( msg, data ){
          console.log( msg, data );
      };
      
      var mySubscriber = function( msg, data ){
          console.log( msg, data );
      };
      
      
      PubSub.subscribe( 'MY TOPIC', mySubscriber );
      PubSub.subscribe( 'MY TOPIC', mySubscriber );
      
      clienter.on('open', function() {
        console.log("you are in.")



        let streamer = clienter.createStream();
        
        
        PubSub.publish( 'MY TOPIC', 'hello world!' );
        
        
        
        
        
        
     
      });
    
  }
  
  
  
   
   
   render(){

     return(
       
       <div>
       <Input className="bootom" type="textarea" rows={4} />
       <Button type="primary" size="large">Send</Button>
       <Modal title="Login" visible={this.state.visible}
                onOk={this.handleOk} onCancel={this.handleCancel}
                footer={[]}
                       >
                <Form className="login-form">
                       <FormItem>
                        
                           <Input addonBefore={<Icon type="user" />} placeholder="Email" />
                      
                       </FormItem>
                       <FormItem>
                       
                           <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
                       
                       </FormItem>
                       <FormItem>
                         
                         <Button type="primary" className="login-form-button" onClick={this.handleCancel.bind(this)}>
                           Log in
                         </Button>
                      
                       </FormItem>
                     </Form>
              </Modal>
       
       
       </div>
    
    
    
    
     )
   }
   
   
   
   
   
   
   
   
 }
 
 
 
 ReactDOM.render(<Speecher />, document.getElementById("main"));