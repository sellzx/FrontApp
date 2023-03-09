import React, { Component } from 'react';
import { TextInput } from 'react-native';
import Styles from '../assets/Styles';

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
          style={styles.input}
          placeholder="Email"
          onChangeText={this.handleEmailChange}
          value={this.state.email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={this.handlePasswordChange}
          value={this.state.password}
          secureTextEntry
        />
        <TextInput
          placeholder="Name"
          style={styles.input}
          onChangeText={this.handleNameChange}
          value={this.state.name}
        />
        <TextInput
          placeholder="Last Name"
          style={styles.input}
          onChangeText={this.handleLastNameChange}
          value={this.state.lastName}
        />
      </>
    );
  }
}

const styles = Styles;

export default RegistrationForm;