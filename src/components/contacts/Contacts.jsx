import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-0 mt-4 pb-0">
                <span style={{color:'#ff0000'}}>Contacts</span>
              </h1>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
                ))}
            </React.Fragment>
            
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
