import React from 'react';
import {List, ListItem, Toggle} from 'material-ui';

const styles = {
  root: {
  display: 'flex',
  flexWrap: 'wrap'
  }
};

const Settings = () => (
  <div style={styles.root}>
      <List>
        <ListItem
        rightToggle={<Toggle />}
        style={{color:'#ffffff',fontSize: '15px' }}
        primaryText="Notifications"
        />
        <ListItem
        style={{color:'#ffffff', fontSize: '15px'}}
        primaryText="Entry Reminder?"
        rightToggle={<Toggle />} />
      </List>
  </div>
);

export default Settings;
