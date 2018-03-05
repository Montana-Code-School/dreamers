import React from 'react';
import {List, ListItem, Toggle, Subheader} from 'material-ui';

const styles = {
  root: {
  display: 'flex',
  flexWrap: 'wrap'
  }
};

const Settings = () => (
  <div style={styles.root}>
      <List>
        <Subheader style={{color:'#ffffff',fontSize: '20px' }} >Settings</Subheader>
        <ListItem
        rightToggle={<Toggle />}
        primaryText="Notifications"
        style={{color:'#ffffff',fontSize: '15px' }}
        />

        <ListItem style={{color:'#ffffff',fontSize: '15px' }} primaryText="Entry Reminder?" rightToggle={<Toggle />} />
        <ListItem style={{color:'#ffffff',fontSize: '15px' }} primaryText="Public/Private" rightToggle={<Toggle />} />
      </List>
  </div>
);

export default Settings;
