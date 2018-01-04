import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SignupForm from './SignupForm';
import InlineMessage from '../../elements/InlineMessage';
import { WARNING } from '../../constants';

class SignupPage extends Component {
  state = {
    showWarning: true
  };

  componentDidMount = () => {
    setTimeout(
      () =>
        this.setState({
          showWarning: false
        }),
      3000
    );
  };

  render() {
    return (
      <div id="signup-page">
        <h1>Signup</h1>
        {this.state.showWarning && (
          <InlineMessage type={WARNING} text="For employees only. Managers, please see IT." />
        )}
        <SignupForm />
        <h3>
          or <Link to="/login">Log In</Link>
        </h3>
      </div>
    );
  }
}

export default SignupPage;