/**
 * Pseudocode
 * initialize class components to default values
 * clickCounter <-0
 * color<-blue
 * originalColor<- orange
 * 
 * PROCEDURE onChange
 *  IF counter equals odd
 *      set color to originalColor
 *  ELSE
 *      generate random color
 *      set component color to random color
 *      increase counter by 1
 *  END IF
 *      set component originalColor to color
 * END      
 *  
 */


import React,{Component} from 'react';
import './App.css';

export default class ComponentName extends Component{
  constructor(props){
    super(props);
    this.state={
      color:'blue',
      originalColor:'orange',
      clickCounter:0
    }
  }
  onChange=(e)=>{
      let color='';
      let counter = this.state.clickCounter;
      //console.log("counter",counter);
      //toggles color between default color and random color
      if(counter%2 !==0){
          color=this.state.originalColor;
      }
      else{
            color = "#"+Math.floor(Math.random()*16777215).toString(16);
           // console.log("color",color);
          }
      this.setState({
          color:color,
          clickCounter:this.state.clickCounter+1
        })
    console.log(this.state.clickCounter);
    this.setState({originalColor:this.state.color});

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