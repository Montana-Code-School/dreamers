import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {TextField, RaisedButton } from 'material-ui';
import '../css/App.css'

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  successMessage,
  user,
  toggleAuthenticateStatus
}) => (
  <div className="Login">
    <form action="/" onSubmit={onSubmit}>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}
      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>
      <div className="field-line">
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>
      <div className="button-line">
        <RaisedButton type="submit" label="Log in" labelColor= "white" />
      </div>
      <p style={{color:'#ffffff', padding: '10px'}}>Don't have an account? <Link style={{color:"#00d1ff"}}to={'/signup'}>Create one</Link>.</p>
    </form>
  </div>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
