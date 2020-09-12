import React, { Component } from 'react';
import './App.css';
import { ReactReduxContext } from "react-redux";
import Contact from './Contact';

class App extends Component {
  onClickHandler(ev){
    console.log(ev.target.id);
    return null;
  }
  render() {
    
    return (
      <ReactReduxContext.Consumer>
        
        
          {({store}) => store.getState().contacts.map((c,i)=> 
                <table key={i} className="App-table">
                  <tbody>
                    <Contact 
                         contact={c} 
                         deleteThisContact={this.onClickHandler}
                         />  
                  </tbody>
                </table>)}
        
    </ReactReduxContext.Consumer>
    );
  }
}

export default App;
