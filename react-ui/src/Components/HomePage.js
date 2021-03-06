import React from 'react';
import { Paper } from 'material-ui';
import Auth from '../modules/Auth';

class HomePage extends React.Component {
  componentDidMount() {
    // update authenticated state on logout
    this.props.toggleAuthenticateStatus()
  }

  render() {
    return (
      <Paper className="container"
        zDepth={0}
        style={{
        backgroundColor:'transparent',
        padding:50,
        }}
      >
        {Auth.isUserAuthenticated() ? (
          <p style={{ margin:'20px', fontSize: '20px', color: '#ffffff' }}>Welcome! You are logged in.</p>
        ) : (
          <div>
          <p style={{ fontSize: '50px', color: '#ffffff' }}>Dreamers</p>
          <div>
            <p style={{ fontSize: '20px', color: '#ffffff' }}><em>“Each night, when I go to sleep, I die. And the next morning, when I wake up, I am reborn.” </em>Gandhi</p>
            <p style={{ fontSize: '10px', color: '#000000' }}>you are logged out</p>
          </div>
          </div>
      )}
      </Paper>
    )
  }
};

export default HomePage;
