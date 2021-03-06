import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {  RaisedButton, TextField } from 'material-ui';
import '../css/App.css'


const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <div className="Signup">
    <form action="/" onSubmit={onSubmit}>
      {errors.summary && <p className="error-message">{errors.summary}</p>}
      <div className="field-line">
        <TextField
          floatingLabelText="Name"
          name="name"
          errorText={errors.name}
          onChange={onChange}
          value={user.name}
        />
      </div>
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
        <RaisedButton type="submit" label="Create New Account" labelColor= "white"  />
      </div>
      <p style={{ fontSize: '15px', color: '#ffffff', padding: '5px' }}>Already have an account? <Link to={'/login'} style={{fontSize: '15px', color:'#00f0ff'}}>Log in</Link></p>
    </form>
  </div>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
