import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    if(name === '') {
      this.setState({errors: {name: 'Name is required'}})
      return;
    }
    if(email === '') {
      this.setState({errors: {email: 'Email is required'}})
      return;
    }
    if(phone === '') {
      this.setState({errors: {phone: 'Phone is required'}})
      return;
    }

    const newContact = {
      name,
      email,
      phone
    }

    const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact)

    dispatch({type: 'ADD_CONTACT', payload: res.data});


    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    this.props.history.push('/');
  };

  render() {
    const { name, email, phone, errors} = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-2">
              <div className="card-header pb-0">
                <h2 className="pt-2">Add Contact</h2>
              </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup 
                    label="Name"
                    name="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup 
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup 
                    label="Phone"
                    name="phone"
                    type="string"
                    placeholder="Enter phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add"
                    className="btn btn-lg pb-0 my-2 btn-dark"
                    style={{ width: "100%" }}
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
