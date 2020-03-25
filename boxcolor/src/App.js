import React,{Component} from 'react';
import './App.css';

export default class ComponentName extends Component{
  constructor(props){
    super(props);
    this.state={
      color:'blue',
      clickCounter:0
    }
  }
  onChange=(e)=>{
    let color=(this.state.color==='blue')?'purple':'blue';
    this.setState({
      color:color,
      clickCounter:this.state.clickCounter+1
    })
    console.log(this.state.clickCounter);
  }
  render(){
    return(
      <div className='App'>
        <h2>Box Color Change </h2>
        <div className='colorbox' style={{backgroundColor:this.state.color}} onClick={this.onChange}>
          <p>Click here</p>
        </div>
      </div>
    )    
  }
}