import React, { Component } from 'react';
import './Contact.css';
import { FaTrash } from 'react-icons/fa';
export default class Contact extends Component {
    render() {
      console.log("[Contact.js] >>>---> props:",this.props);
      return <tr>
                 <td className="Contact-td" style={{width: "36px"}}>{this.props.contact.id}</td>
                 <td className="Contact-td" style={{width: "260"}}>{this.props.contact.name}</td>
                 <td className="Contact-td">{this.props.contact.email}</td> 
                 <td className="Contact-td" style={{width: "300px"}}>{this.props.contact.interest}</td>
                 <td className="Contact-td" style={{textAlign: "center"}}>
                       <button className="Contact-button" 
                               style={{borderStyle: "none"}}
                               onClick={this.props.deleteContact}>
                          <FaTrash size={30}/>
                       </button>
                </td>
             </tr> 
    }
}

