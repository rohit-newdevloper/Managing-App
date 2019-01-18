import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardSection,
  Input,
  Button,
} from './common';
import { emailChanged } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    const { eChange } = this.props;
    eChange(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
          />
        </CardSection>

        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return { email: state.email };
};

export default connect(mapStateToProps, { eChange: emailChanged })(LoginForm);
