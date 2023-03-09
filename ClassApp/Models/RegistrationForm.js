import React, { Component } from 'react';
import { TextInput } from 'react-native';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      lastName: ''
    };
  }

  handleEmailChange = email => {
    this.setState({ email });
  };

  handlePasswordChange = password => {
    this.setState({ password });
  };

  handleNameChange = name => {
    this.setState({ name });
  };

  handleLastNameChange = lastName => {
    this.setState({ lastName });
  };

  getFormData = () => {
    return {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      lastName: this.state.lastName
    };
  };

  render() {
    return (
      <>
        <TextInput
          placeholder="Email"
          onChangeText={this.handleEmailChange}
          value={this.state.email}
        />
        <TextInput
          placeholder="Password"
          onChangeText={this.handlePasswordChange}
          value={this.state.password}
          secureTextEntry
        />
        <TextInput
          placeholder="Name"
          onChangeText={this.handleNameChange}
          value={this.state.name}
        />
        <TextInput
          placeholder="Last Name"
          onChangeText={this.handleLastNameChange}
          value={this.state.lastName}
        />
      </>
    );
  }
}

export default RegistrationForm;