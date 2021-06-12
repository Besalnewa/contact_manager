import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired
  }

  state = {
    showContactInfo: false
  }

  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)

    dispatch({type: 'DELETE_CONTACT', payload: id})
  }
  
  render() {
    const { id, name, email, phone} = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-2 pt-2.5 pb-0">
              <h4 style={{fontWeight: 'bold'}} >
                {name} <i onClick={()=> this.setState({showContactInfo: !this.state.showContactInfo})} 
                className="fas fa-angle-down" 
                style={{cursor: 'pointer'}} />
                <i className="fas fa-times" 
                  style={{cursor: 'pointer', float: 'right', color: '#ff0000'}} 
                onClick={this.onDeleteClick.bind(this, id, dispatch)}/>
              <Link to={`contact/edit/${id}`}>
                <i className="fas fa-pencil-alt fa-sm"
                 style={{
                   cursor: 'pointer', 
                   float: 'right', 
                   color: '#000',
                   marginRight: '1rem'}} ></i>
              </Link>
              </h4>
              {showContactInfo ? (<ul className="list-group">
                <li className="list-group-item pt-3">Email: {email}</li>
                <li className="list-group-item pt-3 mb-3">Phone: {phone}</li>
              </ul>): null}
            </div>
          )
        }}
        
      </Consumer>
    )
  }
}

export default Contact;
