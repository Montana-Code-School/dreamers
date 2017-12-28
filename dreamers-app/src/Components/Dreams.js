import React from 'react';
// import ContentAdd from 'material-ui/svg-icons/content/add';
// import {Card, CardTitle, CardText,FloatingActionButton} from 'material-ui';
// import { Link } from 'react-router-dom'
import axios from 'axios';
import Auth from '../modules/Auth.js'

export default class Dreams extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: {}
    };
  }

  callToSomething() {
    // console.log("start call");
    // let token = Auth.getToken();
    // var instance = axios.create({
    //     baseURL: 'http://localhost:5000/api/journalsForUser',
    //     headers: {'Authorization': token}
    //   });
    // instance.get();
    const xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost:5000/api/journalsForUser');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message,
          user: xhr.response.user
        });
      }
    });
    xhr.send();
  }


  componentDidMount() {
    this.callToSomething();
  }

  render() {
    return (
      <div>
        hello
      </div>
    );
  }
}
