import React, { Component } from 'react';
import canvas from './canvas';
import './App.css';
import {save} from './canvas';

class App extends Component {

  constructor(){
    super();
    
    this.setColor = this.setColor.bind(this);
  }

  setColor(e,color,lineWidth=1){
    e.preventDefault();
    canvas(color, lineWidth);
  }  

  componentDidMount() {
    canvas("black",1);
  }
 
  render() {
    return (
      <div className="App">
          <canvas id="can" width="400" height="400"></canvas>
        
          <div>
              <div className='choose'>Choose Color
                <div id="green" onClick={(e)=>this.setColor(e,'green')}></div>
                <div  id="blue" onClick={(e)=>this.setColor(e,'blue')}></div>
                <div  id="red" onClick={(e)=>this.setColor(e,'red')}></div>
                <div id="yellow" onClick={(e)=>this.setColor(e,'yellow')}></div>
                <div  id="orange" onClick={(e)=>this.setColor(e,'orange')}></div>
                <div  id="black" onClick={(e)=>this.setColor(e,'black')}></div>
                <div  id="white"onClick={(e)=>this.setColor(e,'white',20)}></div>
              </div>
              
              <div className='eraser'>Eraser</div>
              <button onClick={()=>save()}>Save</button>
              <button>Clear</button>
              <img id="canvasimg" alt='' />
          </div>

      </div>
    );
  }
}

export default App;
