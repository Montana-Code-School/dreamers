import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './log.css'
const logStyle = {
  height: '20rem',
  margin: '0 auto',
  width: '80%',
  paddingRight: '0.5rem'
}
export default class Log extends Component {
  render (){
    return (
      <div>
      <FloatingActionButton className="fab" >
        <ContentAdd />
      </FloatingActionButton>
    </div>
  )
  }
}
