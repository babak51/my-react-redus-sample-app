import React, { Component } from 'react';
import './App.css';
import { connect, ReactReduxContext } from 'react-redux';
import Contact from './Contact';
import { deleteContact } from "./store";

// mapping for data props
const mapStateToProps = (storeData) => ({
  contacts: storeData.contacts
})

// mapping for function props
const mapDispatchToProps = {
  deleteCallback: deleteContact
}

// connect
const connectFunction = connect(mapStateToProps, mapDispatchToProps);

class App extends Component {
  render() {
    console.log("[App.js] >>>>---> props:",this.props);
    return (
      <ReactReduxContext.Consumer>
          {({store}) => store.getState().contacts.map((c,i)=> 
                <table key={i} className="App-table">
                  <tbody>
                    <Contact 
                         contact={this.props.contacts[i]} 
                         deleteContact={this.props.deleteCallback}
                         />  
                  </tbody>
                </table>)}  
    </ReactReduxContext.Consumer>
    );
  }
}

export default connectFunction(App);


