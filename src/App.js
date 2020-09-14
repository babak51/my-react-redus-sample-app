import React, { Component } from 'react';
import './App.css';
import { ReactReduxContext } from "react-redux";
import Contact from './Contact';

class App extends Component {

  onClickHandler(contactID){
    console.log("---> delete contact with id = ", contactID);
  }

  render() {

    return (
      <ReactReduxContext.Consumer>
        
        
          {({store}) => store.getState().contacts.map((c,i)=> 
                <table key={i} className="App-table">
                  <tbody>
                    <Contact 
                         contact={c} 
                         deleteContact={this.onClickHandler}
                         />  
                  </tbody>
                </table>)}
        
    </ReactReduxContext.Consumer>
    );
  }
}

export default App;
